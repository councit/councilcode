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
        <Link href="/posts/reacttesting">
          <div class="container w-3/4 border-2 rounded flex flex-row cursor-pointer transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
            <div class="m-4 flex flex-col justify-center items-center">
              <h1 class="text-2xl font-bold my-2">
                Testing React Applications
              </h1>
              <p>
                A dive into testing best practices in React. Up until I wrote
                this article I had not written a single unit test in my career.
                This post will explain what are the critical elements to testing
                React applications.
              </p>
              <p class="my-4">
                Topics we will cover include: Unit Testing, Testing Library -
                React, and Jest
              </p>

              <ul class="flex flex-row justify-around p-4 w-full">
                <li class="bg-blue-200 rounded px-4 py-2 font-semibold">
                  Javascript
                </li>
                <li class="bg-yellow-200 rounded px-4 py-2 font-semibold">
                  Testing
                </li>
                <li class="bg-purple-200 rounded px-4 py-2 font-semibold">
                  Fundamentals
                </li>
                <li class="bg-green-200 rounded px-4 py-2 font-semibold">
                  React
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
export default HomePage;
