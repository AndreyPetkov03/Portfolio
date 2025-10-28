"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "./Background-gradient";
import exampleImg from '../../public/images/profilePicture2.jpg';
import profileImg from '../../public/images/profileImage.jpeg';

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-full max-w-sm p-0.5 bg-transparent dark:bg-transparent m-b ">
        <Image
          src={profileImg}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-full"
        />
        
        
      </BackgroundGradient>
    </div>
  );
}
