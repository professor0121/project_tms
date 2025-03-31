import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Login from "./login";
import HeroSection from '../components/mainHome/heroSection'
import Header from '../components/mainHome/header'
import SectionHolder from "@/components/mainHome/sectionHolder";
import HirstoricalArchetechture from '../components/mainHome/historicalArchetechture'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SectionHolder/>
      <HirstoricalArchetechture/>
      <Login/>
    </div>
  );
}
