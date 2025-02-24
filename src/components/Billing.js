import React, { useState } from "react";

const Billing = () => {
  // State for customer details
  const [customer, setCustomer] = useState({
    name: "Shivangi Mishra",
    invoiceNo: "#INV-20241025",
    billingDate: "25th Oct 2024",
    amountDue: "₹5000",
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // State for transaction history
  const [transactions, setTransactions] = useState([
    { id: "#TXN12345", date: "24th Oct 2024", amount: "₹2000", status: "Paid" },
    { id: "#TXN67890", date: "20th Oct 2024", amount: "₹3000", status: "Pending" },
  ]);

  // Handle customer detail changes
  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="billing-container">
      {/* Billing Header */}
      <h1 className="billing-title">Billing & Payments</h1>

      {/* Editable Invoice Details */}
      <div className="billing-summary">
        <h2>Invoice Details</h2>
        <label>Customer:</label>
        {isEditing ? (
          <input type="text" name="name" value={customer.name} onChange={handleCustomerChange} />
        ) : (
          <p><strong>{customer.name}</strong></p>
        )}

        <label>Invoice No:</label>
        {isEditing ? (
          <input type="text" name="invoiceNo" value={customer.invoiceNo} onChange={handleCustomerChange} />
        ) : (
          <p>{customer.invoiceNo}</p>
        )}

        <label>Billing Date:</label>
        {isEditing ? (
          <input type="text" name="billingDate" value={customer.billingDate} onChange={handleCustomerChange} />
        ) : (
          <p>{customer.billingDate}</p>
        )}

        <label>Amount Due:</label>
        {isEditing ? (
          <input type="text" name="amountDue" value={customer.amountDue} onChange={handleCustomerChange} />
        ) : (
          <p>{customer.amountDue}</p>
        )}

        <button onClick={toggleEdit} className="edit-btn">
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Payment Methods */}
      <div className="payment-section">
        <h2>Select Payment Method</h2>
        <select 
          className="payment-dropdown"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit_card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="paypal">PayPal</option>
          <option value="net_banking">Net Banking</option>
        </select>

        <div className="payment-details">
          {paymentMethod === "credit_card" && (
            <div className="card-details">
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Cardholder Name" />
              <div className="card-row">
                <input type="text" placeholder="Expiry (MM/YY)" />
                <input type="text" placeholder="CVV" />
              </div>
            </div>
          )}
          {paymentMethod === "upi" && <input type="text" placeholder="Enter UPI ID" />}
          {paymentMethod === "paypal" && <input type="email" placeholder="PayPal Email" />}
          {paymentMethod === "net_banking" && (
            <select>
              <option>Select Your Bank</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
              <option>Axis Bank</option>
            </select>
          )}
        </div>

        <button className="pay-btn">Make Payment</button>
      </div>

      {/* Transaction History (Editable) */}
      <div className="transaction-history">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>{txn.id}</td>
                <td>{txn.date}</td>
                <td>{txn.amount}</td>
                <td className={txn.status.toLowerCase()}>{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invoice & Print Options */}
      <div className="billing-actions">
        <button className="invoice-btn">Download Invoice</button>
        <button className="print-btn">Print Receipt</button>
      </div>
    </div>
  );
};

export default Billing;