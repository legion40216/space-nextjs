"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import SpaceTabs from "../../../../../../components/global-ui/space-themes/space-tabs";

interface Destination {
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    png: string;
  };
}

interface DestinationProps {
  destinations: Destination[];
}

export default function Client({ destinations }: DestinationProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const selectedDestination = destinations[selectedTab];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 
    md:col-start-2 md:col-span-2 md:gap-8 lg:gap-[5rem] space-y-8"
    >
      <div className="space-y-8"> 
        {/* Tabs visible only on mobile, positioned after title */}
        <div className="flex items-center justify-evenly 
        gap-2 md:hidden"
        >
          {destinations.map((item, index) => (
            <SpaceTabs
              key={index}
              tabActive={index === selectedTab}
              tabLabel={item.name}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
        
        <div className="grid place-item-center mx-auto 
        max-w-4/5 lg:w-full"
        >
          <div className="relative h-full w-full aspect-square">
            <Image
              src={selectedDestination.images.png}
              alt={selectedDestination.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="text-center md:text-left space-y-8">
          {/* Tabs visible only on desktop */}
          <div className="hidden md:flex items-center 
          justify-evenly md:justify-between gap-2"
          >
            {destinations.map((item, index) => (
              <SpaceTabs
                key={index}
                tabActive={index === selectedTab}
                tabLabel={item.name}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>

          <div>
            <h2 className="text-space-primary text-8xl uppercase">
              {selectedDestination.name}
            </h2>
            <p className="text-space-muted-foreground leading-7 
            max-w-[50ch] lg:max-w-[70ch]"
            >
              {selectedDestination.description}
            </p>
          </div>

          <Separator/>

          <div className="flex flex-row items-center justify-evenly 
          md:justify-between"
          >
            <div>
              <p className="text-space-accent-foreground text-sm 
              tracking-[0.15em] uppercase mb-2 font-mono"
              >
                Avg. Distance
              </p>
              <p className="text-space-primary text-3xl 
              font-cond"
              >
                {selectedDestination.distance}
              </p>
            </div>

            <div>
              <p className="text-space-accent-foreground text-sm 
              tracking-[0.15em] uppercase mb-2 font-mono"
              >
                Est. Travel Time
              </p>
              <p className="text-space-primary text-3xl 
              font-cond"
              >
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}