"use client";
import { useState } from "react";
import rajaApp from "@/assets/images/raja-rpa.png";
import clinicManagementApp from "@/assets/images/clinic-management-app.png";
import findfluence from "@/assets/images/findfluence.png";
import cinetixApp from "@/assets/images/cinetix-id.png";
import recipeMasterApp from "@/assets/images/recipe-master.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Dart from "@/assets/icons/dart.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import GoogleMaps from "@/assets/icons/google-maps.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import FlutterRiverpod from "@/assets/icons/flutter-riverpod.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioMobileProjects = [
  {
    company: "Fernand Jerico",
    year: "2024",
    title: "CineTix ID - Movie Ticketing App",
    results: [
      { title: "Movie Selection and Ticket Purchase" },
      { title: "Top-Up Balance for Seamless Payments" },
      { title: "Purchase History with Detailed Ticket Information" },
    ],
    link: "https://www.github.com/FernandJerico/cinetix_id",
    image: cinetixApp,
    tech: [Dart, Flutter, Firebase, FlutterRiverpod],
  },
  {
    company: "PT. Rajawali Permata Asia",
    year: "2024",
    title: "RAJA - Attendance and Payroll App",
    results: [
      {
        title: "Attendance feature using GPS tracking",
      },
      {
        title: "Manages and calculates employee salaries",
      },
      {
        title: "Over 10 active users daily: Ensuring\ndaily system usage",
      },
    ],
    link: "https://www.github.com/FernandJerico/",
    image: rajaApp,
    tech: [Dart, Flutter, Firebase, GoogleMaps, FlutterBloc],
  },
  {
    company: "Final Year Project",
    year: "2024",
    title: "Clinic Management App",
    results: [
      { title: "Online Consultation Reservation" },
      { title: "Push Notifications using FCM" },
      { title: "Electronic Medical Records (EMR) System" },
      { title: "Integrate with Bluetooth Printer" },
    ],
    link: "https://www.github.com/FernandJerico/clinic_management_app",
    image: clinicManagementApp,
    tech: [Dart, Flutter, Php, Laravel, Mysql, Javascript],
  },
];

const portfolioAndroidProjects = [
  {
    company: "Fernand Jerico",
    year: "2024",
    title: "Recipe Master - Recipe App",
    results: [
      { title: "Create Recipes with Video or Photos" },
      { title: "Search and Discover Recipes" },
      { title: "Explore Popular Categories" },
    ],
    link: "https://www.github.com/FernandJerico/RecipeMaster",
    image: recipeMasterApp,
    tech: [Kotlin, Firebase],
  },
];

const portfolioWebsiteProjects = [
  {
    company: "PT. Adma Digital Solusi",
    year: "2023",
    title: "FindFluence - Influencer Marketing Platform",
    results: [
      { title: "Influencer Product Requests for Reviews" },
      { title: "Brand Campaign Contracts with Influencers" },
      { title: "Two-Way Brand-Influencer Collaboration" },
      { title: "Streamlined Contract Management" },
    ],
    link: "https://www.findfluence.adslink.id/",
    image: findfluence,
    tech: [Php, Laravel, Javascript, Bootstrap, Mysql],
  },
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const getProjects = () => {
    if (activeTab === "mobile") return portfolioMobileProjects;
    if (activeTab === "android") return portfolioAndroidProjects;
    if (activeTab === "website") return portfolioWebsiteProjects;
  };

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Portfolio"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-row gap-2 md:gap-10 justify-center mt-6 md:mt-10">
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "mobile"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("mobile")}>
            Mobile
          </button>
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "android"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("android")}>
            Android
          </button>
          <button
            className={`h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold ${
              activeTab === "website"
                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
                : ""
            }`}
            onClick={() => setActiveTab("website")}>
            Website
          </button>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col gap-20">
          {getProjects()?.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span className="whitespace-pre-line">
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-row gap-2 mt-3 md:mt-3">
                    {project.tech.map((TechIcon, index) => (
                      <li key={index}>
                        <TechIcon className="w-6 h-6" alt="Tech Icon" />
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:py-2 lg:absolute lg:h-4/6 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
