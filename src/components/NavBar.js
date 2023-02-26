import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div className="relative font-sans">
      <div className="absolute mt-0 py-2 left-0 w-full bg-[rgba(0,0,0,0.2)]">
        <div className="mx-auto flex justify-center space-x-32 ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <VillaDropdown />
          <Link href="/photogallery">Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
