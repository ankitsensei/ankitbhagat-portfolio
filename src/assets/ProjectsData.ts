import FocusMode from "./imgs/focusModeExtension.png";
import BillSplitter from "./imgs/Bill-splitter.png";
import BookList from "./imgs/bookList.jpg";
import XClone from "./imgs/XClone.jpg";
import UrlShortener from "./imgs/UrlShortener.jpg";
import Rhythm from "./imgs/rhythm.jpg";
import theNorthFace from "./imgs/theNorthFace.jpg";

export type Category = "Full-Stack" | "Frontend" | "Extensions";

export interface Project {
  image: string;
  heading: string;
  description: string;
  techStack: string[];
  github: string;
  liveLink: string;
  category: Category;
}

export const ProjectData: Project[] = [
  {
    image: theNorthFace,
    heading: "theNorthFace",
    description:
      "A full-stack MERN e-commerce application with secure authentication, product management, shopping cart, Stripe payments, Cash on Delivery, order tracking, an admin dashboard.",
    techStack: ["ReactJs", "Nodejs", "Expressjs", "MongoDB"],
    github: "https://github.com/ankitsensei/theNorthFace",
    liveLink: "https://the-north-face-kappa.vercel.app/",
    category: "Full-Stack",
  },
  {
    image: Rhythm,
    heading: "rhythm",
    description:
      "A modern music player built with React, TypeScript, Tailwind CSS, and the YouTube Data API. Search songs, play music instantly, control playback with keyboard shortcuts, and enjoy a clean Spotify-inspired experience.",
    techStack: ["ReactJs", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/ankitsensei/rhythm",
    liveLink: "https://rhythm-topaz.vercel.app/",
    category: "Frontend",
  },
  {
    image: UrlShortener,
    heading: "url-shortener",
    description:
      "A URL shortener converts long web links into shorter, easy-to-share URLs while redirecting users to the original page.",
    techStack: ["Nodejs", "Expressjs", "MongoDB", "ReactJs"],
    github: "https://github.com/ankitsensei/url-shortener",
    liveLink: "",
    category: "Full-Stack",
  },
  {
    image: XClone,
    heading: "X-Clone",
    description:
      "A full-stack CRUD web app for X-posts collection. Users can add, edit, delete, and view X-posts with details like texts and images in one place.",
    techStack: ["Nodejs", "Expressjs", "MongoDB", "ReactJs"],
    github: "https://github.com/ankitsensei/X-Clone",
    liveLink: "https://x-clone-phi-one.vercel.app/",
    category: "Full-Stack",
  },
  {
    image: BookList,
    heading: "Book List",
    description:
      "A full-stack CRUD web app for managing a personal book collection. Users can add, edit, delete, and view books with details like title, author, publish year, and cover images in one place.",
    techStack: ["NodeJs", "ExpressJs", "MongoDB", "ReactJs"],
    github: "https://github.com/ankitsensei/book-store",
    liveLink: "https://book-store-one-lac.vercel.app/",
    category: "Full-Stack",
  },
  {
    image: FocusMode,
    heading: "Focus Mode",
    description:
      "A Chrome extension that helps improve productivity by blocking distracting websites. Users can add sites to a custom block list and stay focused on tasks without interruptions during work sessions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ankitsensei/Focus-Mode-Extension",
    liveLink: "https://github.com/ankitsensei/Focus-Mode-Extension",
    category: "Extensions",
  },
  {
    image: BillSplitter,
    heading: "Bill Splitter",
    description:
      "A bill splitter web app that tracks shared expenses and keeps a history of transactions among friends. It includes settled and unsettled sections to clearly show who has paid or still owes money.",
    techStack: ["ReactJs", "TypeScript", "Supabase"],
    github: "https://github.com/ankitsensei/Bill-Splitter-with-History",
    liveLink: "https://bill-splitter-with-history.vercel.app/",
    category: "Frontend",
  },
];
