import Image from "next/image";
import { Users, Shield, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nave Bank",
  description: "Nave bank official website",
  icons: {
    icon: "/assets/Logo-nave.png", // normal favicon
    shortcut: "/assets/Logo-nave.png", // for browser shortcuts
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
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
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about who we are, what we stand for, and how we empower
            financial success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/assets/Logo-nave.png"
            alt="nave Office"
            width={600}
            height={400}
            className=" p-10 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-600">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded with the mission to redefine modern banking, nave has been
              at the forefront of delivering innovative financial solutions. Our
              focus on transparency, security, and customer-first service has
              helped us grow into a trusted institution for individuals and
              businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl shadow">
            <Users className="mx-auto h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Customer First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We put our customers at the heart of every decision we make.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl shadow">
            <Shield className="mx-auto h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Security and trust are the foundation of our services.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl shadow">
            <TrendingUp className="mx-auto h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Innovative Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We embrace technology to create financial opportunities for all.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
