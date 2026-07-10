import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { RoutePlanner } from "./RoutePlanner";
import { routePhases } from "@/data/routeData";

const STORAGE_KEY = "w3-route-progress";
const totalSteps = routePhases.reduce((a, p) => a + p.steps.length, 0);

describe("RoutePlanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows zero progress initially and all phases", () => {
    render(<RoutePlanner />);
    expect(screen.getByText(`0/${totalSteps} completed`)).toBeInTheDocument();
    for (const phase of routePhases) {
      expect(screen.getByText(phase.name)).toBeInTheDocument();
    }
  });

  // The quest text isn't clickable; each step row has a small checkbox
  // button next to it (the row div is two levels above the quest <p>).
  const stepCheckbox = (quest: string) =>
    within(screen.getByText(quest).parentElement!.parentElement!).getByRole("button");

  it("expanding a phase and toggling a step updates progress and persists", () => {
    render(<RoutePlanner />);

    fireEvent.click(screen.getByText("White Orchard — The Beginning"));
    fireEvent.click(stepCheckbox("Lilac and Gooseberries"));

    expect(screen.getByText(`1/${totalSteps} completed`)).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ r1: true });

    fireEvent.click(stepCheckbox("Lilac and Gooseberries"));
    expect(screen.getByText(`0/${totalSteps} completed`)).toBeInTheDocument();
  });

  it("hydrates checked steps from localStorage", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ r1: true, r3: true }));
    render(<RoutePlanner />);
    expect(screen.getByText(`2/${totalSteps} completed`)).toBeInTheDocument();
  });

  it("survives corrupt localStorage by starting at zero", () => {
    localStorage.setItem(STORAGE_KEY, "%%%");
    render(<RoutePlanner />);
    expect(screen.getByText(`0/${totalSteps} completed`)).toBeInTheDocument();
  });

  it("filters steps by search term and shows an empty state for no matches", () => {
    render(<RoutePlanner searchTerm="Lilac" />);
    expect(screen.getByText("White Orchard — The Beginning")).toBeInTheDocument();
    expect(screen.queryByText("Velen — The Bloody Baron")).not.toBeInTheDocument();

    render(<RoutePlanner searchTerm="zzz-no-such-quest" />);
    expect(screen.getByText(/No quests found matching/)).toBeInTheDocument();
  });
});
