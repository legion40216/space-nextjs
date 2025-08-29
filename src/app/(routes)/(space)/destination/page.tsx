import data from "@/data/data.json";

import SpaceHeadingState from "@/components/global-ui/space-themes/space-heading-state";
import Client from "./_modules/components/client";

export default function Page() {
  const destinations = data.destinations
  return (
    <div className="grid place-items-center 
    min-h-[calc(100vh-var(--navbar-height))]"
    >
      <div className="grid grid-cols-1 w-full grid-cols-custom">
        {/* Static Title Section - Server Rendered */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-start-2 
        md:col-span-2 md:gap-8 lg:gap-[5rem] mb-8 text-center md:text-left"
        >
          <SpaceHeadingState title="Pick your destination" />
        </div>

        {/* Interactive Content - Client Component */}
        <Client destinations={destinations} />
      </div>
    </div>
  );
}