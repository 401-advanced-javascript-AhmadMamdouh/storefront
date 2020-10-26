import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories.js';
import Products from './components/products.js';


function App() {
  return (
    <>
      <Header />
      <main style={{height: 150 + 'vh'}}>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App;