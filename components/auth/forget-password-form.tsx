import {
  forgotPassword as forgetpasswordApi,
  type ForgotPasswordPayload,
} from "@/services/auth-api";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { FormEvent } from "react";

export default function ForgetPasswordForm() {
  const {
    mutate: forgetpassword,
    isPending,
    data,
  } = useMutation({
    mutationKey: ["forgetpassword"],
    mutationFn: (data: ForgotPasswordPayload) => forgetpasswordApi(data),
  });
  const router=useRouter()

  const handleForgetPassword =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log(data);
    forgetpassword(data as ForgotPasswordPayload,{
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        router.push('/auth/reset-password')
      },
      onError: (err) => {
        addToast({ title: "Error", description: err.message, color: "danger" });

      },
    })
  };

  return (
    <>
     {data && (
        <div className="px-4 py-2 rounded-2xl bg-purple-100 text-center">
          <p className="text-sm">{data.message}:</p>
        </div>
      )}
      <Form
        className="max-w-sm mx-auto flex flex-col gap-4 items-center p-4 rounded-3xl "
        onSubmit={handleForgetPassword}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Button fullWidth isLoading={isPending} color="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
