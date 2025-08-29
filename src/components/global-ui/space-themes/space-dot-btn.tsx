import { Button } from "@/components/ui/button";

export function SpaceDotBtn(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={`
        h-4 w-4  
        rounded-full           
        p-0                    
        border-0 cursor-pointer
        transition-colors
        disabled:cursor-not-allowed
        bg-muted-foreground
        ${props.className ?? ""}
      `}
    />
  );
}
