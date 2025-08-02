import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-5 container mx-auto mt-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-blue-600">RakaStore</span> – your go-to platform for discovering and enjoying a seamless shopping experience.
        </p>

        <div className="text-gray-700 leading-relaxed space-y-5 text-justify">
          <p>
            At RakaStore, we aim to simplify your online shopping by connecting you with a curated collection of unique and quality products. Whether you're looking for daily essentials or something special, we've built this platform to make your search effortless and enjoyable.
          </p>
          <p>
            Our mission is to empower small businesses and local sellers by giving them a powerful digital space to grow. We value simplicity, security, and satisfaction – offering features like smooth browsing, secure transactions, and fast support.
          </p>
          <p>
            Have questions or need help? Our dedicated customer service team is always ready to assist you!
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            Contact Customer Support
          </Link>
        </div>
      </div>
    </section>
  );
}
