import { Button } from "@/components/ui/button";

export function SpaceExplorerBtn(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className="grid place-items-center aspect-square
                 rounded-full bg-space-primary 
                 text-space-primary-foreground
                 font-serif text-2xl disabled:cursor-not-allowed
                 border-0 cursor-pointer hover:bg-space-primary"
      style={{
        height: 'clamp(150px, 30vw, 200px)',
        width:  'clamp(150px, 30vw, 200px)'
      }}
      {...props}
    />
  );
}