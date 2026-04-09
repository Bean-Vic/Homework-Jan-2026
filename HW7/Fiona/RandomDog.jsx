// HW7- Random dog image fetch - RandomDog.jsx
import "./randomDog.css";
import {useEffect, useState} from "react";

export default function RandomDogImageFetch () {
    //set useEffect initial state for image, loading status and error handling
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    //fetch image function
    async function fetchDogImage() {
        //try + catch + finally --> Error handle. make sure loading always close at the end
        try {
            setIsLoading(true);
            setErrorMsg("");
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            //handle server error 404/500
            if (!res.ok) {
                throw new Error (`Request fail. Please try again.`);
            }

            const data = await res.json();
            setImageUrl(data.message);

        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message: "Oops! Something went wrong!");
            setImageUrl("")
        } finally {
            setIsLoading(false);
        }
    }

    //useEffect
    useEffect(
        () => {fetchDogImage()}, []
    );

    //render
    return (
        <section className="hw7-card" aria-label="Random Dog">
            <h2 className="hw7-title">Random Dog Image Fetch</h2>

            <div className="hw7-imageContainer">
                {/* 1. when API call, show loading*/}
                {isLoading && <p className="hw7-image">Loading...</p>}

                {/* 2. if request fail, show error message */}
                {!isLoading && errorMsg && (
                    <p className="hw7-error" role="alert">{errorMsg}</p>
                )}
                {/* 3. when request passed and has a valid url, show image */}
                {!isLoading && !errorMsg && imageUrl && (
                    <img className="hw7-dogImg" src={imageUrl} alt="Ramdon Dog Image"/>
                )}

            </div>

            <button className="hw7-btn" onClick={fetchDogImage} disabled={isLoading}>
                Get Another Dog
            </button>

        </section>
    );
}