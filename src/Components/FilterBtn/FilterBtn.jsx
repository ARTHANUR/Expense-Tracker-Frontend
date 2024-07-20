import React from "react";
import "../ShowExpense/ShowExpense.css";

const FilterBtn = ({ expense, fetchExpenses , setFiltered }) => {
    const filterExpense = (category) => {
        if (category === "all") {
            fetchExpenses();
        } else {
            setFiltered(expense.filter((item) => item.category === category));
        }
    };

    return (
        <div className="btn-container">
            <button onClick={() => filterExpense("all")} className="all">
                All <span class="material-symbols-outlined">all_match</span>
            </button>
            <button onClick={() => filterExpense("food")} className="food">
                Food & Groceries <span class="material-symbols-outlined">restaurant</span>
            </button>
            <button onClick={() => filterExpense("transportation")} className="transportation">
                Transportation <span class="material-symbols-outlined">hail</span>
            </button>
            <button onClick={() => filterExpense("housing")} className="housing">
                Housing <span class="material-symbols-outlined">real_estate_agent</span>
            </button>
            <button onClick={() => filterExpense("healthcare")} className="healthcare">
                Healthcare <span class="material-symbols-outlined">health_and_safety</span>
            </button>
            <button onClick={() => filterExpense("shopping")} className="shopping">
                Shopping <span class="material-symbols-outlined">shopping_bag</span>
            </button>
            <button onClick={() => filterExpense("emi")} className="emi">
                EMI <span class="material-symbols-outlined">account_balance</span>
            </button>
        </div>
    );
};

export default FilterBtn;
