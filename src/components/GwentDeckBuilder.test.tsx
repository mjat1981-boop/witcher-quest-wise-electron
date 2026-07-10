import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { GwentDeckBuilder } from "./GwentDeckBuilder";

const DECK_STORAGE_KEY = "witcher3-gwent-decks";

// Real cards from gwentData used as fixtures:
//   nr-vernon-roche  "Vernon Roche"        Close, str 10, hero
//   nr-siegfried     "Siegfried of Denesle" Close, str 5
//   nr-foltest-steel "Foltest – The Steel-Forged" Leader

/** Card names appear in both the deck list (inside a div) and the available
 *  list (inside an add button); the deck entry is the one not inside a button. */
function deckEntryFor(name: string): HTMLElement {
  const el = screen.getAllByText(name).find(e => e.closest("button") === null);
  expect(el, `deck entry for ${name}`).toBeTruthy();
  return el!.parentElement!.parentElement!;
}

function addCardFromAvailableList(name: string) {
  const btn = screen.getAllByText(name).map(e => e.closest("button")).find(Boolean);
  fireEvent.click(btn!);
}

describe("GwentDeckBuilder", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("starts on the faction picker and enters the builder on selection", () => {
    render(<GwentDeckBuilder />);
    expect(screen.getByText("Choose Your Faction")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Northern Realms/ }));

    expect(screen.getByText("Deck Stats")).toBeInTheDocument();
    expect(screen.getByText("Need 22 more unit cards")).toBeInTheDocument();
  });

  it("adding cards updates counts, strength breakdown, and the validity hint", () => {
    render(<GwentDeckBuilder />);
    fireEvent.click(screen.getByRole("button", { name: /Northern Realms/ }));

    addCardFromAvailableList("Vernon Roche");        // Close, 10 str
    addCardFromAvailableList("Siegfried of Denesle"); // Close, 5 str

    expect(screen.getByText("Your Deck (2 cards)")).toBeInTheDocument();
    expect(screen.getByText(/Close: 2 \(15 str\)/)).toBeInTheDocument();
    expect(screen.getByText("Need 20 more unit cards")).toBeInTheDocument();
  });

  it("saves a deck to localStorage and shows it on the faction screen", () => {
    render(<GwentDeckBuilder />);
    fireEvent.click(screen.getByRole("button", { name: /Northern Realms/ }));
    addCardFromAvailableList("Vernon Roche");

    fireEvent.change(screen.getByPlaceholderText("Deck name..."), { target: { value: "Roche Rush" } });
    fireEvent.click(screen.getByRole("button", { name: /Save/ }));

    const saved = JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)!);
    expect(saved).toEqual([
      { name: "Roche Rush", faction: "Northern Realms", leaderId: null, cardIds: ["nr-vernon-roche"] },
    ]);

    fireEvent.click(screen.getByRole("button", { name: /Change/ }));
    expect(screen.getByText("Saved Decks")).toBeInTheDocument();
    expect(screen.getByText("Roche Rush")).toBeInTheDocument();
  });

  it("loading a saved deck restores faction and cards", () => {
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([
      { name: "Stored", faction: "Northern Realms", leaderId: "nr-foltest-steel", cardIds: ["nr-vernon-roche", "nr-siegfried"] },
    ]));
    render(<GwentDeckBuilder />);

    fireEvent.click(screen.getByText("Stored"));

    expect(screen.getByText("Your Deck (2 cards)")).toBeInTheDocument();
    expect(deckEntryFor("Vernon Roche")).toBeInTheDocument();
    expect(deckEntryFor("Siegfried of Denesle")).toBeInTheDocument();
  });

  it("drops stale card ids on load so removal targets the right card", () => {
    // "removed-card-id" simulates a card deleted from gwentData after the
    // deck was saved. It must be dropped on load; otherwise the rendered
    // deck (2 entries) disagrees with deckCardIds (3 entries) and removing
    // the 2nd entry would silently delete the wrong id.
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([
      { name: "Stale", faction: "Northern Realms", leaderId: null, cardIds: ["nr-vernon-roche", "removed-card-id", "nr-siegfried"] },
    ]));
    render(<GwentDeckBuilder />);
    fireEvent.click(screen.getByText("Stale"));

    expect(screen.getByText("Your Deck (2 cards)")).toBeInTheDocument();

    // Remove Siegfried (2nd rendered entry) — with a stale id still in the
    // list this used to remove the stale id instead, leaving Siegfried.
    fireEvent.click(within(deckEntryFor("Siegfried of Denesle")).getByRole("button"));

    expect(screen.getByText("Your Deck (1 cards)")).toBeInTheDocument();
    expect(screen.getAllByText("Vernon Roche").some(e => e.closest("button") === null)).toBe(true);
    expect(screen.getAllByText("Siegfried of Denesle").every(e => e.closest("button") !== null)).toBe(true);
  });

  it("deletes a saved deck", () => {
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([
      { name: "Doomed", faction: "Monsters", leaderId: null, cardIds: [] },
    ]));
    render(<GwentDeckBuilder />);

    const row = screen.getByText("Doomed").closest("div")!.parentElement!.parentElement!;
    const buttons = within(row).getAllByRole("button");
    fireEvent.click(buttons[buttons.length - 1]); // trash button is last

    expect(screen.queryByText("Doomed")).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)!)).toEqual([]);
  });

  it("falls back to no saved decks when storage is corrupt", () => {
    localStorage.setItem(DECK_STORAGE_KEY, "{broken json");
    render(<GwentDeckBuilder />);
    expect(screen.getByText("Choose Your Faction")).toBeInTheDocument();
    expect(screen.queryByText("Saved Decks")).not.toBeInTheDocument();
  });
});
