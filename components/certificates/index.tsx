import { Button } from "@heroui/button";
import React, { useState } from "react";
import SearchInput from "../ui/search-input";
import Image from "next/image";
import CertificatesTable from "./certificates-table";
import { useRouter } from "next/router";
import NewCertificate from "./new-certificate";

const list = [
  {
    domain: ["Rescplexor.com", "Rescplexor.com", "Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Valid",
  },
  {
    domain: ["mulapea.cokcmgi.cloudaniry.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Expiring in 3m 2d",
  },
  {
    domain: ["Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Valid",
  },
  {
    domain: ["Rescplexor.com", "Rescplexor.com", "Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Pending",
  },
  {
    domain: ["mulapea.cokcmgi.cloudaniry.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Expired",
  },
  {
    domain: ["Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Cancelled",
  },
  {
    domain: ["Rescplexor.com", "Rescplexor.com", "Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Valid",
  },
  {
    domain: ["mulapea.cokcmgi.cloudaniry.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Expiring in 3m 2d",
  },
  {
    domain: ["Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Valid",
  },
  {
    domain: ["Rescplexor.com", "Rescplexor.com", "Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Pending",
  },
  {
    domain: ["mulapea.cokcmgi.cloudaniry.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Expired",
  },
  {
    domain: ["Rescplexor.com"],
    certificate_type: "90-Day Certificate",
    date: "04/02/2026",
    status: "Cancelled",
  },
];

export default function Certificates() {
  const router = useRouter();
  const { tab = "certificates", filter = "All" } = router.query;
  const [activeTab, setActiveTab] = useState(filter);

  const filteredList = () => {
    switch (activeTab) {
      case "Issued":
        return list.filter((item) => item.status === "Valid");
      case "ExpiringSoon":
        return list.filter((item) =>
          item.status.toLowerCase().includes("expiring")
        );
      case "PendingValidation":
        return list.filter((item) => item.status === "Pending");
      case "Expired":
        return list.filter((item) => item.status === "Expired");
      case "Cancelled":
        return list.filter((item) => item.status === "Cancelled");
      default:
        return list;
    }
  };

  const tabs = [
    {
      id: "All",
      label: " All",
      content: <CertificatesTable list={filteredList()} />,
    },
    {
      id: "Issued",
      label: "Issued",
      content: <CertificatesTable list={filteredList()} />,
    },
    {
      id: "ExpiringSoon",
      label: "Expiring Soon",
      content: <CertificatesTable list={filteredList()} />,
    },
    {
      id: "PendingValidation",
      label: "Pending Validation",
      content: <CertificatesTable list={filteredList()} />,
    },
    {
      id: "Expired",
      label: "Expired",
      content: <CertificatesTable list={filteredList()} />,
    },
    {
      id: "Cancelled",
      label: "Cancelled",
      content: <CertificatesTable list={filteredList()} />,
    },
  ];

  const handleChange = (tab: any) => {
    router.replace(`/certificates?tab=${tab}`);
  };
  return (
    <>
      <div>
        {tab === "certificates" && (
          <div>
            <p className="text-2xl md:text-[32px] font-medium font-mono text-[#101828] dark:text-white">
              Certificates
            </p>
            <p className="md:w-[650px] text-xs md:text-sm text-[#667085] dark:text-[#8F8A99] font-medium pt-1.5">
              Manage all your SSL certificates in one place—view issued,
              expiring soon, pending validation, expired, canceled certificates,
              and create new ones effortlessly.
            </p>

            <div className="mt-8">
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 xl:gap-0">
                <div className="w-full md:w-auto font-manrope grid grid-cols-2 md:flex">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      className={`flex items-center gap-2 border border-[#EAECF0] dark:border-[#2D263D] text-sm font-semibold h-[45px] px-4 ${
                        index === 0
                          ? "rounded-tl-lg md:!rounded-l-lg"
                          : index === tabs.length - 1
                            ? " rounded-br-lg md:!rounded-r-lg"
                            : ""
                      } ${
                        activeTab === tab.id
                          ? "bg-[#F4F3FF] text-[#6938EF] dark:bg-[#291B4A] dark:text-[#9B8AFB]"
                          : "text-[#98A2B3] hover:bg-[#F1F5F9] dark:bg-[#161221]"
                      } ${index === 1 && "rounded-tr-lg md:rounded-none"} ${index === 4 && "rounded-bl-lg md:rounded-none"}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="w-full xl:w-auto flex flex-col md:flex-row gap-3">
                  <SearchInput className="w-full xl:w-[220px]" />
                  <Button
                    color="primary"
                    className="w-full xl:w-[210px] h-[45px] bg-[#6938EF] dark:bg-[#9365F4] text-white text-sm font-semibold"
                    onPress={() => handleChange("create_new")}
                  >
                    <Image
                      src={"/assets/svg/common/plus.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                    Create New Certificates
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        )}
      </div>

      {tab === "create_new" && <NewCertificate handleChange={handleChange} />}
    </>
  );
}
