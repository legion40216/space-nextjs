"use client";
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { useNavRoutes } from "./nav-group";
import NavLinks from "@/components/global-ui/nav-links";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function NavMobile() {
  const routes = useNavRoutes();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} 
        className="bg-transparent text-space-accent-foreground border-transparent 
        hover:border-space-primary hover:bg-transparent 
        hover:text-space-accent-foreground"
        >
          <AlignJustify className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-3 [&>button]:hidden navbar-blur border-transparent">
        <SheetTitle className="hidden">Menu</SheetTitle>

        <SheetDescription className="hidden">
          Navigation for mobile screens
        </SheetDescription>

        <div>
            <div className="flex justify-end">
            <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size={"icon"} 
                  className="bg-transparent text-space-accent-foreground border-transparent 
                  hover:border-space-primary hover:bg-transparent 
                  hover:text-space-accent-foreground"
                >
                <X className="size-5" />
                </Button>
            </SheetTrigger>
            </div>
        <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible className="w-full">
  {routes.map((item, index) =>
    item.subLinks ? (
      <AccordionItem onClick={() => setIsOpen(false)} key={index} value={item.label} className={"border-0"}>
        <AccordionTrigger className={`flex justify-between items-center 
        py-4 text-lg uppercase border-b-2 border-transparent 
        hover:border-space-primary rounded-none hover:underline-none ${item.active ? `${isOpen ? "" : "border-space-primary"}` : ""}`}
        >
        <div className="flex w-full justify-between items-center
          text-lg tracking-[0.2em] font-cond uppercase
          text-space-primary"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold">{item.number}</span>
            <span>{item.label.toUpperCase()}</span>
          </div>
        </div>
        </AccordionTrigger>
        <AccordionContent className={`flex flex-col gap-2 pl-6 border-b-2 border-transparent 
        ${isOpen ? "" : "border-space-primary"}`}
        >
          {item.subLinks.map((sub, i) => (
            <NavLinks
              key={i}
              routeHref={sub.href}
              routeActive={sub.active}
              activeClassName="text-space-primary"
              inactiveClassName="text-space-muted-foreground"
              className="py-2 text-sm block hover:text-space-primary"
            >
              {sub.label}
            </NavLinks>
          ))}
        </AccordionContent>
      </AccordionItem>
    ) : (
    <NavLinks
      key={index}
      routeHref={item.href}
      routeActive={item.active}
      activeClassName="text-space-primary border-space-primary"
      inactiveClassName="text-space-primary border-transparent"
      className="block text-lg list-none tracking-[0.2em] font-cond 
      uppercase py-4 border-b-2 hover:text-space-primary 
      hover:border-space-primary"
    >
      <div className="flex items-center gap-2">
        <span className="font-bold">{item.number}</span>
        <span>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</span>
      </div>
    </NavLinks>
    )
  )}
</Accordion>

        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
