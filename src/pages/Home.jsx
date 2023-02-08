import React from 'react'
import CarSection from '../components/Section/CarSection'
import PodcastsSection from '../components/Section/PodcastsSection'
import SectionSteamHome from '../components/Section/SectionSteamHome'
import SectionTopStory from '../components/Section/SectionTopStory'
import TechSection from '../components/Section/TechSection'
import TravelSection from '../components/Section/TravelSection'

function Home() {
    return (
        <div className='w-100 h-auto'>
            <SectionTopStory />
            <SectionSteamHome />
            <PodcastsSection />
            <TechSection />
            <TravelSection />
            <CarSection />
        </div>
    )
}

export default Home