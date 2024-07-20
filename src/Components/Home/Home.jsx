import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowExpense from "../ShowExpense/ShowExpense";
import "./Home.css";
import FilterBtn from "../FilterBtn/FilterBtn";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

const Home = () => {
    const [expense, setExpense] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    ///////////////////////////////////////fetch expense from UI and set it to expense and filtered
    const fetchExpenses = async () => {
        try {
            const response = await axios.get("http://localhost:5555/expense/readExpense");
            setExpense(response.data.expense);
            setFiltered(response.data.expense);
        } catch (error) {
            console.log(error.message);
        }
    };

    //////////////////////////////////////////add expense to DB and fetch it to UI
    const addExpense = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const paymentMethod = e.target.paymentMethod.value;
        const expenseData = {
            name,
            description,
            category,
            price,
            paymentMethod,
        };
        try {
            await axios.post("http://localhost:5555/expense/writeExpense", expenseData);
            fetchExpenses();
            e.target.reset();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={addExpense}>
                    <div>
                        <input type="text" name="name" placeholder="Add expense" required />
                        <input type="text" name="description" placeholder="Note..." />
                    </div>

                    <input type="number" name="price" placeholder="Price" required />
                    <div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <select name="category" required>
                                <option value="food">Food & Dining</option>
                                <option value="transportation">Transportation</option>
                                <option value="housing">Housing</option>
                                <option value="healthcare">Health Care</option>
                                <option value="shopping">Shopping</option>
                                <option value="emi">EMI</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select name="paymentMethod" required>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="bankTransfer">Bank Transfer</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit">
                        ADD <span class="material-symbols-outlined">task_alt</span>
                    </button>
                </form>
            </div>
            <br />
            <br />
            <br />
            <FilterBtn expense={expense} setExpense={setExpense} fetchExpenses={fetchExpenses} setFiltered={setFiltered} />
            <ShowExpense fetchExpenses={fetchExpenses} filtered={filtered} />
        </div>
    );
};

export default Home;
