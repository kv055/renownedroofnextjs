import React from 'react';
import Slideshow from '../../Components/Slideshow';
import Slider from './Slider';
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
                    Full Restorations
                </h3>
                <div className='basis-1/3 flex lg:flex-row flex-col text-center justify-evenly items-center'>
                    <div className='flex flex-col *:justify-center items-center'>
                        <div className='flex flex-row items-center justify-evenly'>
                            <img src={Arrow.src} className='w-10 h-10 m-3'></img>
                            <p className='font-semibold text-2xl m-3'>Swipe</p>
                            {/* <img src={Arrow.src} className='w-10 h-10'></img> */}
                        </div>
                        <Slider/>
                        {/* <p>Before and After</p> */}
                    </div>
                    <p className='basis-2/3 text-center justify-end px-10 py-5 text-sky-900'>
                        Full restoration is a combination of all the other services. Bringing your roof back to its full potential regarding both performance and aesthetics. It is also a great alternative to a full re-roof as it is a fraction of the cost and often is all that is necessary to get your roof looking and operating to its highest capacity. Further more, by bundling all services together its saves you money on each part of the operation because all parts can be done at once, giving you the best deal possible We first change all broken tiles and seal any gaps to make sure the house is watertight. After that we give it a comprehensive pressure clean before re-bed and pointing the roof. Valley replacement can also be part of the process but as valleys can hold there integrity for very long periods, sometimes it is not necessary.
                        Lastly we clean up the roof and around your house of any mess that maybe have been made from pressure washing or removal of old mortar leaving you with a sealed, secure and sparkling fininished product.
                    </p>
                </div>
            </div>
        </>

    )
}