"use client";
import React from "react";
import { navLinks } from "@/data/links";
import { usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/global-ui/nav-links";

export function useNavRoutes() {
  const pathName = usePathname();

  return navLinks.map((link) => {
    // Parent active
    const parentActive =
      pathName === link.href ||
      (link.href !== "/" && pathName?.startsWith(link.href + "/"));

    // Enrich subLinks with `active`
    const subLinks = link.subLinks?.map((sub) => {
      const subActive =
        pathName === sub.href ||
        (sub.href !== "/" && pathName?.startsWith(sub.href + "/"));
      return { ...sub, active: subActive };
    });

    // Parent is active if itself OR any subLink is active
    const subActive = subLinks?.some((sub) => sub.active);

    return {
      ...link,
      subLinks,
      active: parentActive || subActive,
    };
  });
}


export default function NavGroup() {
  const routes = useNavRoutes();
  const pathName = usePathname();

  return (
    <nav className="hidden md:flex items-center md:gap-8 
    lg:gap-24 px-15 navbar-blur"
    >
      {routes.map((route, index) =>
        route.subLinks ? (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <Button
                className={`flex items-center gap-2 py-7 
                text-space-primary cursor-pointer
                text-lg tracking-[0.2em] font-cond uppercase 
                bg-transparent rounded-none
                hover:bg-transparent h-full border-b-2 border-transparent hover:border-space-primary
                ${route.active ? 'border-space-primary' : ''}`}
              >
                <span className="font-bold">{route.number}</span>
                <span className="flex items-center">
                  {route.label.toUpperCase()}
                  <ChevronDown className="w-5 h-5 ml-1 
                  transition-transform data-[state=open]:rotate-180" 
                  />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="min-w-[200px] bg-white shadow-lg"
            >
              {route.subLinks.map((sub, i) => {
                const isSubActive = pathName === sub.href || 
                  (sub.href !== "/" && pathName?.startsWith(sub.href + "/"));
                
                return (
                  <DropdownMenuItem key={i} asChild>
                    <NavLinks
                      routeHref={sub.href}
                      routeActive={isSubActive}
                      className="w-full cursor-pointer px-2 
                      py-1.5 text-sm text-gray-700 
                      hover:bg-gray-100 focus:bg-gray-100 
                      rounded-sm"
                      activeClassName="text-space-primary bg-gray-100"
                      inactiveClassName=""
                    >
                      {sub.label}
                    </NavLinks>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLinks
          key={index}
          routeHref={route.href}
          routeActive={route.active}
          activeClassName="text-space-primary border-space-primary"
          inactiveClassName="text-space-primary border-transparent"
          className="text-lg list-none tracking-[0.2em] 
            font-cond uppercase py-7 border-b-2 
            hover:text-space-primary hover:border-space-primary"
            >
            <div className="flex items-center gap-2">
              <span className="font-bold">{route.number}</span>
              <span>
                {route.label.charAt(0).toUpperCase() + route.label.slice(1)}
              </span>
            </div>
          </NavLinks>
        )
      )}
    </nav>
  );
}