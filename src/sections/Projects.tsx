import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
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

const portfolioProjects = [
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
    image: darkSaasLandingPage,
    tech: [Dart, Flutter, Firebase, FlutterRiverpod],
  },
  {
    company: "PT. Rajawali Permata Asia",
    year: "2024",
    title: "RAJA - Attendance & Payroll App",
    results: [
      {
        title:
          "Attendance: Implemented an attendance feature using GPS tracking",
      },
      {
        title: "Payroll: Feature that manages and calculates employee salaries",
      },
      {
        title: "Over 10 active users daily: Ensuring daily system usage",
      },
    ],
    link: "https://www.github.com/FernandJerico/",
    image: darkSaasLandingPage,
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
    image: aiStartupLandingPage,
    tech: [Dart, Flutter, Php, Laravel, Mysql, Javascript],
  },
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
    image: lightSaasLandingPage,
    tech: [Php, Laravel, Javascript, Bootstrap, Mysql],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            My Portofolio
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
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
                        <span>{result.title}</span>
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
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:py-2 lg:absolute lg:h-3/5 lg:w-auto lg:max-w-none"
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
