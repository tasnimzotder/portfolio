import Link from "next/link";
import { FaCodeBranch, FaCodeCommit } from "react-icons/fa6";
import SwitchTheme from "../theme/switch_theme";

const NavBar = () => {
  return (
    <header className="flex items-center justify-around px-4 py-3 bg-muted">
      <Link href="/" className="text-xl" prefetch={true}>
        Tasnim Zotder
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-muted-foreground hover:underline"
          prefetch={true}
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="text-muted-foreground hover:underline"
          prefetch={true}
        >
          Posts
        </Link>
        <Link
          href="https://github.com/tasnimzotder"
          className="text-muted-foreground hover:underline"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaCodeCommit className="inline-block" />
        </Link>

        <SwitchTheme />
      </nav>
    </header>
  );
};

export default NavBar;
