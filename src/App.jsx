import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import RecentSearches from './components/RecentSearches';
import MostPopularDestination from './components/MostPopularDestination';
import SearchSection from './components/SearchSection';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <NavBar/>
      <SearchSection/>
      <RecentSearches/>
      <MostPopularDestination />
      <RecommendedHolidays/>
      <PopularStays/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
