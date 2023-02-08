import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div className="flex justify-center space-x-[10vw]">
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
  );
};

export default NavBar;
