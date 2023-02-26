import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div className="relative">
      <div className="absolute mt-0 py-2 left-0 w-full bg-black bg-opacity-20">
        <div className="mx-auto flex justify-center space-x-32 ">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/about" className="font-medium">
            About
          </Link>
          <VillaDropdown />
          <Link href="/photogallery" className="font-medium">
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
