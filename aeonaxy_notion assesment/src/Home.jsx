import React from 'react';
import NavBar from './Components/NavBar';
import FAQ from './Components/FAQ';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Footer from './Components/Footer';
const Home = () => {
  return (
    <>
      <NavBar />
      <div className='bg-gray-100 p-3'>
        <FAQ />
        <div className='flex flex-col justify-around md:flex-row p-5'>
          <Sidebar />
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
