import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div className="absolute top-2 left-0 w-full">
      <div className="mx-auto flex justify-center space-x-32 text-stroke-[1]">
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
  );
};

export default NavBar;
