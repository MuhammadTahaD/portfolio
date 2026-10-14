import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="wordmark" href="/">TAHA<span>·</span></Link>
        <p>Thoughtful software, built one useful thing at a time.</p>
        <div className="footer-links"><Link href="/#projects">Projects</Link><Link href="/#about">About</Link><Link href="/writing/">Writing</Link><Link href="/#contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Muhammad Taha Malik</span><span>Designed and built with care.</span><div><a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
    </footer>
  );
}
