import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Tan Tran | My Journey as a Technology Leader',
  description: 'Learn about the career journey of Tan Tran, a technology leader and engineering manager with 20 years of experience in building teams, scaling businesses, and delivering high-impact software solutions.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
