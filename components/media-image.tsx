"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type MediaImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

/**
 * Remote images via next/image (unoptimized), with a native <img> fallback
 * if loading fails — keeps aspect/fill layout intact.
 */
export default function MediaImage({
  src,
  alt,
  className,
  fallbackClassName,
  fill,
  ...props
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);
  const source = typeof src === "string" ? src : "";

  if (failed || !source) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={source}
        alt={alt}
        className={cn(
          fill && "absolute inset-0 h-full w-full",
          className,
          fallbackClassName,
        )}
      />
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      src={source}
      alt={alt}
      className={className}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
