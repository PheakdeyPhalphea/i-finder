
import VideosCard from '@/components/CardComponents/VideosCard'
import { useGetVideosQuery } from '@/redux/service/i-finder';
import React from 'react'

export default function page() {
  // const { data, error, isLoading } = useGetVideosQuery({
  //   page: 1,
  //   pageSize: 10,
  // });

  return (
    <>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
    <VideosCard/>
       
    </>
  )
}
