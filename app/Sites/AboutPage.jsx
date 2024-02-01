import React from 'react';
import Portrait from '../../public/PortraitSquare.jpg';

function About() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>

        <div className='md:w-1/4 p-5'>
          <img
            src={Portrait.src}
            alt="Portrait of Kail Stefanatos"
            width="300"
            className='rounded-md border-2 shadow-md shadow-black w-full h-auto md:w-fit md:h-fit'
          />
          {/* <h3 className='text-center'>Kail Stefanatos</h3> */}
        </div>

        <div className='flex flex-col md:w-3/4 p-5'>
          <h2 className='text-center mb-4 items-center text-3xl bg-sky-900 text-white p-5 font-bold'>About</h2>
          <p className='text-center'>
            Kail Stefanatos is the owner and head of operations at renowned roof restorations.
            With over 9 years in the trade, he has extensive knowledge and experience in all aspects of roof tiling.
            Having completed many projects all over Australia such as Perth, Melbourne, Gold-Coast, and Cairns,
            he now bases himself solely in the greater Perth area.
            Kail has an acute attention to detail and the highest standard of quality,
            matched by his strong work ethic, Kail is a tradie you can trust.
          </p>
        </div>

      </div>
    </>
  );
}

export default About;
