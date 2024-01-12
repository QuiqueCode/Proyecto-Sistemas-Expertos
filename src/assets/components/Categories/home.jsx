import React from 'react';
import { useState } from 'react';
import { CategoriesFeed } from '../Categories/categories';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

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
