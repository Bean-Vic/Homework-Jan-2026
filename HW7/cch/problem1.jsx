import { useEffect, useState } from "react";

export default function Dog() {
  const [imageUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!res.ok) {
        throw new Error("Failed to fetch dog img");
      }
      const data = await res.json();
      setImgUrl(data.message);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);
  return (
    <div>
      <h2>Random Dog 🐶</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {imageUrl && !loading && (
        <img src={imageUrl} alt="Random dog" width="300" />
      )}

      <br />
      <button onClick={fetchDog} disabled={loading}>
        Get another dog
      </button>
    </div>
  );
}
