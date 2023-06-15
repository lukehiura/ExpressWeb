import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import products from './data/products';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import LogPage from './pages/LogPage'; // assuming this is the correct path
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import TopicsPage from './pages/TopicsPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Luke Hiura</h1>
        </header>

        <Nav />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/order" element={<OrderPage products={products} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/log" element={<LogPage />} /> 
              <Route path="/log/create" element={<CreatePage />} />
              <Route path="/log/edit/:id" element={<EditPage />} />
              <Route path="/topics" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>
            &copy; 2023 Luke Webdev. All rights reserved. This website and its content, including text, images, graphics, and other materials, are the intellectual property of Luke Webdev.
            Unauthorized use or reproduction of any part of this website is strictly prohibited. All trademarks, logos, and service marks displayed on this site are the property of their respective owners.
            The information provided on this website is for general informational purposes only and does not constitute professional advice.
            Luke Webdev does not warrant the accuracy, completeness, or reliability of any information presented on this site. By accessing and using this website,
            you agree to abide by the terms and conditions outlined in our Terms of Use and Privacy Policy.
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
