import React from 'react';
import Slideshow from '../Components/Slideshow';
import Tabss from "../Components/Tabs"
import CleaningBeforeAfter from '../../public/ServicesCleaning.jpeg'
import ValleyBefore from '../../public/ServicesValleyBefore.jpeg'
import ValleyAfter from '../../public/ServicesValleyAfter.jpeg'
import ReBeddingRePointingBefore from '../../public/ServicesReBeddingRePointingAfter.jpeg'
import ReBeddingRePointingAfter from '../../public/ServicesReBeddingRePointingAfter.jpeg'
import FullRestorationBefore from '../../public/ServicesFullRestorationsBefore.jpeg'
import FullRestorationAfter from '../../public/ServicesFullRestorationsAfter.jpeg'
// import from '../../public/Services'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pdusrw0MX1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"

export default function Services() {
    return (
        <>
            <div>
                <h2 className='text-center mb-4 items-center text-3xl bg-sky-900 text-white p-5 font-bold'>
                    Services
                </h2>
                <div className='flex lg:flex-row flex-col text-center justify-evenly'>
                    <h3 className='p-5 hover:bg-sky-900 hover:text-white' ><a href='/Services/Cleaning'>High Pressure Cleaning</a></h3>
                    <h3 className='p-5 hover:bg-sky-900 hover:text-white'><a href='/Services/reBeddingrePointing'>re Bedding & re Pointing</a></h3>
                    <h3 className='p-5 hover:bg-sky-900 hover:text-white'><a href='/Services/ValleyReplacements'>Valley Replacement</a></h3>
                    <h3 className='p-5 hover:bg-sky-900 hover:text-white'><a href='/Services/Maintainance'>Maintainance</a></h3>
                    <h3 className='p-5 hover:bg-sky-900 hover:text-white'><a href='/Services/FullRestorations'>Full restorations</a></h3>
                </div>

            </div>
        </>

    )


    // <Tabs className="w-full h-auto bg-sky-100">
    //     <TabsList className="flex flex-col bg-sky-900 hover:text-white m-5 p-10">
    //         <TabsTrigger className="py-2 px-4 rounded-md mb-2" value="tab1">
    //             <span className='text-xl'>Cleaning</span>
    //         </TabsTrigger>
    //         <TabsTrigger className="py-2 px-4 rounded-md mb-2" value="tab2">
    //             <span className='text-xl'>Re-Pointing & Re-Bedding</span>
    //         </TabsTrigger>
    //         <TabsTrigger className="py-2 px-4 rounded-md mb-2" value="tab3">
    //             <span className='text-xl'>Valley Replacement</span>
    //         </TabsTrigger>
    //         <TabsTrigger className="py-2 px-4 rounded-md mb-2" value="tab4">
    //             <span className='text-xl'>Maintenance</span>
    //         </TabsTrigger>
    //         <TabsTrigger className="py-2 px-4 rounded-md mb-2" value="tab5">
    //             <span className='text-xl'>Full Restorations</span>
    //         </TabsTrigger>
    //     </TabsList>
    //     <div className='pt-5'>

    //         <TabsContent className='p-4' value="tab1">
    //             {/* Left Section */}
    //             <div className='flex flex-col xl:flex-row items-end w-1/2'>
    //                 {/* <Slideshow /> */}
    //                 <img
    //                     src={CleaningBeforeAfter.src}
    //                     style={{
    //                         aspectRatio: "300/300",
    //                         objectFit: "cover",
    //                     }}
    //                     width="300"
    //                     height="300"
    //                 ></img>
    //             </div>

    //             {/* Right Section */}
    //             <div className='flex flex-col w-1/2 justify-start'>
    //                 <p className='text-center justify-end px-10'>
    //                     Elevate the longevity and aesthetic appeal of your property with our professional roof cleaning service.
    //                     Our specialized approach involves the use of high-pressure washers to comprehensively cleanse your roof, restoring it to its pristine condition.
    //                     We understand that a well-maintained roof not only enhances the overall curb appeal but also plays a crucial role in safeguarding the structural integrity of your home or business.
    //                     Due to extreme toxicity of fungicidal treatments, we do not engage in any open air spraying.
    //                     Effective separate fungicides are harmful to surrounding vegetation because of misting & run-off into guttering & consequently into soak wells & gardens.
    //                     Treatments, such as copper sulphate, which is one of the best fungicidal washes, will also cause extensive rust in gutters & downpipes.
    //                     With no chemicals being used in our procedures the completed roof would be suitable for rain water collection if required.
    //                 </p>
    //             </div>
    //         </TabsContent>

    //         <TabsContent className=' flex flex-col xl:flex-row p-4' value="tab2">
    //             {/* Left Section */}
    //             <div className='flex flex-row items-end w-1/2'>
    //                 {/* <Slideshow /> */}
    //                 <img
    //                     src={ReBeddingRePointingBefore.src}
    //                     style={{
    //                         aspectRatio: "300/300",
    //                         objectFit: "cover",
    //                     }}
    //                     width="300"
    //                     height="300"
    //                 ></img>
    //             </div>

    //             {/* Right Section */}
    //             <div className='flex flex-col w-1/2 items-center justify-center'>
    //                 <p className='text-center justify-end px-10'>
    //                     Over the lifetime of any tiled roof, the pointing and cement mortar will eventually start to crack away from the tiles and ridges. Exposure to the elements drastically accelerates this process and once cracking has occured that process speeds up further still, turning small cracks into leaking holes in your roof. If caught early small cracks can be rectified by repointing alone. Pointing is a strong acrylic, adhesive solution that seals and strengthens the bond between tile, mortar and ridge and also leaves your roof looking great. if the cracks have become too big or the mortar has lost its integrity, the rebedding procedure is necessary before pointing. This involves removing all the old cement mortar from the roof and replacing it with a new batch. We then point over the top of the new cement bedding. This process ensures the longevity and structural integrity for many years to come.
    //                 </p>
    //             </div>
    //         </TabsContent>

    //         <TabsContent className=' flex flex-col xl:flex-row p-4' value="tab3">
    //             {/* Left Section */}
    //             <div className='flex flex-row items-end w-1/2'>
    //                 {/* <Slideshow /> */}
    //                 <img
    //                     src={ValleyBefore.src}
    //                     style={{
    //                         aspectRatio: "300/300",
    //                         objectFit: "cover",
    //                     }}
    //                     width="300"
    //                     height="300"
    //                 ></img>
    //             </div>

    //             {/* Right Section */}
    //             <div className='flex flex-col w-1/2 items-center justify-center'>
    //                 <p className='text-center justify-end px-10'>
    //                     Roof valleys are a common cause of a leaking roof. We replace old and rusted valley irons with new, strong and durable ones ensuring decades of security and protection. they are available in any length and we can customise the the angles to fit your roof.
    //                 </p>
    //             </div>
    //         </TabsContent>

    //         <TabsContent className=' flex flex-col xl:flex-row p-4' value="tab4">
    //             {/* Left Section */}
    //             <div className='flex flex-row items-end w-1/2'>
    //                 {/* <Slideshow /> */}
    //                 <img
    //                     src={FullRestorationBefore.src}
    //                     style={{
    //                         aspectRatio: "300/300",
    //                         objectFit: "cover",
    //                     }}
    //                     width="300"
    //                     height="300"
    //                 ></img>
    //             </div>

    //             {/* Right Section */}
    //             <div className='flex flex-col w-1/2 items-center justify-center'>
    //                 <p className='text-center justify-end px-10'>
    //                     Roof tiles are directly exposed to Perths harsh weather conditions, from blisteringly hot summer days to torrential storms and extreme winds. This can make wear and tear on your roof happen much more rapidly. Even the smallest cracks can soon develop into a gaping hole, allowing water to flow straight into your home.
    //                     Our leak detection experts will source and seal any leaks and damages, leaving your home once again secure and impregnable.
    //                 </p>
    //             </div>
    //         </TabsContent>

    //         <TabsContent className=' flex flex-col xl:flex-row p-4' value="tab5">
    //             {/* Left Section */}
    //             <div className='flex flex-row items-end w-1/2'>
    //                 {/* <Slideshow /> */}
    //                 <img
    //                     src={FullRestorationBefore.src}
    //                     style={{
    //                         aspectRatio: "300/300",
    //                         objectFit: "cover",
    //                     }}
    //                     width="300"
    //                     height="300"
    //                 ></img>
    //             </div>

    //             {/* Right Section */}
    //             <div className='flex flex-col w-1/2 items-center justify-center'>
    //                 <p className='text-center justify-end px-10'>
    //                     Full restoration is a combination of all the other services. Bringing your roof back to its full potential regarding both performance and aesthetics. It is also a great alternative to a full re-roof as it is a fraction of the cost and often is all that is necessary to get your roof looking and operating to its highest capacity. Further more, by bundling all services together its saves you money on each part of the operation because all parts can be done at once, giving you the best deal possible We first change all broken tiles and seal any gaps to make sure the house is watertight. After that we give it a comprehensive pressure clean before re-bed and pointing the roof. Valley replacement can also be part of the process but as valleys can hold there integrity for very long periods, sometimes it is not necessary.
    //                     Lastly we clean up the roof and around your house of any mess that maybe have been made from pressure washing or removal of old mortar leaving you with a sealed, secure and sparkling fininished product.
    //                 </p>
    //             </div>
    //         </TabsContent>


    //     </div >
    // </Tabs>


}