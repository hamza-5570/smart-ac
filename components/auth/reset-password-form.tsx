import {
  resetPassword as resetpasswordApi,
  type ResetPaswordPayload,
} from "@/services/auth-api";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { FormEvent } from "react";

export default function ResetPasswordForm() {
  const {
    mutate: resetpassword,
    isPending,
    data,
  } = useMutation({
    mutationKey: ["resetpassword"],
    mutationFn: (data: ResetPaswordPayload) => resetpasswordApi(data),
  });
  const router = useRouter();

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    resetpassword(data as ResetPaswordPayload, {
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        router.push("/auth/reset-password");
      },
      onError: (err) => {
        addToast({ title: "Error", description: err.message, color: "danger" });
      },
    });
  };

  return (
    <>
      <Form
        className="max-w-sm mx-auto flex flex-col gap-4 items-center p-4 rounded-3xl "
        onSubmit={handleResetPassword}
      >
      <Input
          isRequired
          defaultValue="123456789"
          errorMessage="Please enter your password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
        />

        <Button fullWidth isLoading={isPending} color="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
