"use client";
import React from "react";
import { Link, Image } from "@nextui-org/react";
export default function NewsCardComponent({
  image,
  title,
  author,
  description,
  domain,
  logo,
  thumbnail,
}: ResultDocumentType) {
  const imagePlaceHolder =
    "https://www.psi.org.kh/wp-content/uploads/2019/01/profile-icon-300x300.png";
  return (
    <section className="max-w-[700px] flex flex-row justify-between">
      <div className="w-3/4 mx-5">
        <div className="flex gap-3 ">
          <Image
            alt="nextui logo"
            height={35}
            radius="sm"
            src={`${logo}`}
            width={35}
          />
          <div className="flex flex-col">
            <p className="text-md line-clamp-1">{title}</p>
            <p className="text-small text-default-500">{domain}</p>
          </div>
        </div>
        <div className="gap-2 my-5">
          <Link className="text-SecondaryColor text-lg">
            Google just patched the fifth zero-day exploit for Chrome this year
          </Link>
          <p className="text-sm my-2">{description}</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image
          alt="news images"
          height={250}
          radius="sm"
          src={`${logo || imagePlaceHolder}`}
          width={250}
        />
      </div>
    </section>
  );
}
