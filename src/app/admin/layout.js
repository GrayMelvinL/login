import { IconLogout, IconLogout2, IconUser, IconUsersGroup, IconUsersPlus, IconPlus } from "@tabler/icons-react";
import { Icon } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
  <section>
    <section id="container" className="flex h-screen justify-center">
      <section id="navigation" className="bg-white w-[15%] border-r border-gray-300 p-4">
        <h1 className="text-[30px] mb-5  font-sans  font-bold text-center">Connect</h1>
        <div className="nav-buttons flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
          <Link href="../admin/users">
          <button className="rounded-[10px] flex items-center gap-2 py-2 px-5 bg-black text-white border border-gray-300 w-[90%] cursor-pointer">
            <IconUser /> User
          </button>
          </Link>
          <Link href="../admin/roles">
        <button className=" flex items-center gap-2 py-2 px-5 w-[90%]">
          <IconUsersPlus /> Hak Akses
        </button>
        </Link>
        <Link href="..">
        <button className=" flex items-center gap-2 py-2 px-5 w-[90%] ">
          <IconLogout2 /> Logout
        </button>
        </Link>
      </div>
    </section>

    <section id="content" className="bg-white w-[80%]">{children}</section>
  </section>

  </section>
  );
}