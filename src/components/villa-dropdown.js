import { useState } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

const VillaDropdown = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="font-medium w-24 h-24">
      <div
        className="w-full p-1 flex items-center justify-content"
        onClick={() => setToggle(!toggle)}
      >
        The Villas{' '}
        <BiChevronDown size={15} className={`${toggle && 'rotate-180'}`} />
      </div>
      {toggle && (
        <ul className="mt-2">
          <li
            className="p-1 text-sm hover:bg-sky-600"
            onClick={() => setToggle(false)}
          >
            <Link href="/villa-ganesha">Villa Ganesha</Link>
          </li>
          <li
            className="p-1 text-sm hover:bg-sky-600"
            onClick={() => setToggle(false)}
          >
            <Link href="/villa-nanas">Villa Nanas</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default VillaDropdown;
