import React from 'react';

export const Header = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <header className={`header ${className}`}>
      {children}
    </header>
  );
};