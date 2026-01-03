import './App.css'
import Countdown from './components/Countdown'
import DelayTracker from './components/DelayTracker'
import PCCountdown from './components/PCCountdown'
import TechSpecs from './components/TechSpecs'
import Alternatives from './components/Alternatives'
import FactCheck from './components/FactCheck'
import SentimentMeter from './components/SentimentMeter'

function App() {
  return (
    <div className="min-h-screen relative flex flex-col text-white">
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

      {/* Main Content Scrollable Area */}
      <div className="z-10 w-full max-w-7xl mx-auto px-4 py-12 relative">
        <Countdown />

        <div className="space-y-24 mt-24">
          <PCCountdown />
          <DelayTracker />
          <TechSpecs />
          <Alternatives />
          <FactCheck />
        </div>

        <div className="h-24"></div> {/* Bottom Spacer */}
      </div>

      <SentimentMeter />
    </div>
  );
}

export default App
