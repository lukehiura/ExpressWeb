import React from 'react';
import ImageGallery from 'react-image-gallery';


const images = [
    {
      original: 'images/alienware-desktop.jpg',
      thumbnail: 'images/alienware-desktop.jpg',
      description: 'A high-performance Alienware desktop computer',
      originalHeight: '450px',
    },
    {
      original: 'images/city-in-europe.jpg',
      thumbnail: 'images/city-in-europe.jpg',
      description: 'A picturesque city in Europe with historic charm',
      originalHeight: '450px',
    },
    {
      original: 'images/da-nang-bridge.jpg',
      thumbnail: 'images/da-nang-bridge.jpg',
      description: 'An awe-inspiring bridge in Da Nang, Vietnam',
      originalHeight: '450px',
    },
    {
      original: 'images/da-nang-dragon.jpg',
      thumbnail: 'images/da-nang-dragon.jpg',
      description: 'The famous Dragon Bridge in Da Nang, Vietnam',
      originalHeight: '450px',
    },
    {
      original: 'images/davenport-santacruz.jpg',
      thumbnail: 'images/davenport-santacruz.jpg',
      description: 'A breathtaking coastal spot in Davenport, Santa Cruz',
      originalHeight: '450px',
    },
    {
      original: 'images/forest-germany.jpg',
      thumbnail: 'images/forest-germany.jpg',
      description: 'A serene forest landscape in Germany',
      originalHeight: '450px',
    },
    {
      original: 'images/kiyomizu-kyoto.jpg',
      thumbnail: 'images/kiyomizu-kyoto.jpg',
      description: 'The iconic Kiyomizu Temple in Kyoto, Japan',
      originalHeight: '450px',
    },
    {
      original: 'images/kyoto-japan-shopping.jpg',
      thumbnail: 'images/kyoto-japan-shopping.jpg',
      description: 'A vibrant shopping district in Kyoto, Japan',
      originalHeight: '450px',
    },
    {
      original: 'images/tech-symbol.png',
      thumbnail: 'images/tech-symbol.png',
      description: 'A unique tech symbol in PNG format for practicing',
      originalHeight: '450px',
    },
    {
      original: 'images/son-tra-da-nang.jpg',
      thumbnail: 'images/son-tra-da-nang.jpg',
      description: 'The serene Son Tra Temple in Da Nang, Vietnam',
      originalHeight: '450px',
    },
  ];



function GalleryPage() {
  return (
    <>
      <h2 id='Gallery-header'>Gallery</h2>
      <p id='Gallery-paragraph'>My Most Recent Travel Destinations Including Miscellaneous Tools and Icons</p>
      <article id='Gallery-article'>
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;


        
        
        
        