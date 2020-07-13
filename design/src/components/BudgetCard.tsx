import React, { FC } from 'react';

type Props = {
    start: Date
    end: Date
    expensesCount: number
    expenses: number
    budgeted: number
    income: number
    totalBudget: number
}
export const BudgetCard: FC<Props> = (props: Props) => (

    <div className="max-w-md px-6 py-4 bg-white border border-gray-200 rounded">

        <h2 className="text-xl font-thin text-gray-500">
            Budget
        </h2>
        <div className="items-center p-2 text-gray-600 bg-gray-100 rounded md:flex-row md:flex">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hidden h-5 mr-2 md:block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {props.start.toLocaleString("default", { day: "numeric", month: "short", year: "numeric" })}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 mx-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {props.start.toLocaleString("default", { day: "numeric", month: "short", year: "numeric" })}
        </div>
        <p className="text-sm text-gray-600">
            You had <span className="font-bold text-gray-800 text-md">{props.expensesCount}</span> expenses.
        </p>
        <div className="flex mt-8 justify-evenly">
            <div className="flex flex-col">
                <span className="text-sm tracking-tight text-gray-500 uppercase">Spending</span>
                <div className="flex items-center">

                    <span className="-mt-2 text-3xl text-gray-900">13.5%</span>
                    <span>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 text-red-600"><path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-sm tracking-tight text-gray-500 uppercase">Saving</span>
                <div className="flex items-center">

                    <span className="-mt-2 text-3xl text-gray-900">6.2%</span>
                    <span>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 text-blue-600 "><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </span>
                </div>
            </div>
        </div>
        <div className="flex mt-4">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 p-6 text-red-500 bg-red-100 rounded ">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <div className="flex-grow ml-4 ">
                <h3 className="">Expenses</h3>
                <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{props.expenses} €</span>
                    <span className="text-sm font-thin text-gray-600">{props.totalBudget} €</span>

                </div>
                <div className="flex h-1 mb-4 overflow-hidden bg-gray-400 rounded-lg">
                    <div style={{ width: (props.expenses / props.totalBudget * 100).toString() + "%" }} className="bg-red-600"></div>
                </div>
            </div>
        </div>
        <div className="flex mt-4">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-20 p-6 text-indigo-500 bg-indigo-100 rounded ">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
            </svg>
            <div className="flex-grow ml-4 ">
                <h3 className="">Savings</h3>
                <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{props.totalBudget - props.expenses} €</span>
                    <span className="text-sm font-thin text-gray-600">{props.totalBudget} €</span>

                </div>
                <div className="flex h-1 mb-4 overflow-hidden bg-gray-400 rounded-lg">
                    <div style={{ width: ((1 - props.expenses / props.totalBudget) * 100).toString() + "%" }} className="bg-indigo-600"></div>
                </div>
            </div>
        </div>


    </div>

)
