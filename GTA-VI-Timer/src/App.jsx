import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const releaseDate = new Date('May 26, 2026').getTime();  // Updated release date
      const now = new Date().getTime();
      const difference = releaseDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white p-4">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://www.gtavice.net/content/images/xxl/rockstar-games-official-jason-and-lucia-artwork-full.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.3)',
          width: '100vw',
          height: '100vh'
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-pink-500/50 to-purple-600/50"
        style={{
          width: '100vw',
          height: '100vh'
        }}
      />

      {/* Content */}
      <div className="z-10 w-full max-w-6xl mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Grand_Theft_Auto_VI_logo_%28with_gradient%29.svg/1024px-Grand_Theft_Auto_VI_logo_%28with_gradient%29.svg.png?20231209032818" 
            alt="GTA VI Logo" 
            className="w-64 md:w-96 animate-pulse-slow"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 text-transparent bg-clip-text bg-white drop-shadow-lg">
          Countdown
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" }
          ].map(({ value, label }) => (
            <div key={label} className="group">
              <div className="bg-black/30 backdrop-blur-xl rounded-lg p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-4xl md:text-6xl font-bold text-pink-300 group-hover:text-pink-400 transition-colors">
                  {value}
                </div>
                <div className="text-lg text-purple-200">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-purple-200 text-white">
            Release Date: May 26, 2026  {/* Updated release date */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App
