import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: 'About', href: `${import.meta.env.BASE_URL}about` },
  { label: 'Contact', href: `${import.meta.env.BASE_URL}contact` },
  { label: 'Services', href: `${import.meta.env.BASE_URL}services` },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderNavigation navItems={navItems} />
      <main className="max-w-[1530px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
