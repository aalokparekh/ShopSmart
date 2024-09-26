import React from 'react';
import { useSelector } from 'react-redux';

const PaymentGateway = () => {
    const state = useSelector((state) => state);

    const calculateSubtotal = () => {
        return state.reduce((acc, item) => acc + item.qty * item.price, 0);
    };

    const handlePayment = (event) => {
        event.preventDefault();
        // Implement payment processing logic here (e.g., API call)
        alert("Payment processed!");
    };

    return (
        <div className="container my-5">
            <h2>Payment Gateway</h2>
            <h4>Order Summary</h4>
            {state.map(item => (
                <div key={item.id} className="my-2">
                    <p>{item.title} - {item.qty} X ${item.price} = ${item.qty * item.price}</p>
                </div>
            ))}
            <h4 className="fw-bold">Subtotal: ${calculateSubtotal()}</h4>

            <form onSubmit={handlePayment} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input type="number" className="form-control" id="cardNumber" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="expiry" className="form-label">Expiry Date</label>
                    <input type="date" className="form-control" id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" required />
                </div>
                <button type="submit" className="btn btn-primary">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentGateway;
