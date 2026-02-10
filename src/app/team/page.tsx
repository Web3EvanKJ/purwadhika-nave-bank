import Image from "next/image";
import FetchTeam from "@/components/FetchTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nave Bank",
  description: "Nave bank official website",
  icons: {
    icon: "/assets/Logo-nave.png", // normal favicon
    shortcut: "/assets/Logo-nave.png", // for browser shortcuts
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Image
          src="/assets/nave.jpg"
          alt="About Nave"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent leading-snug">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The people who drive our company forward with their expertise and
            passion.
          </p>
        </div>
      </section>
      <main className="min-h-screen bg-gray-50 py-2 px-6">
        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Image
                src="/assets/nave-ceo.jpg"
                alt="CEO"
                width={200}
                height={200}
                className="w-[200px] h-[200px] mx-auto object-cover rounded-full"
              />
              <h3 className="mt-4 font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO</p>
            </div>
            <div>
              <Image
                src="/assets/nave-deputy-ceo.jpg"
                alt="Deputy CEO"
                width={200}
                height={200}
                className="w-[200px] h-[200px] mx-auto object-cover rounded-full"
              />
              <h3 className="mt-4 font-semibold">Alice Tan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deputy CEO
              </p>
            </div>
            <div>
              <Image
                src="/assets/nave-cfo.jpg"
                alt="Head of Operations"
                width={200}
                height={200}
                className="w-[200px] h-[200px] mx-auto object-cover rounded-full"
              />
              <h3 className="mt-4 font-semibold">Jackson Ron</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CFO</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
