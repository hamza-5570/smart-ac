import { signup as signupApi, type SignUpPayload } from "@/services/auth-api";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

import { FormEvent } from "react";

export default function SignupForm() {
  const {
    mutate: signup,
    isPending,
    data,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: SignUpPayload) => signupApi(data),
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    signup(data as SignUpPayload, {
      onSuccess: (res) => {
        console.log(res);
        form.reset();
      },
      onError: () => {},
    });
  };

  return (
    <>
      {data && (
        <div className="px-4 py-2 rounded-2xl bg-sky-900/50 text-center">
          <p className="text-sm">{data.message}:</p>
          <p className="font-medium ">{data.data.email}</p>
        </div>
      )}
      <Form
        className="max-w-sm mx-auto flex flex-col gap-4 items-center p-4 rounded-3xl "
        onSubmit={handleLogin}
      >
        <Input
          isRequired
          errorMessage="Please enter your full name"
          label="Full Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          errorMessage="Please enter your password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
        />

        <Button fullWidth isLoading={isPending} color="primary" type="submit">
          Signup
        </Button>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[#6938EF] font-medium hover:underline underline-offset-2"
          >
            Login
          </Link>
        </p>
      </Form>
    </>
  );
}
