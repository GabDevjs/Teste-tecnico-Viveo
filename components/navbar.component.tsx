"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { CircleUser, Command, Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@components/ui/avatar";
import { Button, buttonVariants } from "./ui/button";

const Navitens = [
  {
    label: "Dashboard",
    href: "/",
  },
];

export const Navbar = ({
  user,
}: {
  user: { image: string | null | undefined };
}) => {
  return (
    <header className="sticky w-full z-50 top-0 flex h-16 items-center backdrop-blur-sm justify-between gap-4 border-b bg-background px-4 md:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Command className="mr-2 h-6 w-6" />
      </Link>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {Navitens.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Command className="mr-2 h-6 w-6" />
            </Link>

            {Navitens.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {user?.image ? (
                <AvatarImage
                  src={user.image}
                  alt="avatar"
                  className="h-5 w-4 "
                />
              ) : (
                <CircleUser className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="gap-3">
            <DropdownMenuLabel></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Meu Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full text-start"
                )}
              >
                Sair
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
