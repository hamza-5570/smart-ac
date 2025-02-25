import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div>
      <Image
        src={"/assets/png/logo.png"}
        alt=""
        width={642}
        height={192}
        className="w-[120px] lg:w-[160px]"
      />
    </div>
  );
}
