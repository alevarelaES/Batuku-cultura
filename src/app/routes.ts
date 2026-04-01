import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { About } from "./About";
import { Batuku } from "./Batuku";
import { Culture } from "./Culture";
import { Events } from "./Events";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "batuku", Component: Batuku },
      { path: "culture", Component: Culture },
      { path: "events", Component: Events },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
    ],
  },
]);