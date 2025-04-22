import Navbar from './components/Header/Navbar';
import Banner from './components/Header/Banner';
import BestLawyers from './components/Main/BestLawyers';
import Success from './components/Main/Success';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <header className="px-44">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="px-44 space-y-24">
        <BestLawyers></BestLawyers>
        <Success></Success>
      </main>
      <Footer></Footer>
    </>
  )
}
