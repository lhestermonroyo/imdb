import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, url, icon }) {
  return (
    <div className="mx-4 lg:mx-6 hover:text-amber-500">
      <Link href={url}>
        {icon && <span className="text-2xl sm:hidden mx-4">{icon}</span>}
        <p className="hidden uppercase sm:inline">{title}</p>
      </Link>
    </div>
  );
}
