import React from 'react'

import Link from 'next/link'
import { SpaceExplorerBtn } from '@/components/global-ui/space-themes/space-explorer-btn';

export default function Page() {
  return (
    <div className="grid md:content-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-[5vw_1fr_1fr_5vw] 
      lg:grid-cols-2 gap-4 md:gap-5"
      >
        <div className="grid text-center place-items-center 
        md:text-left md:place-items-end md:col-start-2 md:col-end-3
        lg:col-start-1 lg:col-end-2"
        >
          <div className="text-space-primary max-w-[50ch] w-full">
            <h1 className="grid text-space-accent-foreground font-cond 
            tracking-[0.2em] uppercase text-base md:text-3xl"
            >
              So, you want to travel to
              <span className="text-space-primary font-serif text-8xl 
              md:text-9xl"
              >
                Space
              </span>
            </h1>
            <p className="text-base md:text-lg text-space-muted-foreground leading-7">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        <div className="grid place-items-center md:place-items-end 
        lg:place-items-center md:col-start-3 md:col-end-4 lg:col-start-2 
        lg:col-end-3"
        >
          <Link href="/destination" className="no-underline">
            <SpaceExplorerBtn>
              <span>Explorer</span>
            </SpaceExplorerBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
