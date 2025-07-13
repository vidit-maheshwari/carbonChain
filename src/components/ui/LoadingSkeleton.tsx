import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave';
}

export function LoadingSkeleton({ 
  className = '', 
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  animation = 'pulse'
}: LoadingSkeletonProps) {
  const baseClasses = 'bg-gray-200 rounded';
  const animationClasses = animation === 'pulse' 
    ? 'animate-pulse' 
    : 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'h-4',
    rectangular: '',
    circular: 'rounded-full'
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div 
      className={`${baseClasses} ${animationClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <LoadingSkeleton height="2rem" width="60%" />
        <LoadingSkeleton height="1rem" width="40%" />
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <LoadingSkeleton variant="circular" width="3rem" height="3rem" />
              <LoadingSkeleton width="4rem" height="1rem" />
            </div>
            <LoadingSkeleton height="2rem" width="70%" className="mb-2" />
            <LoadingSkeleton height="1rem" width="50%" />
          </div>
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <LoadingSkeleton height="1.5rem" width="40%" className="mb-6" />
        <LoadingSkeleton height="300px" />
      </div>
    </div>
  );
}

export function ChartSkeleton({ height = "300px" }: { height?: string }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <LoadingSkeleton width="30%" height="1.5rem" />
        <LoadingSkeleton width="20%" height="2rem" />
      </div>
      <LoadingSkeleton height={height} />
    </div>
  );
}