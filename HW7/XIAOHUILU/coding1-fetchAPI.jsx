import React, {useState, useEffect, useCallback }from "react";

export const FetchDog = () => {
    const [dogUrl, setDogUrl] = useState(""); // store url 
    const [loading, setLoading] = useState(false); // loading state
    const [error, setError] = useState(null); // error state

    const fetchDog = useCallback(async () => {
        setLoading(true);
        setError(null);

        try{
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            if(!res.ok) {
                throw new Error('Request failed: ${res.status} ${res.statusText}');
            }
            const data = await res.json();
            if (data.status !== "success" || !data.message) {
                throw new Error("API returned an unexpected response.");
            }
            setDogUrl(data.message);
        }catch(err) {
            setDogUrl("");
            setError(err?.message || "Something went wrong.")
        } finally{
            setLoading(false);
        }
    }, []);
    // component one time render get a picture.
    useEffect(() => {
        fetchDog();
        }, [fetchDog]);

    return (
        <div>
            <h1>Randomly Fetch a dog image</h1>
            <button onClick={fetchDog} disabled={loading}>
                {loading ? "Loading..." : "Get Another Dog"}
            </button>
            {loading && <p>Loading a cute dog...</p>}
            {error && (
                <p style={{ color: "red" }}>
                Error: {error}{" "}
                <button onClick={fetchDog} disabled={loading}>
                    Retry
                </button>
                </p>
            )}
            {!loading && !error && dogUrl && (
                <img
                src={dogUrl}
                alt="Random dog"
                style={{ width: 320, height: "auto", marginTop: 12, borderRadius: 12 }}
                />
            )}
        </div>
    )
} 