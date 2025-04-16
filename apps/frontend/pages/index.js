import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <h1>Welcome to Copa Tourism</h1>
        <p>Explore the best destinations and travel packages with us.</p>
      </main>
      <Footer />
    </div>
  );
}
