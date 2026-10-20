import { site } from '../data/portfolio'

const year = new Date().getFullYear()

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
