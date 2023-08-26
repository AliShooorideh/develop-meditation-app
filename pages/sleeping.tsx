import Image from "next/image";
import Box from "../components/Box";

const YourResult = () => {
  return (
    <div className="relative h-screen w-screen bg-gray-200">
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
      <div className="mt-8 flex flex-col px-6">
        <span className="text-3xl font-bold">Sleeping</span>
        <span className="mt-2">select your meditation need</span>
        <div className="mt-5 flex flex-col items-center px-5">
          <Image
            className="h-full w-full"
            src={"/images/Asset3.png"}
            alt=""
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="-mt-4 w-full rounded-b-xl bg-white px-5 py-6">
            <span className="text-2xl font-bold">Sleep</span>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptatum, accusantium{" "}
            </p>
          </div>
          <div className="mt-10 flex w-full justify-between px-28">
            <div className="h-4 w-4 rounded-full bg-purple-700" />
            <div className="h-4 w-4 rounded-full bg-purple-400" />
            <div className="h-4 w-4 rounded-full bg-purple-400" />
          </div>
          <div className="mt-10 flex w-screen flex-col px-6">
            <span className="text-3xl font-bold">Resource</span>
            <div className="mt-3 flex items-center space-x-4 rounded-xl bg-white p-2 shadow-2xl">
              <Image
                className="w-16 object-contain"
                src={"/images/Asset4.png"}
                alt=""
                loading="lazy"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col font-semibold">
                <span>Story</span>
                <span>What is Yoga ?</span>
              </div>
            </div>
            <div className="mt-3 flex items-center space-x-4 rounded-xl bg-white p-2 shadow-2xl">
              <Image
                className="w-16 object-contain"
                src={"/images/Asset5.png"}
                alt=""
                loading="lazy"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col font-semibold">
                <span>Story</span>
                <span>What is Yoga ?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourResult;
