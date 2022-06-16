import { Outlet, LiveReload } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>My Remix Blog</title>
        <body>
          <Outlet />
          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </body>
      </head>
    </html>
  );
}
