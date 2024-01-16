import React from 'react';
import { useState } from 'react';
import { CategoriesFeed } from '../../assets/components/Categories/categories';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../navbar/navbarX';
import Footer from '../footer/footer';

function Home() {
  return (

      <div>
        <Navbar />
        <CategoriesFeed />
        <Footer />
      </div>

  );
}

export default Home;
