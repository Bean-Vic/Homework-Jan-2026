import React, { useEffect, useState, useCallback } from "react";

const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  const [dogUrl, setDogUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDog = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(DOG_API_URL);

      // fetch does not throw error for 404/500, so manual checks
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      // Verify the API return structure
      if (data?.status !== "success" || typeof data?.message !== "string") {
        throw new Error("Unexpected API response format.");
      }

      setDogUrl(data.message);
    } catch (err) {
      setDogUrl("");
      setError(err?.message || "Failed to fetch dog image.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDog();
  }, [fetchDog]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 text-center">
            What the Dog Doin
          </h1>
          <p className="mt-2 text-sm text-slate-600 text-center">
            Click the button to fetch a new random dog image.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 flex flex-col items-center">
          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
              <p className="text-sm text-slate-700">Loading...</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Image */}
          {!loading && !error && dogUrl && (
            <img
              src={dogUrl}
              alt="Random dog"
              className="w-[360px] max-w-full h-auto rounded-xl border border-slate-200"
            />
          )}

          {/* Button */}
          <button
            onClick={fetchDog}
            disabled={loading}
            className="
            w-full rounded-xl px-6 py-3 text-lg font-semibold
            bg-slate-900 text-white
            hover:bg-slate-800
            disabled:opacity-60 disabled:cursor-not-allowed
            transition
          "
          >
            {loading ? "Fetching..." : "Get Another Dog"}
          </button>

          {/* Small note */}
          <p className="text-xs text-slate-500 text-center">
            Data source: dog.ceo API
          </p>
        </div>
      </div>
    </div>
  );
}
