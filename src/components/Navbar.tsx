"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import React from "react";
import { Globe, Menu, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useToggleNavbar } from "@/hooks/useToggleNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;
  const { isOpen, isMobile, toggleNav } = useToggleNavbar();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const t = useTranslations("Navbar");

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto max-w-[1140px] px-5 py-5 lg:px-10 lg:p-0">
        <div className="h-16 flex justify-between items-center">
          <div className="text-white text-xl font-bold">{t('title')}</div>

          {isMobile && (
            <button
              onClick={toggleNav}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-200 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">{t('home')}</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">{t('about')}</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">{t('services')}</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">{t('contact')}</Link>
                </li>
              </ul>

              <div className="flex items-center space-x-2 ml-6 border-l border-gray-600 pl-6">
                <Globe className="w-4 h-4 text-gray-300" />
                <select
                  value={currentLocale}
                  onChange={(e) => switchLocale(e.target.value)}
                  className="bg-gray-700 text-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <option value="th">ไทย</option>
                  <option value="en">English</option>
                  <option value="ch">Chaina</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <div 
            className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="flex flex-col space-y-2 py-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-gray-300 hover:text-white py-2 transition-all duration-200 hover:translate-x-2"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-gray-300 hover:text-white py-2 transition-all duration-200 hover:translate-x-2"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block text-gray-300 hover:text-white py-2 transition-all duration-200 hover:translate-x-2"
                >
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block text-gray-300 hover:text-white py-2 transition-all duration-200 hover:translate-x-2"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-2 pb-4 pt-2 border-t border-gray-600">
              <Globe className="w-4 h-4 text-gray-300" />
              <select
                value={currentLocale}
                onChange={(e) => switchLocale(e.target.value)}
                className="bg-gray-700 text-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <option value="th">ไทย</option>
                <option value="en">English</option>
                <option value="ch">Chaina</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
