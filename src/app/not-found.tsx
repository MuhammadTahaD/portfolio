import Link from "next/link";

export default function NotFound() {
  return <section className="page-wrap not-found"><span className="section-index">ERROR / 404</span><h1>Looks like this<br /><em>page wandered off.</em></h1><p>The address may have changed, or the page may not exist.</p><Link className="button button-primary" href="/">Back to the homepage <span aria-hidden="true">↗</span></Link></section>;
}
