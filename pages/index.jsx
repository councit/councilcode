import Link from "next/link";
import TailWindButton from "../components/TailwindButton";
function HomePage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "tomato" }}>
      <h3>Code Council</h3>
      <Link href="/posts/reacttesting">
        <a>
          <TailWindButton location="React Testing" />
        </a>
      </Link>
      <Link href="/aboutme">
        <a>
          <TailWindButton location="About Me" />
        </a>
      </Link>
    </div>
  );
}
export default HomePage;
