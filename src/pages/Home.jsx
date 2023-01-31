import React from 'react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const letolt = async () => {
      const adat = await fetch('http://localhost:3500/food');
      const data = await adat.json();
      setFood(data);
      console.log(data);
    };

    letolt();
  }, []);

  return (
    <div>
      <ul>
        {food.map((elem, index) => (
          <li key={index}>
            <h1>{elem.name}</h1>
            <p>{elem.description}</p>
            <p>Price: {elem.price} $</p>
            <img src={elem.image} alt="kep" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
