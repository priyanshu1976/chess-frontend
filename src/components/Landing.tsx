import React from "react";

function Landing() {
  return (
    <div className="w-screen h-fit lg:h-screen  flex justify-center items-center bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)] flex items-center ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Master the Game of <span className="text-blue-500">Chess</span>{" "}
              Online
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Challenge players worldwide, improve your skills, and climb the
              rankings. Join our thriving chess community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-lg font-semibold animate__animated animate__fadeIn">
                Play Now
              </button>
              <button className="px-8 py-4 text-white rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors text-lg font-semibold animate__animated animate__fadeIn">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-8 text-gray-300">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-500">10K+</span>
                <span>Active Players</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-500">1M+</span>
                <span>Games Played</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-500">50+</span>
                <span>Grandmasters</span>
              </div>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="aspect-square bg-neutral-800 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="relative z-10 h-full">
                <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
