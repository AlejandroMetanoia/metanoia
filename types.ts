import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  id: number;
  author: string;
  role: string;
  company: string;
  content: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}