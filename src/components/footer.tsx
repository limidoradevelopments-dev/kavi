import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 text-center text-muted-foreground sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} FolioFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
