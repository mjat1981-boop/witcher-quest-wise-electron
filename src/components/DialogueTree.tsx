import { useState } from "react";
import { ChevronDown, ChevronRight, TreePine } from "lucide-react";
import type { DialogueTree, DialogueChoice, DialogueOutcome } from "@/data/dialogueData";

const outcomeColors: Record<DialogueOutcome, string> = {
  good: "border-l-success bg-success/5",
  bad: "border-l-destructive bg-destructive/5",
  neutral: "border-l-warning bg-warning/5",
};

const outcomeDot: Record<DialogueOutcome, string> = {
  good: "bg-success",
  bad: "bg-destructive",
  neutral: "bg-warning",
};

const outcomeLabel: Record<DialogueOutcome, string> = {
  good: "Best Outcome",
  bad: "Bad Outcome",
  neutral: "Neutral",
};

function ChoiceNode({ choice, depth = 0 }: { choice: DialogueChoice; depth?: number }) {
  const [open, setOpen] = useState(false);
  const hasFollowUp = choice.followUp && choice.followUp.length > 0;

  return (
    <div className={`ml-${depth > 0 ? "4" : "0"}`}>
      <div
        className={`border-l-4 rounded-r-lg p-3 mb-2 ${outcomeColors[choice.outcome]} ${
          hasFollowUp ? "cursor-pointer" : ""
        }`}
        onClick={() => hasFollowUp && setOpen(!open)}
      >
        <div className="flex items-start gap-2">
          <div className={`h-3 w-3 rounded-full flex-shrink-0 mt-1.5 ${outcomeDot[choice.outcome]}`} />
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-heading font-semibold text-foreground">
                "{choice.text}"
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded font-heading ${
                  choice.outcome === "good"
                    ? "bg-success/20 text-success"
                    : choice.outcome === "bad"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-warning/20 text-warning"
                }`}
              >
                {outcomeLabel[choice.outcome]}
              </span>
              {hasFollowUp && (
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                  {choice.followUp!.length} follow-up{choice.followUp!.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {choice.result}
            </p>
          </div>
        </div>
      </div>
      {open && hasFollowUp && (
        <div className="ml-6 border-l border-border pl-2">
          {choice.followUp!.map((fc, i) => (
            <ChoiceNode key={i} choice={fc} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function DialogueTreeCard({ tree }: { tree: DialogueTree }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:bg-secondary/80 transition-colors text-left"
      >
        <TreePine className="h-5 w-5 text-primary flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-foreground">{tree.questName}</h4>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{tree.context}</p>
        </div>
        {open ? (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="mt-2 ml-2">
          <p className="text-sm text-muted-foreground mb-3 px-2 italic">{tree.context}</p>
          {tree.choices.map((choice, i) => (
            <ChoiceNode key={i} choice={choice} />
          ))}
        </div>
      )}
    </div>
  );
}

interface DialogueSectionViewProps {
  section: { title: string; id: string; trees: DialogueTree[] };
}

export function DialogueSectionView({ section }: DialogueSectionViewProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 py-3 px-1 border-b border-border hover:border-primary/50 transition-colors group"
      >
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-primary" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {section.title}
        </h3>
        <span className="text-sm text-muted-foreground font-heading">
          {section.trees.length} dialogue{section.trees.length > 1 ? "s" : ""}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          {section.trees.map((tree) => (
            <DialogueTreeCard key={tree.id} tree={tree} />
          ))}
        </div>
      )}
    </div>
  );
}
