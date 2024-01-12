import React from 'react';
import { useState } from 'react';
import { CategoriesFeed } from './assets/components/Categories/categories';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './assets/components/Categories/navbar';
import Footer from './assets/components/Categories/footer';

function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <CategoriesFeed />
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
