import React from 'react';

function SentimentMeter() {
    // In a real implementation, this would be fetched from an API
    const sentiment = {
        level: 75, // 0-100
        status: 'Critical Panic',
        description: 'Twitter is convinced a delay to 2027 is coming because Rockstar changed their profile pic.',
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none md:pointer-events-auto">
            <div className="bg-black/80 backdrop-blur-xl border border-red-500/30 rounded-lg p-4 w-72 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]"></div>

                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 flex justify-between items-center relative z-10">
                    Delay Panic Meter v1.0
                    <span className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                        <span className="text-red-500 animate-pulse">LIVE</span>
                    </span>
                </h4>

                <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-3 z-10">
                    <div
                        className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all duration-1000"
                        style={{ width: `${sentiment.level}%` }}
                    ></div>
                </div>

                <div className="flex justify-between items-baseline relative z-10 border-b border-white/5 pb-2 mb-2">
                    <span className="text-lg font-bold font-heading text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">{sentiment.status}</span>
                    <span className="text-xs font-mono text-gray-400">{sentiment.level}%</span>
                </div>

                <p className="text-xs text-gray-400 leading-tight relative z-10 italic">
                    "{sentiment.description}"
                </p>
            </div>
        </div>
    );
}

export default SentimentMeter;
