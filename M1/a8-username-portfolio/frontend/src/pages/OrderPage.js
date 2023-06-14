import React from 'react';
import ProductRow from '../components/ProductRow.js';  
import products from '../data/products';



function OrderPage() {
    return (
      <>
        <h2>Order Now</h2>
        <article>
          <p>Use this page to make an order on products or services</p>
          <form action="/order" method="POST">
            <fieldset>
              <legend>Tell us about yourself...</legend>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" autoFocus className="required" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="required" required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" placeholder="Enter your address" className="required" required />
            </fieldset>
            <fieldset>
              <legend>Pet Products for Sale</legend>
              <table>
                <caption>Order one product</caption>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <ProductRow product={product} key={index} />
                  ))}
                </tbody>
              </table>
              <label for="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" placeholder="Enter the quantity" min="1" className="required" required />
            </fieldset>
            <fieldset>
              <legend>Delivery Instructions</legend>
              <label htmlFor="instructions">Instructions:</label>
              <textarea id="instructions" name="instructions" rows="3" placeholder="Enter any delivery instructions"></textarea>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </article>
      </>
    );
}

export default OrderPage;
