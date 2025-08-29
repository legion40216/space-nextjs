import data from "@/data/data.json";
import SpaceHeadingState from '@/components/global-ui/space-themes/space-heading-state';
import Client from "./_modules/components/client";


export default function Page() {
  const technologyData = data.technology
  return (
    <div className='min-h-[calc(100vh-var(--navbar-height))] 
        grid grid-cols-12 gap-4 lg:gap-8 items-stretch'
        >
      {/* Title Section - Full Width - Server Rendered */}
      <div className="col-span-12 md:col-start-2 md:col-end-6 flex 
      justify-center md:justify-start"
      >
        <SpaceHeadingState title="Space launch 101" />
      </div>
      
      {/* Interactive Content - Client Component */}
      <Client technology={technologyData} />
    </div>
  );
}