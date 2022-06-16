import { Outlet, LiveReload } from "remix";

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "My Remix Blog"}</title>
        <body>
          {children}
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </head>
    </html>
  );
}
