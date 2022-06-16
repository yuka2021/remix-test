import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];
export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "Remix, Blog";

  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        {/* <link rel="stylesheet" href={globalStylesUrl} /> */}
        <Links />
        <title>{title ? title : "My Remix Blog"}</title>
        <body>
          {children}
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </head>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          My Remix
        </Link>
      </nav>

      <ul className="nav">
        <li>
          <Link to="posts">Posts</Link>
        </li>
      </ul>

      <div className="container">{children}</div>
    </>
  );
}
