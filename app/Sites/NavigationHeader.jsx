import React from 'react';
import Logo from '../../public/RenownedLOGO.svg';

function Header() {
  return (
    <div className='flex bg-sky-100 justify-between items-center p-4'>
      {/* Left Section */}
      <div className='flex flex-row items-end'>
        <img src={Logo.src} alt="renown-roofing-logo" className='mr-2 w-1/4 h-2/4' />
        <h1 className='font-bold text-5xl'>Renowned Roof Restorations</h1>
      </div>

      {/* Right Section */}
      <ul className='flex items-end'>
        <li className='flex px-5'>Home</li>
        <li className='flex px-5'>Services</li>
        <li className='flex px-5'>About</li>
        <li className='flex px-5'>Contact</li>
      </ul>
    </div>
  );
}

export default Header;


