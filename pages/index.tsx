import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="relative h-screen w-screen">
      <Image
        className="absolute inset-0 -z-10 h-full w-full"
        src={"/images/Asset1.png"}
        alt={""}
        loading="lazy"
        width={0}
        height={0}
        sizes={"100vw"}
      />
      <div>
        <div className="z-20 flex flex-col items-center justify-center space-y-2 pt-64 text-4xl">
          <span>Wellcome to</span>
          <span className="text-5xl font-bold">Medi App</span>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-screen flex-col space-y-10 rounded-t-2xl bg-white py-14 px-12 text-center shadow-2xl">
        <span className="text-xl font-semibold">Please Sign In</span>
        <input
          className="w-full border-b border-gray-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-full border-b border-gray-400 outline-none"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex items-center justify-between text-red-500 underline">
          <Link href={"/"}>
            <span>Forget Password</span>
          </Link>
          <Link href={"/"}>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
