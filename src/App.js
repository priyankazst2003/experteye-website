import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      {/* We'll add more sections here later */}
    </div>
  );
}

export default App;