import React from "react";
//drop down list product array
const PRODUCTS = [
    { id: "001", name: "Dog Treat", price: 15 },
    { id: "002", name: "Dog Toy", price: 10 },
    { id: "003", name: "Dog Bed", price: 50 },
];

//class component and event handler
class MiniShoppingCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: PRODUCTS[0].id,
            quantity: 1,
            cart: [],
        };
    }

    handleItemChange(e) {
        this.setState({
            selectedId: e.target.value,
        });
    }

    handleQtyChange(e) {
        const value = Number(e.target.value);
        if (Number.isNaN(value)) return;

        this.setState({
            quantity: value,
        });
    }


    handleAdd() {
        const { selectedId, quantity, cart } = this.state;

        const product = PRODUCTS.find((p) => p.id === selectedId);
        if (!product) return;

        if (!Number.isFinite(quantity) || quantity <= 0) return;

        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
        };

        this.setState({
            cart: [...cart, newItem],
            quantity: 1,
        });
    }

    handleRemove(id) {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((item) => item.id !== id),
        }));
    }


    render() {
        //calculate total in cart
        const total = this.state.cart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        return (
            <div className="cart-card">
                <h2 >Mini Shopping Cart</h2>

                <div className="cart-add">
                        {/*dropdown list*/}
                        <select
                            value={this.state.selectedId}
                            onChange={this.handleItemChange.bind(this)}
                        >
                            <option value="001">Dog Treat</option>
                            <option value="002">Dog Toy</option>
                            <option value="003">Dog Bed</option>
                        </select>
                        {/*input quantity and add to cart*/}
                        <input
                            type="text"
                            value={this.state.quantity}
                            onChange={this.handleQtyChange.bind(this)}
                        />
                        <button onClick={this.handleAdd.bind(this)}>Add</button>
                </div>

                {/*Display item in cart and price calculation*/}
                <h3>Cart</h3>
                <ul>
                    {this.state.cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span className="cart-name">
                            {item.name} x {item.quantity}
                            </span>
                            <span className="cart-price">
                            ${item.price * item.quantity}
                            </span>
                            <button onClick={() => this.handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>

                <h3>Total: ${total}</h3>


            </div>
        );
    }

}

export default MiniShoppingCart;
