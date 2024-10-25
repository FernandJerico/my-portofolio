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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import emojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

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
  },
  {
    title: "Badminton",
    emoji: "🏸",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Sleeping",
    emoji: "💤",
  },
  {
    title: "Movies",
    emoji: "🎥",
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
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Image" />
            </div>
          </Card>
          <Card className="max-w-md mt-16 md:mt-24">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
            />
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interest and hobbies beyond the digital realmn."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="Map Image" />
            <Image src={emojiSmile} alt="Emoji Smile" />
          </Card>
        </div>
      </div>
    </div>
  );
};
