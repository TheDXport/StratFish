import localFont from "@next/font/local";

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
      <h1 className="text-white">hello</h1>
    </main>
  );
}
