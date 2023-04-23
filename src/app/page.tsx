import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 pt-2 pl-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-8">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
            >
              <Library />
              Your Libarary
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Treino 2023
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock para Treinar
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pegando Pesado
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Black Coffee
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Alan Walker
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Dance Latinas
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="w-6 h-6 rounded-full bg-black/40 ">
              <ChevronLeftIcon />
            </button>
            <button className="w-6 h-6 rounded-full bg-black/40 ">
              <ChevronRightIcon />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Welcome again</h1>

          <div className="grid grid-cols-3 gap-4">
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
            <a className="bg-white/10 rounded flex items-center gap-4 ouverflow-hidden hover:bg-white/20">
              <Image
                src="/Nirvana.jpg"
                width={104}
                height={80}
                alt="capa do albul da banda Nirvana"
              />
              <strong>Nirvana</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
