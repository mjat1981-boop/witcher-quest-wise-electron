import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Swords, FlaskConical, Bomb } from "lucide-react";
import type { Quest } from "@/data/questData";

const typeStyles: Record<string, string> = {
  main: "bg-quest-main text-primary-foreground",
  side: "bg-quest-side text-primary-foreground",
  contract: "bg-quest-contract text-primary-foreground",
  treasure: "bg-quest-treasure text-primary-foreground",
  gwent: "bg-quest-gwent text-primary-foreground",
  collectible: "bg-quest-collectible text-primary-foreground",
};

const typeLabels: Record<string, string> = {
  main: "Main",
  side: "Side",
  contract: "Contract",
  treasure: "Treasure",
  gwent: "Gwent",
  collectible: "Info",
};

interface QuestItemProps {
  quest: Quest;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

export function QuestItem({ quest, isCompleted, onToggle }: QuestItemProps) {
  const [showSpoiler, setShowSpoiler] = useState(false);

  const getSpoilerIcon = () => {
    const tip = quest.spoilerTip || "";
    if (tip.startsWith("⚔️")) return <Swords className="h-4 w-4" />;
    if (tip.startsWith("🧪")) return <FlaskConical className="h-4 w-4" />;
    if (tip.startsWith("💣")) return <Bomb className="h-4 w-4" />;
    return <AlertTriangle className="h-4 w-4" />;
  };

  return (
    <div className="space-y-0">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isCompleted
            ? "bg-success/10 border border-success/20"
            : "bg-secondary/50 border border-border hover:bg-secondary/80"
        }`}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(quest.id)}
          className="h-5 w-5 rounded accent-primary cursor-pointer flex-shrink-0"
        />
        <div
          className={`h-3 w-3 rounded-full flex-shrink-0 transition-colors ${
            isCompleted ? "bg-success" : "bg-muted-foreground/30"
          }`}
        />
        <span
          className={`flex-1 text-lg ${
            isCompleted ? "line-through text-muted-foreground" : ""
          }`}
        >
          {quest.name}
        </span>
        <span
          className={`px-2 py-0.5 rounded text-xs font-heading font-semibold tracking-wide uppercase ${
            typeStyles[quest.type]
          }`}
        >
          {typeLabels[quest.type]}
        </span>
        {quest.spoilerTip && (
          <button
            onClick={() => setShowSpoiler(!showSpoiler)}
            className="p-1.5 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
            title="Show/hide guide tip"
          >
            {showSpoiler ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {showSpoiler && quest.spoilerTip && (
        <div className="ml-11 mr-4 px-4 py-3 bg-muted/50 border-l-2 border-primary rounded-b-lg text-sm leading-relaxed flex items-start gap-2">
          <span className="flex-shrink-0 mt-0.5">{getSpoilerIcon()}</span>
          <span>{quest.spoilerTip.replace(/^(?:⚠️|⚔️|🧪|💣)\s*/u, "")}</span>
        </div>
      )}
    </div>
  );
}
