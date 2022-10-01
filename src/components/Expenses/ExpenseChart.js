import React from "react";

import Chart from '../Chart/Chart'
    
const ExpenseChart = props => {

const chartDataPoints = [
    { label: "Jan", value: 0, key: "Jan" },
    { label: "Feb", value: 0, key: "Feb" },
    { label: "Mar", value: 0, key: "Mar" },
    { label: "Apr", value: 0, key: "Apr" },
    { label: "May", value: 0, key: "May" },
    { label: "Jun", value: 0, key: "Jun" },
    { label: "Jul", value: 0, key: "Jul" },
    { label: "Avg", value: 0, key: "Avg" },
    { label: "Sep", value: 0, key: "Sep" },
    { label: "Oct", value: 0, key: "Oct" },
    { label: "Nov", value: 0, key: "Nov" },
    { label: "Dec", value: 0, key: "Dec" }
];
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
};

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;