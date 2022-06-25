import Head from 'next/head'
import Banner from '../components/UI/Banner'
import Follow from '../components/UI/Follow'
import Navbar from '../components/UI/Navbar'
import Offers from '../components/UI/Offers'
import Work from '../components/UI/Work'
import Footer from '../components/UI/Footer'
import Trending from '../components/UI/Trending'
import HowItWorks from '../components/UI/HowItWorks'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finestra</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icons/logo.svg' />
      </Head>

      <main>
        <Navbar />
        <Banner />
        <Trending />
        <HowItWorks />
        <Work />
        <Follow />
        <Footer />
      </main>
    </div>
  )
}
