import React from "react";
import {Card, CardHeader, Image} from "@nextui-org/react";

export default function ImageCategoryCard() {
  return (
    <Card className="max-w-[130px]">
      <CardHeader className="flex gap-1">
        <Image
          className="rounded-r-md object-cover"
          alt="nextui logo"
          height={50}
          src="https://nextui.org/images/hero-card.jpeg"
          width={50}
        />
        <div className="flex flex-col">
          <h5 className="text-sm font-semibold">MacBook</h5>
        </div>
      </CardHeader>
    </Card>
  );
}
