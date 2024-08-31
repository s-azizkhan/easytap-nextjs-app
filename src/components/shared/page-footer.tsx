import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FaApple,
  FaDiscord,
  FaGooglePlay,
  FaPlay,
  FaReact,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "/pricing" },
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];

export default function PageFooter() {
  return (
    <section className="py-6">
      <div className="container">
        <footer className="bg-background rounded-xl p-5 lg:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-2xl font-bold">EasyTap</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="text-lg font-medium">
                Extend your hospitality like never before.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex rounded-lg bg-primary p-2.5 justify-center items-center"
                >
                  <FaApple className="size-7 text-background" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex rounded-lg bg-primary p-2.5 justify-center items-center"
                >
                  <FaGooglePlay className="size-7 text-background" />
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <Link href="#">Term of Services</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <h3 className="mb-4 mt-8 font-bold">Social</h3>
              <ul className="flex space-x-6 text-muted-foreground items-center">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaDiscord className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaRedditAlien className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTelegramPlane className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-14" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EasyTap. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
