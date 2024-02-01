import React from 'react';
import Slideshow from '../Components/Slideshow';
import ContactForm from '../Components/ContactForm';
import Portrait from '../../public/PortraitSquare.jpg';
import CleaningBeforeAfter from '../../public/ServicesCleaning.jpeg'
// pnpm dlx shadcn-ui@latest add button

function LandingPage() {

    return (
        <>
            <div className='flex xl:flex-row flex-col'>

                <div className='flex flex-col items-center justify-center xl:w-2/3 '>
                    <p className='p-5 text-center font-bold xl:text-3xl xs:text-sm'>
                        Call:
                        +61-423-900464
                        <br />
                        or
                        <br />
                        Mail to:
                        kailstefanatos@gmail.com
                    </p>
                    <p className='p-10 text-center'>
                        Renowned Roof Restorations by Kail Stefanatos is a small independent Perth based business
                        focused on restoring roofs to their full potential.
                        Whilst giving friendly, prompt and punctual customer service, we will find the solution
                        to any problem your roof may have. We deliver the highest quality
                        work at the best possible prices guaranteed.
                    </p>
                </div>

                {/* <div className='m-5'>
                    <ContactForm className=" w-1/3" />
                </div> */}


                <div className='flex items-center justify-center'>
                    {/* <Slideshow Images={[Portrait.src]} /> */}
                    <img
                        src={CleaningBeforeAfter.src}
                        style={{
                            aspectRatio: "600/600",
                            objectFit: "cover",
                        }}
                        width="600"
                        height="600"
                    ></img>
                </div>


            </div>

        </>
    );
}

export default LandingPage;