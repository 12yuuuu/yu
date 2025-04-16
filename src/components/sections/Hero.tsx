
import { CatAvatar } from "@/components/CatAvatar";
import { CurrentlyWorkingOn } from "@/components/sections/CurrentlyWorkingOn";
import { FunFactButton } from "@/components/FunFactButton";

/**
 * Hero section component for the homepage
 * Displays the name "Yu" with animated cat avatar
 */
export function Hero() {
  return (
    <section className="relative min-h-[30vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="opacity-0 animate-slide-down">
            <CatAvatar size="lg" animated={true} />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-blue-600 dark:text-blue-400 opacity-0 animate-slide-up font-turret-road">
            Yu
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-[#4B5EAA] dark:text-[#D6E0FA] opacity-0 animate-fade-in animate-delay-300 font-share-tech-mono">
            Developer & Designer
          </p>
          
          {/* Currently Working On Widget */}
          <CurrentlyWorkingOn />
          
          {/* Fun Fact Button */}
          <FunFactButton />
        </div>
      </div>
    </section>
  );
}
