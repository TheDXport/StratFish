import localFont from "@next/font/local";
import maps from "./maps.json";
const GeistBold = localFont({
  src: [
    {
      path: "../../../public/fonts/Geist-Bold.otf",
      weight: "600",
    },
  ],
});
const GeistReg = localFont({
  src: [
    {
      path: "../../../public/fonts/Geist-Regular.otf",
      weight: "600",
    },
  ],
});

export default function Home() {
  return (
    <main className=" flex min-h-screen  items-center justify-center  bg-black">
      <div className="flex h-screen w-full">
        <div className="flex-none w-1/4 overflow-hidden bg-gray-100 border-r border-gray-300 p-5">
          Panel 1 Content
        </div>
        <div className="flex-1 overflow-hidden bg-gray-100 border-r border-gray-300 p-5">
          Panel 2 Content
        </div>
        <div className="flex-1 overflow-auto bg-gray-100 p-5 no-scrollbar"></div>
      </div>
    </main>
  );
}
