import React from "react";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-slate-200 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-600">
            {t("title_detail")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t("topic_location")}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {t("location.name")}
                  </h3>
                  <p className="text-gray-600">{t("location.address")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {t("location.title_phone")}
                  </h3>
                  <p className="text-gray-600">{t("location.phone")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {t("location.title_email")}
                  </h3>
                  <p className="text-gray-600">{t("location.email")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {t("location.title_hours")}
                  </h3>
                  <p className="text-gray-600">{t("location.hours")}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t("message.title")}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  {t("message.title_name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder={t("message.placehoder_name")}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  {t("message.title_email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder={t("message.placehoder_email")}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  {t("message.title_phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder={t("message.placehoder_phone")}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  {t("message.title_message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder={t("message.placehoder_message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{t('message.button')}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-4 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799015259!2d100.53213599884398!3d13.756330226021903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fbb61a42f45%3A0x2e885ae94ec4823a!2z4LmA4LiI4LiB4Liy4Lij4LmM4LiX4Liw4Lii4LiZ4LiH4LiU4Lix4Lil4LiB4LiU4Li54LiU4Lil4LiX4Lih4Li04LiU4LiU!5e0!3m2!1sth!2sth!4v1631724010326!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
