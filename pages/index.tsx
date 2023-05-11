import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppData from './Home/data'
import Navbar from './Home/Navbar'
import HomePage from './Home'

export default function Home() {

  return (
    <div>
      <Navbar/>
      <HomePage />
    </div>
  )
}
