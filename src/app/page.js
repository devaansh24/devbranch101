import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <Link href="/login">
        <h1>
          <button>LOGIN</button>
        </h1>
      </Link>
      <Link href="/signup">
        <h1>
          <button>
            SIGNUP
          </button>
        </h1>
      </Link>
    </div>
  );
}