import React from 'react';

const delays = [
    { name: 'GTA VI', days: 365, color: 'bg-pink-500', note: 'Original 2025 → Nov 2026' },
    { name: 'Cyberpunk 2077', days: 240, color: 'bg-yellow-400', note: '3 Major Delays in 2020' },
    { name: 'Duke Nukem Forever', days: 5110, color: 'bg-red-600', note: 'The Gold Standard of Failure' },
    { name: 'Skull and Bones', days: 2190, color: 'bg-blue-600', note: '6+ Delays' },
];

function DelayTracker() {
    const maxDays = Math.max(...delays.map(d => d.days));

    return (
        <div className="relative group mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <span className="text-pink-500">Delay</span> Wall of Shame
                </h2>
                <div className="space-y-8">
                    {delays.map((game) => (
                        <div key={game.name} className="relative">
                            <div className="flex justify-between text-white mb-2 items-end">
                                <span className="font-bold text-xl tracking-tight">{game.name}</span>
                                <span className="text-sm text-gray-400 font-mono">{game.note}</span>
                            </div>
                            <div className="w-full bg-gray-900/50 rounded-full h-8 overflow-hidden border border-white/5 relative">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,0,0,0.5)] ${game.name === 'GTA VI' ? 'bg-gradient-to-r from-pink-600 to-purple-600 animate-pulse' :
                                            game.name === 'Cyberpunk 2077' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                                                game.name === 'Duke Nukem Forever' ? 'bg-gradient-to-r from-red-600 to-red-800' :
                                                    'bg-gradient-to-r from-blue-600 to-blue-800'
                                        }`}
                                    style={{ width: `${(game.days / maxDays) * 100}%` }}
                                ></div>
                                {/* Bar Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="text-right text-xs font-mono text-gray-500 mt-2">
                                {game.days > 365 ? `${(game.days / 365).toFixed(1)} YEARS` : `${game.days} DAYS`}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-gray-400 text-sm mt-6 italic text-center">
                    * Comparison of estimated vs. actual delays. GTA VI is still rookie numbers compared to the legends.
                </p>
            </div>
        </div>
    );
}

export default DelayTracker;
