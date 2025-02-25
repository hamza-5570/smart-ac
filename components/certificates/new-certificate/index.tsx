import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import NewComponent from "./new-component";
import { Card } from "@heroui/card";
import { EffortlessSetup } from "@/components/ui/models/effortless-setup";
import { useRouter } from "next/router";

export default function NewCertificate({ handleChange }: any) {
  const [activeTab, setActiveTab] = useState("New");
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { tab } = router.query;

  const tabs = [
    { id: "New", label: "New", content: <NewComponent /> },
    { id: "Drafts", value: 3, label: "Drafts", content: "Content for Drafts" },
    {
      id: "RequireValidation",
      value: 4,
      label: "Require Validation",
      content: "Content for Require Validation",
    },
  ];

  useEffect(() => {
    if (tab === "create_new") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, []);

  return (
    <div className="xl:w-[652px]">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#0A0613] border border-[#EAECF0] dark:border-[#2D263D] cursor-pointer"
        onClick={() => handleChange("certificates")}
      >
        <IoIosArrowBack size={20} className="text-[#98A2B3]" />
      </button>

      <div className="mt-3">
        <p className="text-2xl md:text-[32px] font-medium font-mono text-[#101828] dark:text-white">
          New Certificate
        </p>
        <p className="md:w-[650px] text-xs md:text-sm text-[#667085] dark:text-[#98A2B3] font-medium pt-1">
          {`You’re just a step away from generating fresh certificates for one or multiple domains. To proceed with the installation, kindly complete the required action below.`}
        </p>
      </div>
      <div className="mt-8">
        <div className="font-manrope flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 border border-[#EAECF0] dark:border-[#2D263D] text-sm font-semibold h-[45px] px-4 ${
                index === 0
                  ? "!rounded-l-lg"
                  : index === tabs.length - 1
                    ? "!rounded-r-lg"
                    : ""
              } ${
                activeTab === tab.id
                  ? "bg-[#F4F3FF] text-[#6938EF] dark:bg-[#291B4A] dark:text-[#9B8AFB]"
                  : "text-[#98A2B3] hover:bg-[#F1F5F9] dark:bg-[#161221]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {tab.label === "Drafts" && tab.value && (
                <div className="flex items-center justify-center text-[9px] bg-[#EAECF0] dark:bg-[#291B4A] text-[#667085] dark:text-[#D0D5DD] rounded-full w-5 h-3.5">
                  {tab.value}
                </div>
              )}
              {tab.label === "Require Validation" && tab.value && (
                <div className="flex items-center justify-center text-[9px] bg-[#FDB022] dark:bg-[#7A2E0E] dark:text-[#FFFCF5 ] text-white  rounded-full w-5 h-3.5">
                  {tab.value}
                </div>
              )}
            </button>
          ))}
        </div>

        <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] rounded-none mt-5">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </Card>
      </div>

      <EffortlessSetup
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
