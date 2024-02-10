import React from 'react';
import Logo from '../../public/RenownedLOGO.svg';

function Header() {
  return (

      <div className='flex xl:flex-row flex-col justify-center xl:justify-start items-center bg-sky-100'>
        <a href='/' className='flex justify-center m-3 ml-10'>
          <img src={Logo.src} alt="renown-roofing-logo" className='xl:w-1/4 xl:h-2/4 w-2/6 h-3/6'  />
        </a>
        <h1 className='font-bold xl:text-5xl text-xl m-2 text-sky-900'>Renowned Roof Restorations</h1>
      </div>

  );
}

export default Header;


// import React from 'react';
// import Logo from '../../public/RenownedLOGO.svg';

// function Header() {
//   return (
//     <div className='flex bg-sky-100 xl:justify-between xl:items-center xl:p-4 md:p-1'>
//       {/* Left Section */}
//       <div className='flex flex-row items-end'>
//         <img src={Logo.src} alt="renown-roofing-logo" className='mr-2 xl:w-1/4 xl:h-2/4 md:w-fit md:h-fit' />
//         <h1 className='font-bold xl:text-5xl md:text-lg'>Renowned Roof Restorations</h1>
//       </div>

//       {/* Right Section */}
//       <ul className='flex items-end'>
//         <li className='flex px-5'>Home</li>
//         <li className='flex px-5'>Services</li>
//         <li className='flex px-5'>About</li>
//         <li className='flex px-5'>Contact</li>
//       </ul>
//     </div>
//   );
// }

// export default Header;


