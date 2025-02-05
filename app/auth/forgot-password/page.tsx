import React from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import Form from "./components/Form";
import { getUser } from "../../helpers/data";

export const metadata: Metadata = {
  title: "Forgot Password | Shoryuken",
  description: "Enter your email to get your reset password link.",
};

const ForgotPasswordPage = async () => {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen md:bg-slate-50">
      <main className="pt-12 w-80 mx-auto flex flex-col md:w-96">
        <Link className="self-center mb-6" href="/">
          <Image
            src="/images/logo-with-text.svg"
            alt="Shoryuken logo"
            width={240}
            height={64}
          />
        </Link>

        <Form />
      </main>
    </div>
  );
};

export default ForgotPasswordPage;
