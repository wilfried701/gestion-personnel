import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <div className="menu">
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/personnel">LISTE PERSONNEL</Link>
          <Link href="/ajouterPersonnel">
            <button>AJOUTER</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
