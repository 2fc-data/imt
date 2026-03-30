import { Navbar } from "@/components/Navbar.component";
import { Location } from "@/components/Location.component";
import { Footer } from "@/components/Footer.component";
import { Schedule } from "@/components/Schedule.component";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16 lg:pt-20">{children}</main>
    <Location />
    <Schedule />
    <Footer />
  </div>
);
