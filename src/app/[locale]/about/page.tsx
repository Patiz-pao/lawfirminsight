import React from "react";
import { useTranslations } from "next-intl";
import { detailPage, person } from "../../../../public/images";

const About = () => {
  const t = useTranslations("AboutPage");
  const lawyers = [
    {
      name: t("person_info.person_1.name"),
      position: t("person_info.person_1.position"),
      expert: t("person_info.person_1.expert"),
      experience: t("person_info.person_1.experience"),
    },
    {
      name: t("person_info.person_2.name"),
      position: t("person_info.person_2.position"),
      expert: t("person_info.person_2.expert"),
      experience: t("person_info.person_2.experience"),
    },
    {
      name: t("person_info.person_3.name"),
      position: t("person_info.person_3.position"),
      expert: t("person_info.person_3.expert"),
      experience: t("person_info.person_3.experience"),
    },
    {
      name: t("person_info.person_4.name"),
      position: t("person_info.person_4.position"),
      expert: t("person_info.person_4.expert"),
      experience: t("person_info.person_4.experience"),
    },
  ];

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
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              {t("our_history.title")}
            </h2>
            <p className="text-gray-600 mb-4 indent-5">
              {t("our_history.indent_1")}
            </p>
            <p className="text-gray-600 mb-4 indent-5">
              {t("our_history.indent_2")}
            </p>
            <p className="text-gray-600 mb-4 indent-5">
              {t("our_history.indent_3")}
            </p>
            <p className="text-gray-600 mb-4 indent-5">
              {t("our_history.indent_4")}
            </p>
          </div>
          <div>
            <img
              src={detailPage.src}
              alt="สำนักงานของเรา"
              className="rounded-lg shadow-xl w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            {t("person_info.title")}
          </h2>
          <div className="grid text-sm sm:grid-cols-4 gap-8">
            {lawyers.map((lawyer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={person.src}
                  alt={lawyer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{lawyer.name}</h3>
                  <p className="text-blue-900 font-medium mb-2">
                    {lawyer.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium"></span> {lawyer.expert}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium"></span> {lawyer.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          {t("principle.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("principle.title_column_1")}
            </h3>
            <p className="text-gray-600">{t("principle.detail_column_1")}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("principle.title_column_2")}
            </h3>
            <p className="text-gray-600">{t("principle.detail_column_2")}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("principle.title_column_3")}
            </h3>
            <p className="text-gray-600">{t("principle.detail_column_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
