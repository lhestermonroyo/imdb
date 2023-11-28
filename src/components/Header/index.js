import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between px-2 py-6 max-w-6xl sm:mx-auto items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 text-gray-900 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
        <DarkModeSwitch />
      </div>
      <div className="flex">
        <MenuItem title="Home" url="/" icon={<AiFillHome />} />
        <MenuItem title="About" url="/about" icon={<BsFillInfoCircleFill />} />
      </div>
    </div>
  );
}
