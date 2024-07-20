import React from "react";
import "./ShowExpense.css";
import axios from "axios";

const ShowExpense = ({ filtered, fetchExpenses }) => {
    const deleteExpense = async (id) => {
        await axios
            .delete(`http://localhost:5555/expense/deleteExpense/${id}`)
            .then((response) => {
                console.log(response);
                fetchExpenses();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="expense-container">
            {filtered.map((item, index) => (
                <div key={index} className={item.category}>
                    <span>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </span>
                    <span>
                        <h2> &#x20B9; {item.price}</h2>
                        <p className="payment-method">
                            <span className="material-symbols-outlined">payments</span> {item.paymentMethod.toUpperCase()}
                        </p>
                    </span>
                    <span>
                        <p>Date: {item.createdAt.substring(0, 10)}</p>
                        <p>Time: {item.createdAt.substring(11, 16)}</p>
                    </span>
                    <span onClick={() => deleteExpense(item._id)} class="material-symbols-outlined" style={{cursor:"pointer"}}>delete</span>
                </div>
            ))}
        </div>
    );
};

export default ShowExpense;
