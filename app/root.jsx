import { Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>My Remix Blog</title>
        <body>
          <Outlet />
        </body>
      </head>
    </html>
  );
}
