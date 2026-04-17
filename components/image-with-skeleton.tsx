'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type ImageWithSkeletonProps = ImageProps & {
  skeletonClassName?: string;
  containerClassName?: string;
};

export default function ImageWithSkeleton({
  className,
  skeletonClassName,
  containerClassName,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={clsx(`relative block overflow-hidden`, containerClassName)}>
      {/* Skeleton shimmer */}
      {!loaded && (
        <span
          className={[
            'absolute inset-0 rounded-lg bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] bg-[length:200%_100%] animate-[shimmer_1.4s_ease-in-out_infinite]',
            skeletonClassName ?? '',
          ].join(' ')}
          aria-hidden="true"
        />
      )}

      {/* Actual image — invisible until loaded */}
      <Image
        {...props}
        className={[
          className ?? '',
          'transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </span>
  );
}
