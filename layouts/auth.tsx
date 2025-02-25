import { Spinner } from "@heroui/spinner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("access_token")) router.replace("/");
    else setLoading(false);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {loading ? <Spinner size="lg" /> : children}
    </div>
  );
}
