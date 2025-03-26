import { login as loginApi, LoginPayload } from "@/services/auth-api";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function LoginForm() {
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginPayload) => loginApi(data),
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    login(data as LoginPayload, {
      onSuccess: (res) => {
        localStorage.setItem("access_token", res.data.token);
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        form.reset();
        router.replace("/");
      },
      onError: (err) => {
        addToast({ title: "Error", description: err.message, color: "danger" });
      },
    });
  };

  return (
    <Form
      className="max-w-sm mx-auto flex flex-col gap-4 p-4 rounded-3xl "
      onSubmit={handleLogin}
    >
      <div className="w-full">
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          className="w-full"
          labelPlacement="outside"
          name="email"
          defaultValue="it@mettlesoft.com.au"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full">
          <Link
            href="/auth/forget-password"
            className="text-[#6938EF] font-medium hover:underline underline-offset-2"
          >
            Forget Password
          </Link>
        </div>
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
      </div>
      <Button fullWidth isLoading={isPending} color="secondary" type="submit">
        Login
      </Button>
      {/* <div className="mx-auto">
        <p className="text-gray-500 text-center">
          {"Don't have an account? "}
          <Link
            href="/auth/signup"
            className="text-[#6938EF] font-medium hover:underline underline-offset-2"
          >
            Signup
          </Link>
        </p>
      </div> */}
    </Form>
  );
}
