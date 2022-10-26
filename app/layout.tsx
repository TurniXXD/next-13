//import { LinkResolver } from '../utils/resolvers';
import NavLink from "./nav-link"
import '../styles/globals.css';

// Server component
export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html>
      <head>
        <title>Next 13</title>
      </head>
      <body className="h-screen bg-gray-800">
        <header>
          <nav className="flex flex-row justify-around w-full">
            <div className="flex flex-col">
              <NavLink href="/">Home</NavLink>
            </div>
            <div className="flex flex-col">
              <NavLink href="/movies">Movies</NavLink>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
