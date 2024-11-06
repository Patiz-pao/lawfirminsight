import React from "react";
import { useTranslations } from "next-intl";
import { detailPage } from "../../../../public/images";

const About = () => {
  const t = useTranslations("AboutPage");
  const lawyers = [
    {
      name: "นายสมชาย ใจดี",
      position: "หัวหน้าทนายความอาวุโส",
      specialization: "กฎหมายธุรกิจและการค้าระหว่างประเทศ",
      experience: "25 ปี",
    },
    {
      name: "นางสาวสุดา รักความยุติธรรม",
      position: "ทนายความหุ้นส่วน",
      specialization: "กฎหมายแพ่งและพาณิชย์",
      experience: "15 ปี",
    },
    {
      name: "นายวิชัย กฎหมายเที่ยงธรรม",
      position: "ทนายความที่ปรึกษา",
      specialization: "กฎหมายอาญาและคดีความทั่วไป",
      experience: "20 ปี",
    },
    {
      name: "นายวิชัย กฎหมายเที่ยงธรรม",
      position: "ทนายความที่ปรึกษา",
      specialization: "กฎหมายอาญาและคดีความทั่วไป",
      experience: "20 ปี",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-slate-200 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            {t("title")}
          </h1>
          <p className="text-xl mb-6 text-gray-600">{t("title_detail")}</p>
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
            ทีมทนายความของเรา
          </h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {lawyers.map((lawyer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <img
                  src={`/api/placeholder/400/300`}
                  alt={lawyer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{lawyer.name}</h3>
                  <p className="text-blue-900 font-medium mb-2">
                    {lawyer.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">ความเชี่ยวชาญ:</span>{" "}
                    {lawyer.specialization}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">ประสบการณ์:</span>{" "}
                    {lawyer.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          หลักการทำงานของเรา
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">ความเป็นธรรม</h3>
            <p className="text-gray-600">
              ยึดมั่นในหลักความยุติธรรมและจรรยาบรรณวิชาชีพ
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">ความไว้วางใจ</h3>
            <p className="text-gray-600">
              สร้างความเชื่อมั่นและความไว้วางใจจากลูกค้า
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-900">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">ความเชี่ยวชาญ</h3>
            <p className="text-gray-600">พัฒนาความรู้และทักษะอย่างต่อเนื่อง</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
