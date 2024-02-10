import React from 'react';
import Slideshow from '../../Components/Slideshow';
import Slider from './Slider'
import Header from '../../Sites/NavigationHeader'
import CleaningBeforeAfter from '../../../public/ServicesCleaning.jpeg'
import ValleyBefore from '../../../public/ServicesValleyBefore.jpeg'
import ValleyAfter from '../../../public/ServicesValleyAfter.jpeg'
import ReBeddingRePointingBefore from '../../../public/ServicesReBeddingRePointingAfter.jpeg'
import ReBeddingRePointingAfter from '../../../public/ServicesReBeddingRePointingAfter.jpeg'
import FullRestorationBefore from '../../../public/ServicesFullRestorationsBefore.jpeg'
import FullRestorationAfter from '../../../public/ServicesFullRestorationsAfter.jpeg'
import Arrow from '../../../public/Vectorarrow.svg'
// import from '../../../public/Services'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pdusrw0MX1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"

export default function Cleaning() {
    return (
        <>
        <Header></Header>
            <div className='xl:px-36 xl:py-10 md:px-2 md:py-2'>
                <h3 className='text-center mb-4 items-center text-3xl bg-sky-900 text-white p-5 font-bold'>
                    Maintainance
                </h3>
                <div className='flex lg:flex-row flex-col text-center justify-evenly items-center'>
                    <div className='basis-1/3 flex flex-col *:justify-center items-center'>
                        <div className='flex flex-row items-center justify-evenly'>
                            <img src={Arrow.src} className='w-10 h-10 m-3'></img>
                            <p className='font-semibold text-2xl m-3'>Swipe</p>
                            {/* <img src={Arrow.src} className='w-10 h-10'></img> */}
                        </div>
                        <Slider/>
                        {/* <p>Before and After</p> */}
                    </div>
                    <p className='basis-1/3 text-center justify-end px-10 py-5 text-sky-900'>
                        Roof tiles are directly exposed to Perths harsh weather conditions, from blisteringly hot summer days to torrential storms and extreme winds. This can make wear and tear on your roof happen much more rapidly. Even the smallest cracks can soon develop into a gaping hole, allowing water to flow straight into your home.
                        Our leak detection experts will source and seal any leaks and damages, leaving your home once again secure and impregnable.

                    </p>
                </div>
            </div>
        </>

    )
}