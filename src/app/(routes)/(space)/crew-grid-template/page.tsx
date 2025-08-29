import data from "@/data/data.json";

import SpaceHeadingState from '@/components/global-ui/space-themes/space-heading-state';
import Client from "./_modules/components/client";

export default function Page() {
  const crewData = data.crew
  return (
    <div className='min-h-[calc(100vh-var(--navbar-height))] 
    grid items-stretch'
    >
      <div className="grid-container grid-container--crew 
      gap-y-4 md:gap-x-8 md:gap-y-0"
      >
        {/* Static Title - Server Rendered */}
        <div className="title">
          <SpaceHeadingState title="Meet your crew" />
        </div>
        
        {/* Interactive Content - Client Component */}
        <Client crew={crewData} />
      </div>
    </div>
  );
}