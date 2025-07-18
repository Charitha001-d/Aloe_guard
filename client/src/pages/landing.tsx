import { Leaf, Camera, BrainCircuit, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AloeGuardLogo } from "@/components/aloe-guard-logo";
import { useAuth } from "@/hooks/useAuth";

export default function Landing() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-[#edfffa] min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1c8567]"></div>
      </div>
    );
  }

  if (user) {
    return null; // Will be handled by App.tsx routing
  }

  return (
    <div className="bg-[#edfffa] min-h-screen flex flex-col max-w-[393px] mx-auto">
      {/* Header with Branding */}
      <header className="pt-12 px-8 text-center">
        <AloeGuardLogo size="xl" />
        <p className="text-[#063528]/80 text-sm mt-2">AI-Powered Plant Disease Detection</p>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* Plant illustration placeholder */}
        <div className="w-64 h-64 bg-[#1c8567]/20 rounded-full flex items-center justify-center mb-8 shadow-lg">
          <Leaf className="w-24 h-24 text-[#1c8567]" />
        </div>

        <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#063528] text-2xl text-center mb-4">
          Keep Your Plants Healthy
        </h1>
        
        <p className="text-[#063528]/70 text-center mb-8 leading-relaxed">
          Instantly detect plant diseases with AI-powered analysis. Get expert recommendations and track your plant's health journey.
        </p>

        {/* Feature highlights */}
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#1c8567]/20 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-[#1c8567]" />
            </div>
            <span className="text-[#063528]/80">Instant disease detection</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#1c8567]/20 rounded-full flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-[#1c8567]" />
            </div>
            <span className="text-[#063528]/80">AI-powered analysis</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#1c8567]/20 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-[#1c8567]" />
            </div>
            <span className="text-[#063528]/80">Regional disease mapping</span>
          </div>
        </div>

        <Link href="/signup" className="w-full">
          <Button className="w-full bg-[#1c8567] hover:bg-[#063528] text-white font-medium py-4 px-6 rounded-xl shadow-lg">
            Get Started
          </Button>
        </Link>
        
        <div className="mt-6 text-center">
          <Link href="/signin">
            <Button variant="ghost" className="text-[#1c8567] hover:underline text-sm">
              Already have an account? Sign in
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
