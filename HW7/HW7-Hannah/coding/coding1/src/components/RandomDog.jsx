import React, {useState, useEffect} from "react";

export default function RandomDog(){
    const[imgUrl, setImgUrl] = useState("");
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState("");

    async function fetchDog() {
        setLoading(true);
        setError("");

        try{
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            if (!res.ok){
                throw new Error (`HTTP error: ${res.status}`);
            }
            const data = await res.json();

            if (data.status !== "success" || typeof data.message !== "string"){
                throw new Error (`Unexpected API response`);
            }

            setImgUrl(data.message);
        }catch (err){
            setError(err?.message || "Failed to load dog image");
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDog();   
    },[]);

    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-5 border-b">
                        <h1 className="text-xl font-bold text-grey-900">Random Dog</h1>
                    </div>

                    <div className="p-5">
                        {loading && (<div className="text-center text-gray-600 py-10">Loading...
                            </div>)}
                        {!loading && error && (<div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3">
                            {error}</div>)}
                        {!loading && !error && imgUrl && (
                            <img src={imgUrl}  alt="random dog" className="w-full h-72 object-cover rounded-xl" />
                        )}
                        
                        <button 
                        onClick={fetchDog}
                        disabled={loading}
                        className="mt-5 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl
                        hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Fetching..." : "Get Another Dog"}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )


}