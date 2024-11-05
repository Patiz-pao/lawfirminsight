"use client"
import { Link, usePathname, useRouter } from "@/i18n/routing";
import React from 'react';
import { Globe } from 'lucide-react';
import { useParams } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] px-5 lg:px-0">
        <div className="text-white text-xl font-bold">MyApp</div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">Products</Link>
            </li>
          </ul>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 ml-6 border-l border-gray-600 pl-6">
            <Globe className="w-4 h-4 text-gray-300" />
            <select
              value={currentLocale}
              onChange={(e) => switchLocale(e.target.value)}
              className="bg-gray-700 text-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="th">ไทย</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;