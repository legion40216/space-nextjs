import { Button } from "@/components/ui/button";

export function SpaceNumBtn(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={`
        aspect-square
        h-15
        w-15
        flex 
        items-center 
        justify-center
        rounded-full
        p-0
        border
        border-space-muted
        bg-transparent 
        text-space-muted-foreground
        transition-colors
        disabled:cursor-not-allowed
        hover:bg-transparent
        ${props.className ?? ""}
      `}
    />
  );
}
