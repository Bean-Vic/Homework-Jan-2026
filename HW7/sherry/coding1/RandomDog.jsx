import { useState } from "react";

export default function RandomDog() {
  const random_URL = "https://dog.ceo/api/breeds/image/random";
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [img, setImg] = useState("");

  const fetchData = async () => {
    try {
      setStatus("loading");
      const response = await fetch(random_URL);
      if (!response.ok) {
        throw new Error("API Fetched Error");
      }
      const data = await response.json();
      if (data.status !== "success") {
        throw new Error("Status Error");
      }
      setImg(data.message);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div>
      <h1>Random Dog</h1>
      <div>
        <button onClick={fetchData}>Get Another Dog</button>
      </div>
      <br />
      <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p style={{ color: "red" }}>Failed</p>}
        {status === "success" && <img src={img} alt="Random Dog" width={300} />}
      </div>
    </div>
  );
}
