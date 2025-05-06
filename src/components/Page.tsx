import React from 'react';
import { storyblokEditable } from '@storyblok/react';

interface PageProps {
  blok: {
    _uid: string;
    component: string;
    title: string;
  };
}

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
    </main>
  );
}
