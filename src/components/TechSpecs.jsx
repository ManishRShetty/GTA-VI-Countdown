import React from 'react';

function TechSpecs() {
    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 text-white">
            {/* Specs Prediction */}
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-vice-blue/50 transition-colors group">
                <h3 className="text-2xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-vice-blue to-white">
                    Projected Specs <span className="text-sm font-normal text-gray-400 ml-2">(4K/60fps)</span>
                </h3>
                <ul className="space-y-4">
                    {[
                        { label: "GPU", val: "RTX 5080 / RX 8900 XT", icon: "🎮" },
                        { label: "CPU", val: "i9-15900K / Ryzen 9 9950X", icon: "🧠" },
                        { label: "RAM", val: "32GB DDR6", icon: "💾" },
                        { label: "SSD", val: "200GB NVMe Gen 5", icon: "💿" }
                    ].map((item) => (
                        <li key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent group-hover:border-white/10 transition-colors">
                            <span className="text-gray-400 flex items-center gap-3">
                                <span>{item.icon}</span> {item.label}
                            </span>
                            <span className="font-mono text-vice-blue font-bold tracking-wider">{item.val}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Survival Meter */}
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-red-900/30 flex flex-col justify-center">
                <div className="absolute inset-0 bg-red-900/5 animate-pulse"></div>

                <h3 className="text-2xl font-bold font-heading mb-8 text-red-500 flex items-center gap-2">
                    ⚠️ "GTX 1060 Survival" Meter
                </h3>

                <div className="relative w-full h-12 bg-gray-900 rounded-full overflow-hidden shadow-inner border border-red-900/50">
                    {/* WarningStripes */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>

                    <div className="absolute top-0 bottom-0 right-0 w-[99%] bg-gradient-to-l from-red-600 via-orange-500 to-transparent shadow-[0_0_30px_rgba(220,38,38,0.8)] animate-pulse"></div>

                    <div className="absolute inset-0 flex items-center justify-end px-4">
                        <span className="font-bold text-white drop-shadow-md tracking-widest animate-bounce">CRITICAL</span>
                    </div>
                </div>

                <p className="text-center text-red-400 font-bold mt-6 text-xl animate-pulse">
                    FAILURE IMMINENT
                </p>
                <p className="text-xs text-gray-500 mt-2 text-center font-mono">
                    Calculation: The 1060 will melt before the title screen loads.
                </p>
            </div>
        </div>
    );
}

export default TechSpecs;
