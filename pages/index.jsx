import Link from "next/link";
import TailWindButton from "../components/TailwindButton";
function HomePage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "tomato" }}>
      <h3>Code Council</h3>
      <Link href="/posts/reacttesting">
        <a>
          <TailWindButton />
        </a>
      </Link>
    </div>
  );
}
export default HomePage;
