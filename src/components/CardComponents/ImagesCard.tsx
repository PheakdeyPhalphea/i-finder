import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function ImageCardComponent() {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listening to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className=" flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="text-tiny w-full flex items-center text-white rounded-xl" color="default">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={20}
            src="https://nextui.org/images/hero-card.jpeg"
            width={20}
          />
          <h4 className="text-tiny line-clamp-1 text-white/80 ml-4">Available soon.</h4>
        </div>
        <p className="text-tiny line-clamp-1 text-white/80">Available soon Available soon.</p>
      </CardFooter>
    </Card>
  );
}
