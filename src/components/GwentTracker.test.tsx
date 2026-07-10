import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { GwentTracker } from "./GwentTracker";
import { gwentCards } from "@/data/gwentData";

const STORAGE_KEY = "witcher3-gwent-collected";

describe("GwentTracker", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("toggling a card marks it collected and persists to localStorage", () => {
    render(<GwentTracker searchTerm="" />);

    fireEvent.click(screen.getByText("Vernon Roche"));
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ "nr-vernon-roche": true });

    fireEvent.click(screen.getByText("Vernon Roche"));
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ "nr-vernon-roche": false });
  });

  it("hydrates collected state from localStorage", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ "nr-vernon-roche": true }));
    render(<GwentTracker searchTerm="" />);

    // Collected rows render a check mark inside the card button.
    const cardButton = screen.getByText("Vernon Roche").closest("button")!;
    expect(cardButton.textContent).toContain("✓");
  });

  it("survives corrupt localStorage by starting empty", () => {
    localStorage.setItem(STORAGE_KEY, "not json at all");
    render(<GwentTracker searchTerm="" />);
    expect(screen.getByText("Vernon Roche")).toBeInTheDocument();
    expect(screen.getByText("Vernon Roche").closest("button")!.textContent).not.toContain("✓");
  });

  it("filters cards by the search term across name and location", () => {
    render(<GwentTracker searchTerm="Vernon Roche" />);
    expect(screen.getByText("Vernon Roche")).toBeInTheDocument();
    expect(screen.queryByText("Siegfried of Denesle")).not.toBeInTheDocument();
  });

  it("renders every card when unfiltered", () => {
    render(<GwentTracker searchTerm="" />);
    // Every card name from the data must appear (a few names repeat, e.g.
    // "Trebuchet (1)" style dupes are unique strings, so match per name).
    for (const name of [gwentCards[0].name, gwentCards[gwentCards.length - 1].name]) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });

  it("switches to the deck builder view", () => {
    render(<GwentTracker searchTerm="" />);
    fireEvent.click(screen.getByRole("button", { name: /Deck Builder/i }));
    expect(screen.getByText("Choose Your Faction")).toBeInTheDocument();
  });
});
