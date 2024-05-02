
import ThemeSwitch from "@/components/ThemeSwitch";
import Marquee from "@/components/Marquee";
export default function Page() {
  return (
    <main className="min-h-screen p-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-[35%] flex justify-start ">Blog 2k24</div>
        <div className="w-[30%] flex justify-center ">
          <Marquee />
        </div>
        <div className="w-[35%] flex justify-end ">
          <ThemeSwitch />
        </div>
      </div>
      <h1 className="font-kleemax">ALL POSTS</h1>

    </main>
  );
}
