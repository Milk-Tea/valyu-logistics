import React from 'react';
import { storyblokEditable } from '@storyblok/react';

interface TeaserProps {
  blok: {
    _uid: string;
    component: string;
    headline: string;
    [key: string]: any;
  };
}

export default function Teaser({ blok }: TeaserProps) {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
}
