import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Mypage = () => {
  const { requestId } = useParams(); // دریافت requestId از آدرس
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await axios.get(`/v1/api/neka/payments/irankish/verify/${requestId}`);
        setPaymentStatus(response.data);
      } catch (error) {
        setPaymentStatus({ success: false, message: 'Error fetching payment status.' });
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, [requestId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {paymentStatus?.success ? (
        <div>
          <h2>Payment Successful</h2>
          <p>Transaction ID: {paymentStatus.transactionId}</p>
          <p>Amount: {paymentStatus.amount}</p>
        </div>
      ) : (
        <div>
          <h2>Payment Failed</h2>
          <p>{paymentStatus?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Mypage;
