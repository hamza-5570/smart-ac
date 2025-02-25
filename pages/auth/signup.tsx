import SignupForm from "@/components/auth/signup-form";
import Image from "next/image";
import React from "react";

export default function SignupPage() {
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
            Welcome User!
          </h3>
          <p className="text-center text-sm">
            Create a new account providing below details
          </p>
        </div>
        <SignupForm />
      </div>
    </section>
  );
}
