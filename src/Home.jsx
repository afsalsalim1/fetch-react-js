import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [photos, setPhotos] = useState([])

   useEffect(() => {fetchPhotos();}, [])

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      const data = await response.json();

      setPhotos(data.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div className="app">

      <h1>Photo Gallery</h1>
      <p className="subtitle">Explore beautiful photos</p>

      <div className="photo-grid">

        {photos?.map((photo) => (
          <div className="photo-card" key={photo?.id}>

            <div className="image-box">
              <img src={photo?.url} alt={photo?.title} />

              <span className="album">
                Album {photo?.albumId}
              </span>
            </div>

            <div className="card-content">

              <span className="photo-id">
                # {photo?.id}
              </span>

              <h3>{photo?.title}</h3>

              <button>View Photo</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Home;