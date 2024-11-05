import React from "react";
import { useTranslations } from "next-intl";
import { homePage, detailPage, icon, team } from "../../../../public/images";

type Props = {};

const home = (props: Props) => {
  const t = useTranslations("HomePage");

  const services = [
    { title: "คดีอาญา", icon: "path/to/icon1.png" },
    { title: "คดีแพ่ง", icon: "path/to/icon2.png" },
    { title: "คดีภาษี", icon: "path/to/icon3.png" },
    { title: "คดีสอบสวนพิเศษ", icon: "path/to/icon4.png" },
    { title: "คดีมรดก", icon: "path/to/icon5.png" },
    { title: "คดีครอบครัว", icon: "path/to/icon6.png" },
  ];

  const locations = [
    {
      id: 1,
      name: "กรุงเทพฯ",
      address: "123 ถนนรัชดาภิเษก เขตห้วยขวาง กรุงเทพฯ 10310",
    },
  ];

  return (
    <div>
      <div className="relative -z-10">
        <img src={homePage.src} alt="background" className="" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-2xl sm:text-4xl font-bold">
              {t("title")}
            </h1>
            <p className="text-white text-sm sm:text-xl font-bold">
              {t("descrition")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
        <div className="my-10 flex flex-col lg:flex-row gap-10">
          <img
            src={detailPage.src}
            alt=""
            className="w-full max-w-[500px] h-auto mx-auto lg:w-auto lg:h-[400px]"
          />
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-left">{t("title")}</h1>
            <div className="border-t border-black mb-5 mt-3"></div>
            <p className="text-lg text-left">{t("descrition_detail")}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-slate-50 space-y-20 py-24 sm:py-20">
          <div className="mx-auto max-w-[1140px] grid gap-0 px-6 lg:px-8 xl:grid-cols-1">
            <div className="max-w-full text-center mb-10">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {t("our_team")}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                {t("our_team_detail")}
              </p>
            </div>
            <ul
              role="list"
              className="grid mx-auto gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
            >
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={team.src}
                    alt=""
                  ></img>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Mr.AAA
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Co-Founder / CEO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={team.src}
                    alt=""
                  ></img>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Mr.BBB
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Co-Founder / CEO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={team.src}
                    alt=""
                  ></img>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Mr.CCC
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Co-Founder / CEO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={team.src}
                    alt=""
                  ></img>
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Mr.DDD
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Co-Founder / CEO
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1140px] px-5 lg:px-0 ">
        <div className=" text-center my-10">
          <h1 className="text-4xl font-bold my-5 text-[#152F91]">
            ติดต่อเรา
          </h1>
          <p className="text-xl">สอบถามรายละเอียดด้านการบริการ คำแนะนำ และคำปรึกษาทางด้านบัญชี งานจดทะเบียน และปรึกษากฎหมาย เรายินดีให้บริการ</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            {locations.map((location) => (
              <div key={location.id} className="mb-4">
                <h2 className="text-2xl font-semibold">{location.name}</h2>
                <p className="text-lg">{location.address}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 p-4">
            <div className="w-full h-64 bg-gray-200 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799015259!2d100.53213599884398!3d13.756330226021903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fbb61a42f45%3A0x2e885ae94ec4823a!2z4LmA4LiI4LiB4Liy4Lij4LmM4LiX4Liw4Lii4LiZ4LiH4LiU4Lix4Lil4LiB4LiU4Li54LiU4Lil4LiX4Lih4Li04LiU4LiU!5e0!3m2!1sth!2sth!4v1631724010326!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
