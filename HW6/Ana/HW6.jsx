// 1. Write a `class component`:
//     1. Passing in the initial value as props
//     2. the component should manage it’s own state.
//     3. render current state on web page
//     4. build 2 buttons to increase and decrease shown value on previous point
//     5. Extra Credit: Write an HOC which will wrap the class component and will `read/write/update` the **initial value** from `localStorage` as cached value. So next time when you open the same application, value will be initialized as last change.
//     6. Bonus: Make you App look pretty by using 3rd party CSS components like MUI/tailwindCSS
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}       


//     2. Mini shopping cart
//     1. user will be able to choose an item from a `dropdown` component to select the item 
//     2. there will be another `input` element allow user to enter quantity of item they select
//     3. create a button to allow user add selected item with desired quantity to cart
//     4. create a `table` to render purchase summary (item, price, quantity and total)
//     5. Extra Credit: allow user delete item from cart
    
//     > sample design: (for reference only, don’t necessarily need to be pixel perfect)
//     > 
    
//    ![image](https://github.com/user-attachments/assets/7dd7158e-b28d-4897-aed5-28120a12d30d)
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.5 },
  { name: 'Orange', price: 0.8 }
];

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: items[0].name,
      quantity: 1,
      cart: []
    };
  }

  handleItemChange = (e) => {
    this.setState({ selectedItem: e.target.value });
  }

  handleQuantityChange = (e) => {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  addToCart = () => {
    const item = items.find(i => i.name === this.state.selectedItem);
    const cartItem = {
      name: item.name,
      price: item.price,
      quantity: this.state.quantity,
      total: item.price * this.state.quantity
    };
    this.setState(prevState => ({
      cart: [...prevState.cart, cartItem]
    }));
  }

  removeFromCart = (index) => {
    this.setState(prevState => {
      const newCart = [...prevState.cart];
      newCart.splice(index, 1);
      return { cart: newCart };
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleItemChange} value={this.state.selectedItem}>
          {items.map(item => (
            <option key={item.name} value={item.name}>{item.name} - ${item.price}</option>
          ))}
        </select>
        <input type="number" value={this.state.quantity} onChange={this.handleQuantityChange} min="1" />
        <button onClick={this.addToCart}>Add to Cart</button>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.total}</td>
                <td><button onClick={() => this.removeFromCart(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Render components
ReactDOM.render(
  <div>
    <Counter initialValue={5} />
    <ShoppingCart />
  </div>,
  document.getElementById('root')
);  

