import ImageCardComponent from '@/components/CardComponents/ImagesCard'
import ImageCategoryCard from '@/components/CardComponents/ImagesCategoryCard'
import ImagespreviewCard from '@/components/CardComponents/ImagesPreviewCard'
import React from 'react'

export default function 
() {
  return (
    
    <div className=" mt-10 ">
        <div className="flex justify-center">
            <div className=" grid grid-cols-8 gap-3">
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
                <ImageCategoryCard/>
            </div>
        </div>
        {/* <div className=" flex  justify-center mt-10" >
            <ImagespreviewCard/>
        </div> */}
        <div className=" flex  justify-center mt-10" >
            <div className=" grid grid-cols-6 gap-8">
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>

            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>

            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>

            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
            <ImageCardComponent/>
        </div>
        </div>
        
    </div>
  )
}
