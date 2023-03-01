import { useState } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

const VillaDropdown = () => {
  // TODO: Rebuild this component so that it will become dropdown for children passed into it
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="w-full my-2 flex items-center justify-content cursor-pointer hover:font-medium">
        The Villas{' '}
        <BiChevronDown
          size={15}
          className={`${dropdownOpen && 'rotate-180'}`}
        />
      </div>
      {dropdownOpen && (
        <div className="absolute h-24 w-36 mt-0">
          <div className="absolute xl:w-32 bg-[rgba(0,0,0,0.2)]">
            <div className="mx-2 py-0 " onClick={() => setDropdownOpen(false)}>
              <Link href="/villa-ganesha" className="hover:font-medium">
                Villa Ganesha
              </Link>
            </div>
            <div className="mx-2 py-0" onClick={() => setDropdownOpen(false)}>
              <Link href="/villa-nanas" className="hover:font-medium">
                Villa Nanas
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VillaDropdown;
