import {IconUsers} from "@tabler/icons-react"
export default function Users() {
  return (
    <div id="container" className="flex">
      <section id="Nav" className="bg-white h-[100npmvh] pt-10 p-10 text-black font-serif ">
        <h1 >Connect</h1>
        <div>
          <button>
            <IconUsers />Users</button>
          <button>Hak Akses</button>
          <button>Log Out</button>
        </div>
      </section>

      <section id="Content" className="p-5 bg-">
        <input placeholder="Cari Users" className=""></input>
        <div id="User-card">
          <div id="User-info" className="flex">
          <h2>Rahmat Saudi AL Fathir AS</h2>
          <p>rahmatalfathir@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
