import { useState } from 'react';

const Upload = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const feldolgoz = (e) => {
    e.preventDefault();
    const feltolt = async () => {
      const response = await fetch('http://localhost:3500/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, image }),
      });
      console.log(response);
    };

    feltolt();
  };

  return (
    <div>
      <form method="post">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={(e) => feldolgoz(e)}>Feldolgoz</button>
      </form>
    </div>
  );
};

export default Upload;
