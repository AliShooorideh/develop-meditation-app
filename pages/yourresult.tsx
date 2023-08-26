import Image from "next/image";
import Box from "../components/Box";

const YourResult = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        className="absolute inset-0 -z-10 h-full w-full"
        src={"/images/Asset2.png"}
        alt={""}
        loading="lazy"
        width={0}
        height={0}
        sizes={"100vw"}
      />
      <div className=" flex p-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 rounded-xl bg-gray-200 p-2 shadow-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="mt-5 text-3xl font-semibold">Your Result</span>
        <div className="grid grid-cols-2 gap-7 mt-5">
          <Box number={560} text="Daily report Writen" />
          <Box number={66} text="Daily report Writen" />
          <Box number={120} text="Daily report Writen" />
          <Box number={25} text="Daily report Writen" />
        </div>
      </div>
    </div>
  );
};

export default YourResult;
