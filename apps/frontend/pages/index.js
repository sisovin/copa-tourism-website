import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Welcome to Copa Tourism</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Explore the best destinations and travel packages with us.</p>
      </main>
      <Footer />
    </div>
  );
}
