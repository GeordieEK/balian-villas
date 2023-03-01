import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div className="relative font-sans">
      <div className="absolute mt-0 left-0 w-full bg-[rgba(0,0,0,0.2)]">
        <div className="mx-auto flex justify-center text-sm md:text-base space-x-8 sm:space-x-16 md:space-x-20 lg:space-x-28 ">
          {/* TODO: Create Navbar Link component */}
          <Link href="/" className="my-2 hover:font-medium">
            Home
          </Link>
          <Link href="/about" className="my-2 hover:font-medium">
            About
          </Link>
          <VillaDropdown />
          <Link href="/photogallery" className="my-2 hover:font-medium">
            Gallery
          </Link>
          <Link href="/contact" className="my-2 hover:font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
