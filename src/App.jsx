import Hero from './components/hero'
import Hightlights from './components/highlights'
import Navbar from './components/navbar'
import Model from './components/model'
import Features from './components/features'
import HowItWorks from './components/how-its-works'
import Footer from './components/footer'

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Hightlights />
            <Model />
            <Features />
            <HowItWorks />
            <Footer />
        </main>
    )
}

export default App
