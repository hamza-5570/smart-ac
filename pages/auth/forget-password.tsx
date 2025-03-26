import Image from "next/image";
import React from "react";
import Link from "next/link";
import ForgetPasswordForm from "@/components/auth/forget-password-form";

export default function ForgetPasswordPage() {
  return (
    <section className="flex-1">
      <div className="max-w-md mx-auto space-y-6 p-6 rounded-3xl border dark:border-gray-700">
        <Image
          src="/assets/png/logo.png"
          width={600}
          height={192}
          className="w-40 h-auto mx-auto"
          alt="Company Logo"
        />
        <div>
          <h3 className="font-mono text-xl font-semibold text-center">
            Welcome Back
          </h3>
          <p className="text-center text-sm">
            Reset your password to continue
          </p>
        </div>
        <ForgetPasswordForm />
        <div>
          <Link href={'/'} className="text-center  text-[#6938EF] font-medium underline-offset-2 justify-center flex hover:underline cursor-pointer">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}