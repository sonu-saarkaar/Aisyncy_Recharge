'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TransactionHistory() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Transactions' },
    { id: 'success', name: 'Successful' },
    { id: 'failed', name: 'Failed' },
    { id: 'pending', name: 'Pending' }
  ];

  const transactions = [
    {
      id: 'TXN123456',
      date: '2024-03-20',
      time: '14:30',
      amount: '₹299',
      operator: 'Airtel',
      number: '9876543210',
      status: 'success',
      plan: '2GB/day, 28 days'
    },
    {
      id: 'TXN123457',
      date: '2024-03-19',
      time: '16:45',
      amount: '₹499',
      operator: 'Jio',
      number: '9876543211',
      status: 'success',
      plan: '2GB/day, 56 days'
    },
    {
      id: 'TXN123458',
      date: '2024-03-18',
      time: '09:15',
      amount: '₹799',
      operator: 'Vi',
      number: '9876543212',
      status: 'failed',
      plan: '2GB/day, 84 days'
    },
    {
      id: 'TXN123459',
      date: '2024-03-17',
      time: '11:20',
      amount: '₹999',
      operator: 'BSNL',
      number: '9876543213',
      status: 'pending',
      plan: '2GB/day, 365 days'
    }
  ];

  const filteredTransactions = selectedFilter === 'all'
    ? transactions
    : transactions.filter(tx => tx.status === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-500';
      case 'failed':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Transaction History</h1>
          <p className="text-white/80 text-lg">View your past recharge transactions</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedFilter === filter.id
                  ? 'bg-white text-[#00802b]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="bg-[#00cc44] rounded-2xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-white/80 text-left border-b border-white/20">
                  <th className="pb-4">Transaction ID</th>
                  <th className="pb-4">Date & Time</th>
                  <th className="pb-4">Operator</th>
                  <th className="pb-4">Number</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Plan</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(transaction => (
                  <tr key={transaction.id} className="border-b border-white/20">
                    <td className="py-4 text-white">{transaction.id}</td>
                    <td className="py-4 text-white/80">
                      {transaction.date}<br />
                      {transaction.time}
                    </td>
                    <td className="py-4 text-white">{transaction.operator}</td>
                    <td className="py-4 text-white">{transaction.number}</td>
                    <td className="py-4 text-white">{transaction.amount}</td>
                    <td className="py-4 text-white/80">{transaction.plan}</td>
                    <td className="py-4">
                      <span className={`${getStatusColor(transaction.status)} text-white px-3 py-1 rounded-full text-sm`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/explore"
            className="inline-block bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Back to Explore
          </Link>
        </div>
      </div>
    </div>
  );
} 