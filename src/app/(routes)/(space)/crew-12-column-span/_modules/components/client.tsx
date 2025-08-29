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
      {/* Content Section - Left Side */}
      <div className="md:grid md:grid-row-12 order-2 md:order-1 col-span-12 
      md:col-start-2 md:col-end-6 flex flex-col-reverse gap-4">
        <div className="md:row-start-8 md:row-end-9 text-center md:text-left">
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

        {/* Navigation Dots */}
        <div className="md:row-start-10 md:row-end-12 flex gap-4 
        justify-center md:justify-start"
        >
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
      </div>

      {/* Image Section - Right Side */}
      <div className="order-1 md:order-2 col-span-12 md:col-start-7 md:col-span-6 
      flex justify-end relative w-full h-full aspect-square "
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