//import { LinkResolver } from '../utils/resolvers';
import NavLink from "./nav-link"
import '../styles/globals.css';
import '../dist/output.css'

// Server component
export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html className="bg-gray-700">
      <head>
        <title>kek</title>
      </head>
      <body>
        <header>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
