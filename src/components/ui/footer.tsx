import React from 'react';

export const Footer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <footer className={`footer ${className}`}>
      {children}
    </footer>
  );
};