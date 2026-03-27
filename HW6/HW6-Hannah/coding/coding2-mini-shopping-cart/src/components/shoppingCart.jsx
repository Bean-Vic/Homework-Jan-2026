import React, { useState } from "react";
import {PRODUCTS, currCart} from "../constant";


export default function ShoppingCart(){
    const [selectedId, setSelectedId] = useState(PRODUCTS[0].id);
    const [qty, setQty] = useState(1);
    const [cart, setCart] = useState({});

    const onAdd = () => {
        const n = Number(qty);

        if (!Number.isInteger(n) || n <= 0){
            return "Enter a valid positive integer quantity."
        }

        setCart((prev) => {
            const existing = prev[selectedId] ?? 0;
            return {...prev, [selectedId]: existing + n};
        })
    }

    const onRemove = (productId) => {
        setCart((prev) => {
            const newCart = {...prev};
            delete newCart[productId];
            return newCart;
        })
    }

    const cartRows= Object.entries(cart).map(([productId, quantity]) => {
        const product = PRODUCTS.find((p) => p.id === productId);

        return{
            id: productId,
            name: product.name,
            price: product.price,
            quantity,
            lineTotal: product.price * quantity,
        };
    });

    const total = cartRows.reduce((sum, row) => sum + row.lineTotal, 0);

    console.log(cart);
    console.log(cartRows);
    return(
        <>
            <div className="min-h-screen bg-slate-50 p-6">
                <div className="mx-auto max-w-sm">
                    <h1 className="text-center text-4xl font-extrabold text-slate-800">
                        Mini Shopping Cart
                    </h1>

                    <div className="mt-8 rounded-2xl border border-slate-800 bg-white shadow-sm">
                        <div className="p-6">
                            <div className="grid gap-2 grid-cols-12">
                               
                                <div className="col-span-6 w-full rounded-sm border border-slate-800">
                                    <select value={selectedId}
                                    onChange={(e) => setSelectedId(e.target.value)}
                                    className="w-full px-2 py-auto"
                                    >
                                        {PRODUCTS.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {p.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="col-span-3 ">
                                    <input type="number" min="1" step="1" value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="w-full rounded-sm border border-slate-800 px-2"
                                    />
                                </div>

                                <div className="col-span-3  text-center">
                                    <button onClick={onAdd}
                                    className="w-full rounded-sm border border-slate-800 "
                                    >
                                        Add
                                    </button>
                                </div>

                            </div>
                        </div>
                    
                    
                        <div className="border-t border-slate-800"/>

                        <div className="p-6">
                            <h2 className="text-xl font-semibold font-bold">Cart</h2>
                            
                            {cartRows.length === 0 ? 
                            (<div> </div>):
                            (
                                <div className="mt-4 space-y-4">
                                    {cartRows.map((row) => (
                                        <div key={row.id} className="grid grid-cols-12 items-center gap-3">
                                            <div className="col-span-6 text-l">
                                                {row.name} x {row.quantity}
                                            </div>

                                            <div className="col-span-3 text-right">
                                                ${row.lineTotal.toFixed(2)}
                                            </div>

                                            <div className="col-span-3 text-left">
                                                <button
                                                onClick={() => {onRemove(row.id)}}
                                                className="border rounded-sm border-slate-800 px-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="border-t border-slate-800"/>

                        <div className="flex items-center justify-between px-6 py-6">
                            <div className="text-l font-semibold">Total:</div>
                            <div className="text-l font-semibold">${total.toFixed(2)}</div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}