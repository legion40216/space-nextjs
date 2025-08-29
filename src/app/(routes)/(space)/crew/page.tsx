import data from "@/data/data.json";

import SpaceHeadingState from '@/components/global-ui/space-themes/space-heading-state';
import Client from "./_modules/components/client";

export default function Page() {
  return (
    <div className='min-h-[calc(100vh-var(--navbar-height))] grid items-stretch'>
      <div className="grid grid-cols-1 w-full grid-cols-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-start-2
         md:col-span-2 md:gap-8 lg:gap-[5rem] mx-auto md:mx-0 mb-8"
         >
          <SpaceHeadingState title="Pick your destination" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:col-start-2 
        md:col-span-2 gap-4 lg:gap-[5rem]"
        >        
          <Client crew={data.crew} />         
        </div>
      </div>
    </div>
  );
}