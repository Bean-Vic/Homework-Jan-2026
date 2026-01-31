import { useCallback, useEffect, useState } from "react";

const DOG_API = "https://dog.ceo/api/breeds/image/random";

export default function RandomDogFetch() {
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loadDog = useCallback(async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(DOG_API);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data?.status !== "success" || typeof data?.message !== "string") {
        throw new Error("Bad API payload");
      }

      setImgUrl(data.message);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setImgUrl("");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDog();
  }, [loadDog]);

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Random Dog</h2>
          <p className="text-sm text-gray-500">Dog CEO API</p>
        </div>

        <button
          type="button"
          onClick={loadDog}
          disabled={loading}
          className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          aria-label="Get another dog"
        >
          {loading ? "Loading..." : "Get Another Dog"}
        </button>
      </div>

      <div className="mt-5">
        {errorMsg ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <div className="font-semibold">Failed to load dog</div>
            <div className="mt-1">Reason: {errorMsg}</div>
            <button
              type="button"
              onClick={loadDog}
              className="mt-3 rounded-lg bg-red-600 px-3 py-1.5 text-white"
            >
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center rounded-xl border p-10 text-gray-500">
            Loading image...
          </div>
        ) : imgUrl ? (
          <img
            src={imgUrl}
            alt="A random dog"
            className="w-full rounded-xl border object-cover"
            onError={() => setErrorMsg("Image failed to load")}
          />
        ) : (
          <div className="rounded-xl border p-10 text-gray-500">
            No image yet.
          </div>
        )}
      </div>
    </div>
  );
}
