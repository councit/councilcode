import Hero from "../pages/hero";
import Link from "next/link";
function Layout({ children }) {
  return (
    <div class="flex flex-col w-full items-center">
      <nav class="flex flex-row justify-between p-4 bg-gradient-to-r from-green-400 to-blue-500  w-full">
        <Hero height={50} width={50} />
        <ul>
          <li>
            <Link href="/aboutme">
              <a>About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div class="w-2/3">{children}</div>
    </div>
  );
}

export default Layout;
