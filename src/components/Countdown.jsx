import { useState, useEffect } from 'react'
import { RELEASE_DATE } from '../constants'

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const releaseDate = new Date(RELEASE_DATE).getTime();
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
        <div className="space-y-8">
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
                    <div key={label} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-black/50 backdrop-blur-2xl rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-200 group-hover:from-white group-hover:to-pink-400 transition-colors">
                                {value}
                            </div>
                            <div className="text-lg text-purple-200 mt-2 font-medium tracking-wide">
                                {label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-xl text-purple-200 text-white">
                    Release Date: {RELEASE_DATE}
                </p>
            </div>
        </div>
    );
}

export default Countdown;
