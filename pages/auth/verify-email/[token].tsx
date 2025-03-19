import AuthLayout from "@/layouts/auth";
import { verifyEmail } from "@/services/auth-api";
import { Spinner } from "@heroui/spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export default function VerifyEmail() {
  const router = useRouter();
  const { token } = router.query;
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["verify-email"],
    queryFn: () => verifyEmail(token as string),
    enabled: !!token,
  });
  return (
    <AuthLayout>
      {isLoading && <Spinner size="lg" />}
      {isError && <p>{error.message}</p>}
      {isSuccess && <p>{data.message}</p>}
    </AuthLayout>
  );
}
