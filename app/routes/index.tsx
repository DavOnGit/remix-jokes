import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description:
    "Remix jokes app. Learn Remix and laugh at the same time!",
});

export default function Index() {
  //throw new Error("stfghdhg");

  return (
    <div className="container">
      <div className="content spin">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link to="jokes.rss" reloadDocument>Rss</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}