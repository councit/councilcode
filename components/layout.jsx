import Hero from "../pages/hero";
import Link from "next/link";
function Layout({ children }) {
  return (
    <div class="flex flex-col w-full items-center">
      <nav class="flex flex-row justify-between items-center p-4 bg-gradient-to-r from-blue-400 to-purple-500  w-full">
        <Link href="/">
          <a>
            <Hero height={50} width={50} />
          </a>
        </Link>
        <h1 class="text-2xl font-bold text-white">Code Council</h1>
        <ul class="flex  space-x-2 flex-row">
          <li>
            <Link href="/aboutme">
              <a class="font-semibold text-white">About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div class="w-2/3">{children}</div>
    </div>
  );
}

export default Layout;
