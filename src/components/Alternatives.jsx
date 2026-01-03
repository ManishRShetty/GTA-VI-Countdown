import React from 'react';

const games = [
    { title: 'Spider-Man 2 (PC)', date: 'Jan 30, 2026', status: 'Confirmed', color: 'text-blue-400' },
    { title: 'Pragmata', date: 'April 24, 2026', status: 'Likely Delayed', color: 'text-yellow-400' },
    { title: 'Phantom Blade Zero', date: 'Sept 9, 2026', status: 'On Schedule', color: 'text-green-400' },
    { title: 'The Elder Scrolls VI', date: '2026ish?', status: 'In Dreams', color: 'text-purple-400' },
];

function Alternatives() {
    return (
        <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-8 font-heading">While You Wait <span className="text-gray-500 text-lg ml-2">(2026)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                    <div key={game.title} className="group relative bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-vice-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                        {/* Glow Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-vice-blue transition-colors">{game.title}</h4>
                            <div className="text-sm text-gray-400 mb-4 font-mono">{game.date}</div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/5 ${game.color} border border-white/10`}>
                                {game.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Alternatives;
