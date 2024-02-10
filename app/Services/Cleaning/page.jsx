import React from 'react';
import Slider from './Slider'
import Header from '../../Sites/NavigationHeader'
import Arrow from '../../../public/Vectorarrow.svg'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pdusrw0MX1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Cleaning() {
    return (
        <>
        <Header></Header>
            <div className='xl:px-36 xl:py-10 md:px-2 md:py-2'>

                <h3 className='text-center mb-4 items-center text-3xl bg-sky-900 text-white p-5 font-bold'>
                   High Pressure Cleaning
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
                    <p className='basis-2/3 text-center justify-end px-10 py-5 text-sky-900'>
                        Elevate the longevity and aesthetic appeal of your property with our professional roof cleaning service.
                        Our specialized approach involves the use of high-pressure washers to comprehensively cleanse your roof, restoring it to its pristine condition.
                        We understand that a well-maintained roof not only enhances the overall curb appeal but also plays a crucial role in safeguarding the structural integrity of your home or business.
                        Due to extreme toxicity of fungicidal treatments, we do not engage in any open air spraying.
                        Effective separate fungicides are harmful to surrounding vegetation because of misting & run-off into guttering & consequently into soak wells & gardens.
                        Treatments, such as copper sulphate, which is one of the best fungicidal washes, will also cause extensive rust in gutters & downpipes.
                        With no chemicals being used in our procedures the completed roof would be suitable for rain water collection if required.
                    </p>
                </div>
            </div>
        </>

    )
}