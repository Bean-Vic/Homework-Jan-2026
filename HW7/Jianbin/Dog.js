import { useEffect, useState } from "react";

function Dog() {
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImg(data.message);
      });
  }, []);

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImg && <img src={dogImg} alt="dog" width="300" />}
    </div>
  );
}

export default Dog;
