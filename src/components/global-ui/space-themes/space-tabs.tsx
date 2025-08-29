"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SpaceTabsProps {
  tabActive: boolean;
  tabLabel: string;
  onClick?: () => void;
}

export default function SpaceTabs({ tabActive, tabLabel, onClick }: SpaceTabsProps) {
  return (
    <Button 
    className={cn(
        tabActive
          ? "text-space-primary border-b-2 border-space-primary"
          : "text-space-accent-foreground border-transparent border-b-2",
        "transition-colors",
        "text-lg list-none tracking-[0.2em] font-cond uppercase py-6 px-0", 
        "rounded-none bg-transparent hover:bg-transparent hover:text-space-muted-foreground"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span>{tabLabel.charAt(0).toUpperCase() + tabLabel.slice(1)}</span>
      </div>
    </Button>
  );
}
