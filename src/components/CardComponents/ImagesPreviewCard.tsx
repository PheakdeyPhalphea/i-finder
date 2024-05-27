import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, LinkIcon} from "@nextui-org/react";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import ImageCard from '@/components/CardComponents/ImagesCard'
export default function ImagespreviewCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className=" flex gap-4">
        <Image
          alt="nextui logo"
          height={30}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={30}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
        </div>
        <div className=" w-full flex gap-4 justify-end">
            <FaAngleLeft />
            <FaAngleRight />
            <IoMdMore />
            <MdCancel />
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Image
          alt="nextui logo"
          height={300}
          radius="sm"
          src="https://nextui.org/images/hero-card.jpeg"
          width={400}
        />
        <div className=" my-4 flex items-center justify-between">
            <h4 className=" line-clamp-1 font-semibold text-sm" >Make beautiful websites regardless.</h4>
            <Button color="primary">
                visit<FaAngleRight />
            </Button>
        </div>
        <div className="flex gap-2">
            <p className=" text-sm">Images may be subject to copyright.</p>
            <Link href="#" className=" text-sm">Learn More</Link>
        </div>
        <div className=" my-4 flex items-center gap-4">
            <Button color="primary" className="w-1/2">
                Share
            </Button>
            <Button color="primary" className="w-1/2">
                Save
            </Button>
        </div>
        <div className=" grid grid-cols-3 gap-2">
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
        </div>
        <div className=" my-5  flex items-center justify-center">
            <Button color="primary" className="w-[450px]">
                See more
            </Button>
        </div>

        
      </CardBody>
      <Divider/>
      <CardFooter className=" flex justify-between">
        <Link
          isExternal
          href="#"
        >
          Sendfackback 
        </Link>
        <Link
          isExternal
          href="#"
        >
          Get help
        </Link>
      </CardFooter>
    </Card>
  );
}
