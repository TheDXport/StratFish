import { FlipWords } from "../components/flipwords";
import { BackgroundBeams } from "../components/bg-beams";
import localFont from "@next/font/local";
import Link from "next/link";
import AppRouter from "next/dist/client/components/app-router";
const GeistBold = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Bold.otf",
      weight: "600",
    },
  ],
});
const GeistReg = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Regular.otf",
      weight: "600",
    },
  ],
});
//  {
//       path: "../../public/fonts/Geist-Regular.otf",
//       weight: "400",
//     },
//     {
//       path: "../../public/fonts/Geist-SemiBold.otf",
//       weight: "500",
//     },
// {
//       path: "../../public/fonts/Geist-Black.otf",
//       weight: "700",
//     },

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <BackgroundBeams className=" absolute  " />

      <div
        className={`w-full h-full relative flex flex-col items-center justify-center text-5xl ${GeistBold.className}  `}
      >
        <h1 className=" text-white mr-[19rem] ">
          {" "}
          Your catalog of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-[#7172B1]">
            best
            <FlipWords
              words={["strategies", "principles", "fundamentals"]}
              className=" text-white absolute ml-3 mt-[-8px] "
            />
          </span>{" "}
        </h1>
        <div className="w-[40rem] flex text-center ">
          <h3 className={`text-[#D7D7D7] mt-5 ${GeistReg.className} text-2xl `}>
            Strategies used by Professional VCT Teams, Pro Players, and more—all
            in one place.
          </h3>
        </div>

        <Link
          href="/main"
          className="relative mt-4 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
            View Strategies <span className="ml-4">&rarr;</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
