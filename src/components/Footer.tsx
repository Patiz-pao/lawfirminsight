import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("Navbar");
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-5 lg:px-0 text-center space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-center">{t("title")}</h2>
        </div>

        <div className="border-b border-gray-600"></div>

        <div className="hidden sm:flex flex-col sm:flex-row gap-5 items-center sm:justify-center space-y-2 sm:space-y-0 lg:space-x-5">
          <Link
            href="/services/CriminalPage"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_1")}
          </Link>
          <Link
            href="/services/CivilPage"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_2")}
          </Link>
          <Link
            href="/products"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_3")}
          </Link>
          <Link
            href="/gallery"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_4")}
          </Link>
          <Link
            href="/promotions"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_5")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-200 block lg:inline"
          >
            {t("services.service_title_6")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
