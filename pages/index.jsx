import Link from "next/link";
import Hero from "./hero";
import TailWindButton from "../components/TailwindButton";

function HomePage() {
  return (
    <>
      <div class="flex flex-col justify-center items-center mt-10 space-y-6">
        <h1 class="text-2xl font-bold">Code Council</h1>
        <Hero width={400} height={300} />
        <p>Hi i'm Taylor, welcome to my little corner of the web. &#128516;</p>

        <Link href="/posts/reacttesting">
          <a>
            <TailWindButton>Testing React Applications</TailWindButton>
          </a>
        </Link>
      </div>
    </>
  );
}
export default HomePage;
