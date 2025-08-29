"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { SpaceDotBtn } from '@/components/global-ui/space-themes/space-dot-btn';

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  images: { png: string };
}

export default function Client({ crew }: { crew: CrewMember[] }) {
  const [selectedDot, setSelectedDot] = useState(0);
  const selectedDestination = crew[selectedDot];

  return (
    <>
      {/* Content Display */}
      <div className="grid md:place-items-center order-2 md:order-1">
        <div className="flex flex-col-reverse md:flex-col gap-4 md:gap-[8vw] text-center md:text-left w-full">
          <div>
            <div>
              <h2 className="text-muted-foreground text-2xl md:text-3xl mb-4">
                {selectedDestination.role.toUpperCase()}
              </h2>
              <h1 className="text-space-primary text-4xl md:text-6xl mb-4">
                {selectedDestination.name.toUpperCase()}
              </h1>
            </div>
            <p className="text-space-muted-foreground leading-7 max-w-[50ch] lg:max-w-[70ch] mx-auto md:mx-0">
              {selectedDestination.bio}
            </p>
          </div>
          
          {/* Interactive Dots */}
          <div className="flex gap-4 mb-4 mx-auto md:mx-0">
            {crew.map((_, index) => (
              <SpaceDotBtn
                key={index}
                className={`hover:bg-space-muted-foreground ${
                  index === selectedDot ? 'bg-space-primary' : 'bg-muted-foreground'
                }`}
                onClick={() => setSelectedDot(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Display */}
      <div className="order-1 md:order-2 relative w-full aspect-square h-full">
        <Image
          src={selectedDestination.images.png}
          alt={selectedDestination.name}
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}