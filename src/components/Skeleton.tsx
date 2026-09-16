import React from "react";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse rounded bg-[var(--border-color)] ${className}`}
    />
  );
};

export const SkeletonBlock: React.FC<SkeletonProps & { count?: number }> = ({
  className = "",
  count = 1,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className={className} />
      ))}
    </>
  );
};
