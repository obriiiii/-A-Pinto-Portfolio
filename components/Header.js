import Link from 'next/link'

export default function Header() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo">AUBREY</div>
        <nav>
          <Link href="#home">HOME</Link>
          <Link href="#about">ABOUT ME</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#skills">SKILLS</Link>
          <Link href="#contact">CONTACT INFO</Link>
        </nav>
      </div>
    </header>
  )
}