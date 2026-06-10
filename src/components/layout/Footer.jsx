export function Footer({ backToTop, copyright }) {
  return (
    <footer className="site-footer shell">
      <span>{copyright}</span>
      <a href="#top">{backToTop}</a>
    </footer>
  )
}
