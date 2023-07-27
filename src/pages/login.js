import RootLayout from "@/layout/RootLayout";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

export default function LoginPage() {
  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div
        className="bg-[#4B6BFB] px-4 py-2 rounded flex items-center gap-4 text-white cursor-pointer"
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/pc-builder",
          })
        }
      >
        <p>Login With Github</p>
        <AiFillGithub />
      </div>
    </div>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
