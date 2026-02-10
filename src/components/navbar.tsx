import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SVGProps } from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="mr-6 lg:flex" prefetch={false}>
                <Image
                  src="/assets/Logo-nave.png"
                  alt="Nave Logo"
                  width={150}
                  height={75}
                  priority
                  className="rounded-lg"
                />
                <span className="sr-only">Nave Inc</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div>
            <div className="grid gap-2 px-6 pb-6">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex w-full items-center py-2 text-lg font-semibold text-green-600"
                  prefetch={false}
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/about-us"
                  className="flex w-full items-center py-2 text-lg font-semibold text-green-600"
                  prefetch={false}
                >
                  About
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/service"
                  className="flex w-full items-center py-2 text-lg font-semibold text-green-600"
                  prefetch={false}
                >
                  Services
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/team"
                  className="flex w-full items-center py-2 text-lg font-semibold text-green-600"
                  prefetch={false}
                >
                  Team
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center py-2 text-lg font-semibold text-white bg-green-600 rounded-md mt-4"
                  prefetch={false}
                >
                  Login
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 lg:flex" prefetch={false}>
        <Image
          src="/assets/Logo-nave.png"
          alt="Nave Logo"
          width={150}
          height={75}
          priority
          className="rounded-lg m-3"
        />{" "}
        <span className="sr-only">Nave Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors text-green-600 hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700 focus:outline-none disabled:pointer-events-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 "
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700 focus:outline-none disabled:pointer-events-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 text-green-600"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/service"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700 focus:outline-none disabled:pointer-events-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 text-green-600"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/team"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-green-700 focus:bg-gray-100 focus:text-green-700 focus:outline-none disabled:pointer-events-none  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 text-green-600"
          prefetch={false}
        >
          Team
        </Link>
        <Link
          href="/login"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
