import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import CSS3 from "@/assets/icons/css3.svg";
import Dart from "@/assets/icons/dart.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Flutter from "@/assets/icons/flutter.svg";
import Github from "@/assets/icons/github.svg";
import GoogleMaps from "@/assets/icons/google-maps.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Php from "@/assets/icons/php.svg";
import FlutterBloc from "@/assets/icons/bloc.svg";
import FlutterRiverpod from "@/assets/icons/flutter-riverpod.svg";
import Kotlin from "@/assets/icons/kotlin.svg";
import React from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map.png";
import emojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";

const toolboxItems = [
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "Dart",
    iconType: Dart,
  },
  {
    title: "Flutter",
    iconType: Flutter,
  },
  {
    title: "Flutter Bloc",
    iconType: FlutterBloc,
  },
  {
    title: "Flutter Riverpod",
    iconType: FlutterRiverpod,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "PHP",
    iconType: Php,
  },
  {
    title: "Laravel",
    iconType: Laravel,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
  {
    title: "Google Maps",
    iconType: GoogleMaps,
  },
  {
    title: "Javascript",
    iconType: Javascript,
  },
  {
    title: "MySQL",
    iconType: Mysql,
  },
  {
    title: "Kotlin",
    iconType: Kotlin,
  },
  {
    title: "React",
    iconType: React,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "70%",
    top: "45%",
  },
  {
    title: "Sleeping",
    emoji: "💤",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 ">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="I'm a mobile developer with a passion for building beautiful and intuitive user interfaces. I specialize in Flutter and Kotlin"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2">
                <Image src={bookImage} alt="Book Image" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItem items={toolboxItems} className="" />
              <ToolboxItem
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interest and hobbies beyond the digital realmn."
              className="px-6 pt-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}>
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="Map Image"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={emojiSmile} alt="Emoji Smile" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
