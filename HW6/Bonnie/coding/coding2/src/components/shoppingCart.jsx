export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold">HW6: React Fundamentals 2</h1>
          <p className="mt-2 text-gray-600">
            Class Component + HOC (localStorage) + Mini Shopping Cart
          </p>
        </div>

      
        <Counter initialValue={10} />

        <CachedCounter initialValue={5} />

        <MiniCart />
      </div>
    </div>
  );
}