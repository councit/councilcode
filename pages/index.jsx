import Link from "next/link";
import Image from "next/image";
import Hero from "./hero";
import TailWindButton from "../components/TailwindButton";

function HomePage() {
  return (
    <>
      <div class="flex flex-col justify-center items-center mt-10 space-y-6">
        <h1 class="text-2xl font-bold">Code Council</h1>
        <Hero width={400} height={300} />
        <p>Hi i'm Taylor, welcome to my little corner of the web. &#128516;</p>
      </div>
      <section class="flex flex-col justify-center items-center mt-10">
        <div class="container w-3/4 border-2 rounded flex flex-row">
          <Image
            src={"https://picsum.photos/300/500"}
            width={700}
            height={500}
          />
          <div class="m-4 flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold">Testing React Applications</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nisi ea quaerat iusto ipsam, placeat dignissimos, optio, adipisci
              illum maiores totam voluptatum aperiam rem vero omnis deserunt
              vitae laboriosam officia?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nisi ea quaerat iusto ipsam, placeat dignissimos, optio, adipisci
              illum maiores totam voluptatum aperiam rem vero omnis deserunt
              vitae laboriosam officia?
            </p>
            <Link href="/posts/reacttesting">
              <a>
                <TailWindButton>Testing React Applications</TailWindButton>
              </a>
            </Link>
            <ul class="flex flex-row justify-between p-4 w-full">
              <li>Javascript</li>
              <li>Testing</li>
              <li>Fundamentals</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;
