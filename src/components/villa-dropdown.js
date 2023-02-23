import { useState } from "react"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

const VillaDropdown = () => {
  return (
    <div className='font-medium group'>
      <div className='w-full flex items-center justify-content cursor-pointer'>
        The Villas{" "}
        <BiChevronDown size={15} className='group-hover:rotate-180' />
      </div>
      <ul className='absolute mt-0 hidden group-hover:block'>
        <li className='p-1 text-sm hover:bg-sky-600'>
          <Link href='/villa-ganesha'>Villa Ganesha</Link>
        </li>
        <li className='p-1 text-sm hover:bg-sky-600'>
          <Link href='/villa-nanas'>Villa Nanas</Link>
        </li>
      </ul>
    </div>
  )
}

export default VillaDropdown
