import { useEffect, useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

return (
  <div>
    <SearchBar />
    <div className={css.container}>
      {photos.length > 0 && (
        <ImageGallery images={photos} openModal={openModal} />
      )}
    </div>
  </div>
);

export default App;
