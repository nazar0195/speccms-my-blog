import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-gray-400">Categories</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;