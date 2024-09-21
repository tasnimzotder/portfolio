import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  const start_year = 2019;
  const current_year = new Date().getFullYear();

  const social_styles = "text-xl text-muted-foreground hover:text-primary";
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/tasnimzotder/",
      icon: <FaGithub className={social_styles} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tasnimzotder/",
      icon: <FaLinkedin className={social_styles} />,
    },
    {
      name: "Twitter",
      url: "https://x.com/TasnimZotder",
      icon: <FaTwitter className={social_styles} />,
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/10416590/tasnim-zotder",
      icon: <FaStackOverflow className={social_styles} />,
    },
    {
      name: "Email",
      url: "mailto:hello@tasnimzotder.com",
      icon: <MdMail className={social_styles} />,
    },
  ];

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy;{" "}
        {start_year === current_year
          ? current_year
          : `${start_year} - ${current_year}`}{" "}
        Tasnim Zotder. All rights reserved.
      </p>
      {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy
        </Link>
      </nav> */}

      <nav className="sm:ml-auto flex gap-2 sm:gap-5">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
