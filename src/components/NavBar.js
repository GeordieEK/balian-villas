import Link from 'next/link';
import VillaDropdown from './villa-dropdown';

const NavBar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <VillaDropdown />
      <Link href="/photogallery">Gallery</Link>
    </div>
  );
};

export default NavBar;
