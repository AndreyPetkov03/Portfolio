"use client";
import React from "react";
import Image from "next/image";
import profileImg from '../../../public/images/profileImage.jpeg';

export function ProfileCard() {
  return (
    <div className="relative aspect-square">
      {/* Slowly rotating gradient ring behind the photo */}
      <div
        aria-hidden
        className="absolute -inset-[2px] animate-[spin_12s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#0a0a0b_40%,#0a0a0b_60%,#8b5cf6)] opacity-80"
      />
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-background">
        <Image
          src={profileImg}
          alt="Andrey Petkov"
          fill
          sizes="(min-width: 1024px) 384px, 320px"
          className="object-cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
