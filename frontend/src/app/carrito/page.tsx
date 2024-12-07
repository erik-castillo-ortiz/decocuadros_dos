
'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, addToCart, loading } = useCart();

  const subtotal = cart?.items.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0) || 0;

  const handleIncrease = async (productVariantId: number) => {
    await addToCart(productVariantId, 1);
  };

  const handleDecrease = async (productVariantId: number, quantity: number) => {
    if (quantity > 1) {
      await removeFromCart(productVariantId, 1);
    }
  };

  if (loading) {
    return <div className="text-center py-5">Cargando carrito...</div>;
  }

  return (
    <div className="container my-5">
      {/* Progreso del checkout */}
      <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap mb-4">
        <li className="active">
          <Link href="/carrito">Shopping Cart</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
        <li className="disabled">
          <Link href="#">Order Complete</Link>
        </li>
      </ul>

      <div className="row">
        {/* Tabla del carrito */}
        <div className="col-lg-8">
          <div className="cart-table-container mb-4">
            <table className="table table-cart">
              <thead>
                <tr>
                  <th className="thumbnail-col"></th>
                  <th className="product-col">Product</th>
                  <th className="price-col">Price</th>
                  <th className="qty-col">Quantity</th>
                  <th className="text-end">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart?.items.map((item) => (
                  <tr className="product-row" key={item.id}>
                    <td>
                      <figure className="product-image-container">
                        <Link href={`/producto/${item.slug || ''}`} className="product-image">
                          <img
                            src={item.image_url || '/assets/images/placeholder.png'}
                            alt={item.name || 'Product'}
                            width={80}
                            height={80}
                          />
                        </Link>
                        <Link
                          href="#"
                          className="btn-remove icon-cancel"
                          onClick={(e) => {
                            e.preventDefault();
                            removeFromCart(item.product_variant_id, item.quantity);
                          }}
                          title="Remove Product"
                        >
                          
                        </Link>
                      </figure>
                    </td>
                    <td className="product-col">
                      <h5 className="product-title">
                        <Link href={`/producto/${item.slug || ''}`}>{item.name || 'Product Name'}</Link>
                      </h5>
                    </td>
                    <td>${item.price?.toFixed(2) || '0.00'}</td>
                    <td>
                      <div className="product-single-qty">
                        <InputGroup className="bootstrap-touchspin bootstrap-touchspin-injected">
                          <Button
                            variant="outline-secondary"
                            className="btn-down-icon bootstrap-touchspin-down"
                            onClick={() => handleDecrease(item.product_variant_id, item.quantity)}
                          >
                            −
                          </Button>
                          <FormControl
                            type="text"
                            className="horizontal-quantity form-control"
                            value={item.quantity}
                            readOnly
                          />
                          <Button
                            variant="outline-secondary"
                            className="btn-up-icon bootstrap-touchspin-up"
                            onClick={() => handleIncrease(item.product_variant_id)}
                          >
                            +
                          </Button>
                        </InputGroup>
                      </div>
                    </td>
                    <td className="text-end">
                      <span className="subtotal-price">${(item.quantity * (item.price || 0)).toFixed(2)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} className="clearfix">
                    <div className="float-start">
                      <div className="cart-discount">
                        <form action="#">
                          <div className="input-group">
                            <input type="text" className="form-control form-control-sm" placeholder="Coupon Code" required />
                            <button className="btn btn-sm btn-dark" type="submit">Apply Coupon</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="float-end">
                      <button className="btn btn-shop btn-update-cart">Update Cart</button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Resumen del carrito */}
        <div className="col-lg-4">
          <div className="cart-summary p-3 border rounded">
            <h3 className="mb-3">CART TOTALS</h3>
            <table className="table table-totals">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>${subtotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
            <div className="checkout-methods mt-4">
              <Link href="/checkout" className="btn btn-dark btn-block w-100">
                Proceed to Checkout <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
