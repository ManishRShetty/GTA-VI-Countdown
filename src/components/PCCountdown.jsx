import { useState, useEffect } from 'react';
import { RELEASE_DATE } from '../constants';

function PCCountdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        // Estimating PC release 18 months after initial release
        const consoleRelease = new Date(RELEASE_DATE);
        const pcRelease = new Date(consoleRelease.setMonth(consoleRelease.getMonth() + 18)).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = pcRelease - now;

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            });
        }, 1000 * 60); // Update every minute to save resources

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black rounded-lg border border-gray-800 mt-8 max-w-2xl mx-auto shadow-2xl overflow-hidden group hover:border-green-500/50 transition-colors duration-300">
            <div className="bg-gray-900 px-4 py-2 flex gap-2 items-center border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-400 font-mono">bash -- pc_release.sh</span>
            </div>
            <div className="p-8 font-mono">
                <div className="text-gray-500 text-sm mb-4">$ ./check_pc_release_date</div>
                <h3 className="text-xl font-bold text-green-400 mb-2 typewriter">
                    Estimated_Wait_Time...
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-green-500 mb-4 animate-pulse">
                    {timeLeft.days}d : {timeLeft.hours}h
                </div>
                <div className="text-xs text-green-800 border-t border-green-900/30 pt-4 mt-4">
                    <span className="text-green-600">WARNING:</span> Optimized for RTX 7090.
                </div>
            </div>
        </div>
    );
}

export default PCCountdown;
