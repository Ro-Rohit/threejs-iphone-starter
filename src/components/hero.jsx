import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'
const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero-title', {
            opacity: 1,
            delay: 1.5,
            ease: 'power1.in',
        })

        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,
        })
    }, [])

    const [videoSrc, setVideoSrc] = useState(
        window.innerHeight > 760 ? smallHeroVideo : heroVideo
    )
    const handleVideoSrcSet = () => {
        setVideoSrc(window.innerHeight > 760 ? smallHeroVideo : heroVideo)
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => window.removeEventListener('resize', handleVideoSrcSet)
    }, [])

    return (
        <section className="w-full nav-height bg-black">
            <div className="h-5/6 w-full flex-col flex-center">
                <p id="hero-title" className="hero-title">
                    iPhone 15 Pro
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}
                        className=" pointer-events-none"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id="cta"
                className=" opacity-0 translate-y-20 flex flex-col items-center"
            >
                <a href="#highlights" className="btn">
                    Buy
                </a>
                <p className="font-normal text-white text-xl">
                    From $199/month or $999
                </p>
            </div>
        </section>
    )
}

export default Hero
