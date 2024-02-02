import React from 'react';
import Slideshow from '../../Components/Slideshow';
import CleaningBeforeAfter from '../../../public/ServicesCleaning.jpeg'
import ValleyBefore from '../../../public/ServicesValleyBefore.jpeg'
import ValleyAfter from '../../../public/ServicesValleyAfter.jpeg'
import ReBeddingRePointingBefore from '../../../public/ServicesReBeddingRePointingAfter.jpeg'
import ReBeddingRePointingAfter from '../../../public/ServicesReBeddingRePointingAfter.jpeg'
import FullRestorationBefore from '../../../public/ServicesFullRestorationsBefore.jpeg'
import FullRestorationAfter from '../../../public/ServicesFullRestorationsAfter.jpeg'
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
            <div className='xl:px-36 xl:py-10 md:px-2 md:py-2'>
                <h3 className='text-center mb-4 items-center text-3xl bg-sky-900 text-white p-5 font-bold'>
                    re Bedding & re Pointing
                </h3>
                <div className='flex lg:flex-row flex-col text-center justify-evenly'>
                    <div className='flex justify-center'>
                        <Slideshow />
                    </div>
                    <p className='text-center justify-end px-10 py-5 text-sky-900'>
                        Over the lifetime of any tiled roof, the pointing and cement mortar will eventually start to crack away from the tiles and ridges. Exposure to the elements drastically accelerates this process and once cracking has occured that process speeds up further still, turning small cracks into leaking holes in your roof. If caught early small cracks can be rectified by repointing alone. Pointing is a strong acrylic, adhesive solution that seals and strengthens the bond between tile, mortar and ridge and also leaves your roof looking great. if the cracks have become too big or the mortar has lost its integrity, the rebedding procedure is necessary before pointing. This involves removing all the old cement mortar from the roof and replacing it with a new batch. We then point over the top of the new cement bedding. This process ensures the longevity and structural integrity for many years to come.
                    </p>
                </div>
            </div>
        </>

    )
}