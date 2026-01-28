
// Added React import to resolve the 'React' namespace for ReactNode
import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface CarCategory {
  id: number;
  name: string;
  image: string;
}