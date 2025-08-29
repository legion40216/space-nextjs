"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { SpaceNumBtn } from '@/components/global-ui/space-themes/space-num-btn';

interface Technology {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
}

interface TechnologyProps {
  technology: Technology[];
}

export default function Client({ technology }: TechnologyProps) {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setSelectedButton(index);
  };

  const selectedTechnology = technology[selectedButton];

  return (
    <>
      {/* Content Section - Left Side */}
      <div className="grid md:place-content-center order-2 
      md:order-1 col-span-12 md:col-start-2 md:col-end-7 "
      >
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Navigation numbers */}
          <div className="flex md:flex-col mx-auto md:mx-0 gap-8">
            {technology.map((item, index) => (
              <SpaceNumBtn
                key={index}
                aria-label={`Select technology ${index + 1}`}
                onClick={() => handleDotClick(index)}
                className={`text-lg font-cond hover:border-space-primary hover:text-space-primary transition-transform ${
                  index === selectedButton &&  "bg-space-primary text-space-primary-foreground scale-110"
                }`}
              >
                {index + 1}
              </SpaceNumBtn>
            ))}
          </div>

          {/* Technology text */}
          <div className="text-center md:text-left 
          px-4 md:px-0 space-y-4"
          >
            <div className='space-y-4'>
              <h2 className="text-muted-foreground text-2xl 
              md:text-3xl uppercase"
              >
                the technology...
              </h2>
              <h1 className="text-space-primary text-4xl md:text-6xl">
                {selectedTechnology.name.toUpperCase()}
              </h1>
            </div>

            <p className="text-space-muted-foreground 
            leading-7 max-w-[50ch] lg:max-w-[70ch] 
            mx-auto md:mx-0"
            >
              {selectedTechnology.description}
            </p>
          </div>
        </div>
      </div>

      {/* Image Section - Right Side */}
      <div
        className="order-1 md:order-2 col-span-12 
        md:col-span-6 flex justify-end relative 
        h-full w-full aspect-video md:aspect-square"
      >
        {/* Mobile (landscape) */}
        <Image
          src={selectedTechnology.images.landscape}
          alt={selectedTechnology.name}
          fill
          className="object-contain block md:hidden"
        />

        {/* Desktop (portrait) */}
        <Image
          src={selectedTechnology.images.portrait}
          alt={selectedTechnology.name}
          fill
          className="object-contain hidden md:block"
        />
      </div>
    </>
  );
}