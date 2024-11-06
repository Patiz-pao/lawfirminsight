"use client";
import React from "react";
import { family } from "../../../../../public/images";
import { useTranslations } from "next-intl";
import { Shield, AlertTriangle, Gavel, Scale, Clock } from "lucide-react";
import { useActiveTab } from "@/hooks/useActiveTab";

type Props = {}

const familyPage = (props: Props) => {
  const t = useTranslations("FamilyPage");

  const {activeTab, changeTab} = useActiveTab("overview");

  const familyTypes = [
    {
      title: t("familyTypes.title"),
      description: t("familyTypes.description"),
      punishment: t("familyTypes.punishment"),
      examples: t("familyTypes.examples").split(", "),
    },
    {
      title: t("familyTypes_2.title"),
      description: t("familyTypes_2.description"),
      punishment: t("familyTypes_2.punishment"),
      examples: t("familyTypes_2.examples").split(", "),
    },
    {
      title: t("familyTypes_3.title"),
      description: t("familyTypes_3.description"),
      punishment: t("familyTypes_3.punishment"),
      examples: t("familyTypes_3.examples").split(", "),
    },
  ];

  const procedures = [
    {
      step: 1,
      title: t("procedures_1.title"),
      description: t("procedures_1.description"),
    },
    {
      step: 2,
      title: t("procedures_2.title"),
      description: t("procedures_2.description"),
    },
    {
      step: 3,
      title: t("procedures_3.title"),
      description: t("procedures_3.description"),
    },
    {
      step: 4,
      title: t("procedures_4.title"),
      description: t("procedures_4.description"),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-slate-200 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {t("title")}
          </h1>
          <p className="text-xl max-w-3xl text-gray-600">{t("title_detail")}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex space-x-4 border-b">
          <button
            onClick={() => changeTab("overview")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "overview"
                ? "border-b-2 border-blue-900 text-blue-900"
                : "text-gray-600 hover:text-blue-900"
            }`}
          >
            {t("title_detail_tab_1")}
          </button>
          <button
            onClick={() => changeTab("types")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "types"
                ? "border-b-2 border-blue-900 text-blue-900"
                : "text-gray-600 hover:text-blue-900"
            }`}
          >
            {t("title_detail_tab_2")}
          </button>
          <button
            onClick={() => changeTab("procedure")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "procedure"
                ? "border-b-2 border-blue-900 text-blue-900"
                : "text-gray-600 hover:text-blue-900"
            }`}
          >
            {t("title_detail_tab_3")}
          </button>
        </div>

        <div className="py-8">
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("tab_overview.title")}
                </h2>
                <p className="text-gray-600 mb-4">{t("tab_overview.detail")}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    {t("tab_overview.subtitle_detail")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-blue-900" />
                      <span>{t("tab_overview.subtitle_detail_1")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Gavel className="w-5 h-5 text-blue-900" />
                      <span>{t("tab_overview.subtitle_detail_2")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Scale className="w-5 h-5 text-blue-900" />
                      <span>{t("tab_overview.subtitle_detail_3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img
                  src={family.src}
                  alt="Criminal Law Concept"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("subtab_overview.title")}
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold">
                      {t("subtab_overview.result_title_1")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("subtab_overview.result_description_1")}
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold">
                      {t("subtab_overview.result_title_2")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("subtab_overview.result_description_2")}
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold">
                      {t("subtab_overview.result_title_3")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("subtab_overview.result_description_3")}
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">
                      {t("subtab_overview.result_title_4")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("subtab_overview.result_description_4")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "types" && (
            <div className="space-y-6">
              {familyTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="sm:flex items-start sm:space-x-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {type.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className="bg-red-50 p-4 rounded-lg mb-4">
                        <h3 className="font-semibold text-red-900 mb-2">
                          {t("tab_type.title_1")}
                        </h3>
                        <p className="text-red-800">{type.punishment}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {t("tab_type.title_2")}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {type.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "procedure" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {t("tab_procedure.title")}
                </h2>
                <div className="space-y-8">
                  {procedures.map((proc, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center">
                        {proc.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {proc.title}
                        </h3>
                        <p className="text-gray-600">{proc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-6 h-6 text-blue-900" />
                  <h3 className="text-xl font-bold text-blue-900">
                    {t("tab_procedure.subtitle")}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {t("tab_procedure.topic_1")}
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>{t("tab_procedure.topic_detail_1_1")}</li>
                      <li>{t("tab_procedure.topic_detail_1_2")}</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {t("tab_procedure.topic_2")}
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>{t("tab_procedure.topic_detail_2_1")}</li>
                      <li>{t("tab_procedure.topic_detail_2_2")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default familyPage;