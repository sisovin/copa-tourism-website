import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
          <p className="text-gray-700">
            Our mission is to provide the best travel experiences for our customers by offering personalized and high-quality services.
          </p>
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
          <p className="text-gray-700">
            Our vision is to be the leading travel agency, known for our exceptional customer service and innovative travel solutions.
          </p>
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-700">
            We have a dedicated team of travel experts who are passionate about helping you create unforgettable travel experiences.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
