import React from 'react';

const facts = [
    { claim: 'Enterable buildings in 70% of map', status: 'Pending', color: 'text-yellow-400' },
    { claim: 'Dual protagonists Jason and Lucia', status: 'Confirmed', color: 'text-green-400' },
    { claim: '2025 Release', status: 'Debunked', color: 'text-red-500' },
    { claim: 'Map 2x size of GTAV', status: 'Likely', color: 'text-blue-400' },
    { claim: '$150 Price Tag', status: 'Unlikely', color: 'text-gray-400' },
];

function FactCheck() {
    return (
        <div className="mt-16 max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold text-center font-heading text-white mb-8">Speculation vs. Reality</h2>
            <div className="overflow-x-auto rounded-lg border border-white/5">
                <table className="w-full text-left text-white">
                    <thead className="text-xs uppercase bg-white/5 text-gray-400 font-bold tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Rumor / Leak</th>
                            <th className="px-6 py-4 text-right">Official Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {facts.map((item) => (
                            <tr key={item.claim} className="group hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-200 group-hover:text-white transition-colors">{item.claim}</td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full border border-white/10 bg-black/20 ${item.color}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FactCheck;
