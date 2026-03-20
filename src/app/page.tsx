import { siteConfig } from "@/data/site-config";
import { LandingPage } from "@/components/landing/landing-page";

export default function Home() {
  return <LandingPage config={siteConfig} />;
}

