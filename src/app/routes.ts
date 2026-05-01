import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Root } from "./Root";

const Home    = lazy(() => import("./Home").then(m => ({ default: m.Home })));
const About   = lazy(() => import("./About").then(m => ({ default: m.About })));
const Batuku  = lazy(() => import("./Batuku").then(m => ({ default: m.Batuku })));
const Culture = lazy(() => import("./Culture").then(m => ({ default: m.Culture })));
const Events  = lazy(() => import("./Events").then(m => ({ default: m.Events })));
const Gallery = lazy(() => import("./Gallery").then(m => ({ default: m.Gallery })));
const Contact        = lazy(() => import("./Contact").then(m => ({ default: m.Contact })));
const MentionsLegales = lazy(() => import("./MentionsLegales").then(m => ({ default: m.MentionsLegales })));
const NotFound       = lazy(() => import("./NotFound").then(m => ({ default: m.NotFound })));

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
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "*", Component: NotFound },
    ],
  },
]);
