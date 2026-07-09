import { describe, it, expect } from "vitest";
import { gwentCards, gwentFactions } from "./gwentData";
import { questTabs } from "./questData";
import { dialogueSections, type DialogueChoice } from "./dialogueData";
import { monsters } from "./bestiaryData";
import { mapRegions } from "./mapData";
import { routePhases } from "./routeData";

/**
 * These are content-integrity guards for a data-heavy guide app. They don't
 * test behaviour so much as pin down invariants that hand-edited data files
 * must uphold — duplicate ids, unknown enum values, and dangling references
 * are the failure modes most likely to slip in during content edits.
 */

function findDuplicates(ids: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  }
  return [...dupes];
}

describe("gwentData", () => {
  it("has unique card ids", () => {
    expect(findDuplicates(gwentCards.map((c) => c.id))).toEqual([]);
  });

  it("every card has a known faction", () => {
    const bad = gwentCards.filter((c) => !gwentFactions.includes(c.faction));
    expect(bad.map((c) => c.id)).toEqual([]);
  });

  it("every card has a valid row", () => {
    const rows = new Set(["Close", "Ranged", "Siege", "Leader", "Special"]);
    const bad = gwentCards.filter((c) => !rows.has(c.row));
    expect(bad.map((c) => c.id)).toEqual([]);
  });

  it("every card has a non-empty name and a non-negative integer strength", () => {
    const bad = gwentCards.filter(
      (c) => !c.name?.trim() || !Number.isInteger(c.strength) || c.strength < 0
    );
    expect(bad.map((c) => c.id)).toEqual([]);
  });
});

describe("questData", () => {
  const allQuests = questTabs.flatMap((t) => t.sections.flatMap((s) => s.quests));

  it("has globally unique tab ids", () => {
    expect(findDuplicates(questTabs.map((t) => t.id))).toEqual([]);
  });

  it("has globally unique quest ids", () => {
    // Index.tsx flattens every quest into one list keyed by id, so a collision
    // would make two quests share completion state.
    expect(findDuplicates(allQuests.map((q) => q.id))).toEqual([]);
  });

  it("every quest has a known type", () => {
    const types = new Set(["main", "side", "contract", "treasure", "gwent", "collectible"]);
    const bad = allQuests.filter((q) => !types.has(q.type));
    expect(bad.map((q) => q.id)).toEqual([]);
  });

  it("every quest has a non-empty name", () => {
    expect(allQuests.filter((q) => !q.name?.trim()).map((q) => q.id)).toEqual([]);
  });
});

describe("dialogueData", () => {
  const allTrees = dialogueSections.flatMap((s) => s.trees);

  it("has globally unique dialogue tree ids", () => {
    expect(findDuplicates(allTrees.map((t) => t.id))).toEqual([]);
  });

  it("every choice (recursively) has a known outcome", () => {
    const outcomes = new Set(["good", "bad", "neutral"]);
    const badChoices: string[] = [];
    const walk = (choices: DialogueChoice[], path: string) => {
      choices.forEach((c, i) => {
        if (!outcomes.has(c.outcome)) badChoices.push(`${path}[${i}]:${c.outcome}`);
        if (c.followUp) walk(c.followUp, `${path}[${i}]`);
      });
    };
    allTrees.forEach((t) => walk(t.choices, t.id));
    expect(badChoices).toEqual([]);
  });
});

describe("bestiaryData", () => {
  it("has unique monster ids", () => {
    expect(findDuplicates(monsters.map((m) => m.id))).toEqual([]);
  });

  it("every monster has a known difficulty", () => {
    const diffs = new Set(["Easy", "Medium", "Hard", "Boss"]);
    const bad = monsters.filter((m) => !diffs.has(m.difficulty));
    expect(bad.map((m) => m.id)).toEqual([]);
  });
});

describe("mapData", () => {
  it("has unique region ids", () => {
    expect(findDuplicates(mapRegions.map((r) => r.id))).toEqual([]);
  });

  it("has unique pin ids within each region", () => {
    for (const region of mapRegions) {
      expect(findDuplicates(region.pins.map((p) => p.id))).toEqual([]);
    }
  });
});

describe("routeData", () => {
  const allSteps = routePhases.flatMap((p) => p.steps);

  it("has unique phase ids", () => {
    expect(findDuplicates(routePhases.map((p) => p.id))).toEqual([]);
  });

  it("has globally unique step ids", () => {
    // RoutePlanner keys checked-step state by id across all phases.
    expect(findDuplicates(allSteps.map((s) => s.id))).toEqual([]);
  });

  it("every step has a positive level", () => {
    const bad = allSteps.filter((s) => !Number.isInteger(s.level) || s.level < 1);
    expect(bad.map((s) => s.id)).toEqual([]);
  });
});
