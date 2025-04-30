import React from 'react';
import { LucideProps } from 'lucide-react';

// These are custom wrappers around Lucide icons to keep consistency
// Using standard HTML element for simpler implementation
export const Html5 = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"/>
    <path d="M17 7H7.5l.5 4.5h8l-.5 5.5-2.5.75-2.5-.75-.1-1.5"/>
  </svg>
);

export const Css3 = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"/>
    <path d="M7 7h10l-.5 5h-7l.5 5-2 .5-2-.5-.1-2"/>
  </svg>
);

export const Javascript = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1z"/>
    <path d="M8 10v6a2 2 0 104 0"/>
    <path d="M16 10v6"/>
    <path d="M16 14h-2"/>
  </svg>
);

export const ReactIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 6a9.77 9.77 0 00-8.82 5.5 9.77 9.77 0 000 1 9.77 9.77 0 008.82 5.5 9.77 9.77 0 008.82-5.5 9.77 9.77 0 000-1A9.77 9.77 0 0012 6z"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

export const NodeJs = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 16v-8l-4 4"/>
  </svg>
);

export const Mysql = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9h18M3 15h18M9 9v6M9 9c3 0 3 6 0 6"/>
  </svg>
);

export const Mongodb = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M3 5h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zM21 8v9a1 1 0 01-1 1h-2a1 1 0 01-1-1V8a1 1 0 011-1h2a1 1 0 011 1z"/>
  </svg>
);

export const Aws = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.1 21.2c0 .2-.1.5-.3.7s-.4.3-.6.3-.4-.1-.6-.3-.3-.4-.3-.7.1-.5.3-.7.4-.3.6-.3c.3 0 .5.1.6.3s.3.5.3.7zM22.1 21.2c0 .2-.1.5-.3.7s-.4.3-.6.3-.4-.1-.6-.3-.3-.4-.3-.7.1-.5.3-.7.4-.3.6-.3c.3 0 .5.1.6.3s.3.5.3.7zM6.2 18.1c-.2 0-.4-.1-.5-.2s-.2-.3-.2-.5v-6.4c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v6.4c0 .2-.1.4-.2.6s-.3.2-.5.2H6.2z"/>
  </svg>
);

export const Docker = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12.54c0-.55-.2-1.07-.6-1.45a1.98 1.98 0 00-1.4-.58h-2V8a2 2 0 00-2-2h-1a2 2 0 00-2 2v2h-2V6a2 2 0 00-2-2h-1a2 2 0 00-2 2v5c0 1.1.9 2 2 2h12a2 2 0 001.94-1.51"/>
    <path d="M7 16h10a2 2 0 002-2"/>
    <path d="M15 12V8"/>
    <path d="M11 12v-1"/>
    <path d="M7 12V6"/>
  </svg>
);

export const Git = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12" y2="16"/>
  </svg>
);
