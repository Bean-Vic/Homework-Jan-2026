import React, { useState, useEffect } from "react";

export function RandomDog() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(false); 

  const fetchRandomDogImage = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setDogImage(data.message);
    } catch (err) {
      console.error("Error fetching dog image:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  function renderDogImage() {
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <img
        src={dogImage}
        alt="RandomDog"
        style={{
          maxWidth: 500,
          maxHeight: 500,
          display: "block",
          margin: "20px auto",
        }}
      />
    );
  }

  return (
    <div style={{ maxWidth: 500, margin: "100px auto", textAlign: "center" }}>
      <h2>Random Dog</h2>

      <button
        onClick={fetchRandomDogImage}
        style={{
          display: "block",
          margin: "10px auto",
        }}
      >
        {"Get Another Dog"}
      </button>

      {renderDogImage()}
    </div>
  );
}
