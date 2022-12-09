import React from 'react'
import './home-elements.scss'
import Featured from '../../Components/Featured/Featured'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import PropertyList from '../../Components/PropertyList/PropertyList'
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Home guest love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </>
    )
}

export default Home