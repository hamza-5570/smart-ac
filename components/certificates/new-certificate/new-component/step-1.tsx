import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Step1() {
  const [domains, setDomains] = useState<{ id: number; value: string }[]>([
    { id: Date.now(), value: "" },
  ]);
  const [addedDomains, setAddedDomains] = useState<string[]>([]);

  const handleInputChange = (id: number, value: string) => {
    setDomains((prev) =>
      prev.map((domain) => (domain.id === id ? { ...domain, value } : domain))
    );
  };

  const handleAddDomain = (id: number) => {
    const domain = domains.find((d) => d.id === id);
    if (domain && domain.value.trim() !== "") {
      setAddedDomains((prev) => [...prev, domain.value]);
      setDomains((prev) => [
        ...prev.filter((d) => d.id !== id),
        { id: Date.now(), value: "" },
      ]);
    }
  };

  const handleRemoveDomain = (domainToRemove: string) => {
    setAddedDomains((prev) =>
      prev.filter((domain) => domain !== domainToRemove)
    );
  };
  return (
    <div>
      <div className="bg-[#F9FAFB] dark:bg-[#0A0613] border-b dark:border-[#344054] p-3 md:p-5">
        <p className="text-lg font-semibold text-[#1D2939] dark:text-white">
          Domain
        </p>
        <p className="md:w-[619px] text-xs font-medium text-[#667085] dark:text-[#98A2B3] pt-1">
          Kindly provide at least one domain to secure. For a single domain, the
          www version will automatically be included at no additional cost.
        </p>
      </div>
      <div className="bg-white p-3 md:p-5 dark:bg-[#000000]">
        <div className="md:w-[427px]">
          {domains.map((domain) => (
            <div key={domain.id}>
              <Input
                startContent={
                  <Image
                    src="/assets/svg/common/domain-lock.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                }
                placeholder="WWW"
                variant="bordered"
                size="lg"
                radius="none"
                className="dark:bg-[#0A0613] !border-[#EAECF0] dark:border-[#344054] focus:!outline-none"
                value={domain.value}
                onChange={(e) => handleInputChange(domain.id, e.target.value)}
              />
              <Button
                variant="bordered"
                radius="none"
                size="lg"
                startContent={
                  <Image
                    src="/assets/svg/common/fill-plus.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                }
                className="w-full !justify-start text-sm text-[#6938EF] dark:text-[#9365F4] font-medium bg-[#FCFCFD] dark:bg-[#161221] border-[#EAECF0] dark:border-[#344054] border-t-0"
                onPress={() => handleAddDomain(domain.id)}
              >
                Add another domain
              </Button>
            </div>
          ))}

          {addedDomains.map((domain, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#161221] border-[#EAECF0] dark:border-[#344054] rounded"
            >
              <span className="text-sm text-[#6938EF] dark:text-[#9365F4]">
                {domain}
              </span>
              <button onClick={() => handleRemoveDomain(domain)}>
                <IoIosClose />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
