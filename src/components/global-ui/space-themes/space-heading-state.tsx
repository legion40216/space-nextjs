"use client"
import React from 'react'
import { useNavRoutes } from '@/app/(routes)/(space)/_modules/components/navbar/nav-right/nav-group';

type SpaceHeadingStateProps = {
  title: string;
}

export default function SpaceHeadingState({ title }: SpaceHeadingStateProps) {
  const routes = useNavRoutes();
  const currentRoute = routes.find(route => route.active);

  return (
    <div>
      <h1
        className="text-space-primary text-3xl font-normal uppercase tracking-widest font-cond"
      >
        <span
          className="text-muted-foreground font-bold tracking-[0.2em] mr-4"
        >
          {currentRoute ? currentRoute.number : ""}
        </span>
        {title}
      </h1>
    </div>
  );
}