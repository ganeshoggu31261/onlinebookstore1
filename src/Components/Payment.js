import React, { useState } from 'react';
import axios from 'axios';
import Razorpay from 'razorpay-checkout';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [cardDetails, setCardDetails] = useState({
        cardnum: '',
        ownername: '',
        expdate: '',
        cvv: ''
    });
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.id]: e.target.value });
    };

    const handleCancel = () => {
        navigate('/displayartwork');
    };

    const handlePayment = async () => {
        // Assuming you want to use Razorpay for payment
        const options = {
            key: "rzp_test_rt02HZsuR5f69V",
            amount: 1250 * 100, // Convert amount to paisa (if it's in rupees)
            currency: "INR",
            name: "Book Store",
            description: "Payment for artwork",
            image: "https://your-logo-url.com/logo.png", // Your logo URL
            handler: function (response) {
                // Payment success callback
                alert("Payment successful");
                // Here you can handle the payment success logic, such as updating the database, etc.
            },
            prefill: {
                name: cardDetails.ownername,
                email: "onlinebookstore@gmail.com",
                contact: "7412589631"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "8e3969"
            }
        };
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <form className='payment'>
                <div className='refer' style={{ textAlign: "center", fontSize: "25px", fontWeight: "600" }}>Payment</div>
                <input className='cpi' id='cardnum' onChange={handleChange} value={cardDetails.cardnum} type='number' placeholder='Enter Card Number' required />
                <input className='cpi' id='ownername' onChange={handleChange} value={cardDetails.ownername} type='text' placeholder='Enter Cardholder Name' required />
                <div className='inner'>
                    <input className='exp' id='expdate' onChange={handleChange} value={cardDetails.expdate} type='date' required />
                    <input className='cvv' id='cvv' onChange={handleChange} value={cardDetails.cvv} type='number' placeholder='cvv' required />
                </div>
                <button className='pay' type='button' onClick={handlePayment}>Pay</button>
                <button className='cancel' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Payment;