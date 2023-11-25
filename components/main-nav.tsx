import Link from "next/link";
import { DarkModeToggle } from "./dark-mode-toggle";
import HomeButton from "./home-button";

export default function MainNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <HomeButton />
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <span>GnuCashboard</span>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            TrueNAS Server
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home Assistant
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Router Dashboard
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}
