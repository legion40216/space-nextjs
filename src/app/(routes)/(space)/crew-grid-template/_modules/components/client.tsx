"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { SpaceDotBtn } from '@/components/global-ui/space-themes/space-dot-btn';

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  images: {
    png: string;
  };
}

interface CrewProps {
  crew: CrewMember[];
}

export default function Client({ crew }: CrewProps) {
  const [selectedDot, setSelectedDot] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setSelectedDot(index);
  };

  const selectedDestination = crew[selectedDot];

  return (
    <>
      {/* Dynamic Content */}
      <div className="content text-center md:text-left">
        <div>
          <div>
            <h2 className="text-muted-foreground text-2xl 
            md:text-3xl mb-4"
            >
              {selectedDestination.role.toUpperCase()}
            </h2>
            <h1 className="text-space-primary text-4xl md:text-6xl mb-4">
              {selectedDestination.name.toUpperCase()}
            </h1>
          </div>
          <p className="text-space-muted-foreground leading-7
          max-w-[50ch] lg:max-w-[70ch] mx-auto md:mx-0"
          >
            {selectedDestination.bio}
          </p>
        </div>
      </div>

      {/* Interactive Navigation */}
      <div className="tabs flex gap-4 mt-8 mx-auto md:mx-0">
        {crew.map((item, index) => (
          <SpaceDotBtn
            key={index}
            className={`hover:bg-space-muted-foreground ${
              index === selectedDot ? "bg-space-primary" : "bg-muted-foreground"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Dynamic Image */}
      <div className="image relative md:h-full w-full 
      aspect-square"
      >
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