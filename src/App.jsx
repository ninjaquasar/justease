import Navbar from './components/Header/Navbar';
import Banner from './components/Header/Banner';
import BestLawyers from './components/Main/BestLawyers';

export default function App() {
  return (
    <>
      <header className="px-40">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="px-40 space-y-24">
        <BestLawyers></BestLawyers>
      </main>
    </>
  )
}
