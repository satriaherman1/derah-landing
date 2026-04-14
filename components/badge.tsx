import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  // If a background color is explicitly passed in className, we don't apply the default one.
  const hasBg = className.includes("bg-");
  const defaultBg = hasBg ? "" : "bg-[#0000000A]";
  
  // if text color is passed, omit default, otherwise let parent determine or keep default if any.
  // We'll stick to basic classes.

  return (
    <div className={`px-3 py-1 ${defaultBg} rounded-full font-medium text-sm flex items-center gap-x-2 w-fit ${className}`}>
      {children}
    </div>
  );
}
