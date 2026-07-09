import { describe, it, expect, beforeEach } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useQuestProgress } from "./useQuestProgress";

const STORAGE_KEY = "witcher3Progress";

describe("useQuestProgress", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("starts empty when nothing is persisted", () => {
    const { result } = renderHook(() => useQuestProgress());
    expect(result.current.completed).toEqual({});
    expect(result.current.getCount(["a", "b"])).toBe(0);
  });

  it("hydrates initial state from localStorage", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ q1: true }));
    const { result } = renderHook(() => useQuestProgress());
    expect(result.current.completed).toEqual({ q1: true });
    expect(result.current.getCount(["q1", "q2"])).toBe(1);
  });

  it("falls back to empty state when persisted JSON is corrupt", () => {
    localStorage.setItem(STORAGE_KEY, "{not valid json");
    const { result } = renderHook(() => useQuestProgress());
    expect(result.current.completed).toEqual({});
  });

  it("toggle marks a quest complete and persists it", () => {
    const { result } = renderHook(() => useQuestProgress());

    act(() => result.current.toggle("q1"));

    expect(result.current.completed).toEqual({ q1: true });
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({ q1: true });
  });

  it("toggle is idempotent-in-reverse: a second toggle clears the quest", () => {
    const { result } = renderHook(() => useQuestProgress());

    act(() => result.current.toggle("q1"));
    act(() => result.current.toggle("q1"));

    expect(result.current.completed).toEqual({});
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({});
  });

  it("getCount only counts ids that are currently completed", () => {
    const { result } = renderHook(() => useQuestProgress());

    act(() => result.current.toggle("q1"));
    act(() => result.current.toggle("q3"));

    expect(result.current.getCount(["q1", "q2", "q3", "q4"])).toBe(2);
    expect(result.current.getCount([])).toBe(0);
    expect(result.current.getCount(["q2"])).toBe(0);
  });

  it("resetAll clears state and removes the storage key", () => {
    const { result } = renderHook(() => useQuestProgress());

    act(() => result.current.toggle("q1"));
    act(() => result.current.toggle("q2"));
    act(() => result.current.resetAll());

    expect(result.current.completed).toEqual({});
    // resetAll removes the key; the persistence effect then re-writes "{}".
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}")).toEqual({});
  });
});
