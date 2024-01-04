import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Three = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPhotos(res.data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!loading && photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.url}
            alt={photo.title}
            width="100px"
            height="100px"
          />
        </div>
      ))}
    </div>
  );
};

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default Three;
