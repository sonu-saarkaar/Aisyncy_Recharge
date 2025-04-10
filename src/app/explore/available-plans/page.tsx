'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AvailablePlans() {
  const [selectedOperator, setSelectedOperator] = useState('all');

  const operators = [
    { id: 'all', name: 'All Operators' },
    { id: 'airtel', name: 'Airtel' },
    { id: 'jio', name: 'Jio' },
    { id: 'vi', name: 'Vi' },
    { id: 'bsnl', name: 'BSNL' }
  ];

  const plans = [
    {
      operator: 'airtel',
      name: 'Airtel',
      plans: [
        { amount: '₹299', validity: '28 days', data: '2GB/day', description: 'Popular' },
        { amount: '₹499', validity: '56 days', data: '2GB/day', description: 'Best Value' },
        { amount: '₹799', validity: '84 days', data: '2GB/day', description: 'Long Term' },
        { amount: '₹999', validity: '365 days', data: '2GB/day', description: 'Annual' }
      ]
    },
    {
      operator: 'jio',
      name: 'Jio',
      plans: [
        { amount: '₹299', validity: '28 days', data: '2GB/day', description: 'Popular' },
        { amount: '₹499', validity: '56 days', data: '2GB/day', description: 'Best Value' },
        { amount: '₹799', validity: '84 days', data: '2GB/day', description: 'Long Term' },
        { amount: '₹999', validity: '365 days', data: '2GB/day', description: 'Annual' }
      ]
    },
    {
      operator: 'vi',
      name: 'Vi',
      plans: [
        { amount: '₹299', validity: '28 days', data: '2GB/day', description: 'Popular' },
        { amount: '₹499', validity: '56 days', data: '2GB/day', description: 'Best Value' },
        { amount: '₹799', validity: '84 days', data: '2GB/day', description: 'Long Term' },
        { amount: '₹999', validity: '365 days', data: '2GB/day', description: 'Annual' }
      ]
    },
    {
      operator: 'bsnl',
      name: 'BSNL',
      plans: [
        { amount: '₹299', validity: '28 days', data: '2GB/day', description: 'Popular' },
        { amount: '₹499', validity: '56 days', data: '2GB/day', description: 'Best Value' },
        { amount: '₹799', validity: '84 days', data: '2GB/day', description: 'Long Term' },
        { amount: '₹999', validity: '365 days', data: '2GB/day', description: 'Annual' }
      ]
    }
  ];

  const filteredPlans = selectedOperator === 'all' 
    ? plans 
    : plans.filter(plan => plan.operator === selectedOperator);

  return (
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Available Plans</h1>
          <p className="text-white/80 text-lg">Choose the best plan for your needs</p>
        </div>

        <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
          {operators.map(operator => (
            <button
              key={operator.id}
              onClick={() => setSelectedOperator(operator.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedOperator === operator.id
                  ? 'bg-white text-[#00802b]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {operator.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map(operator => (
            <div key={operator.operator} className="bg-[#00cc44] rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">{operator.name}</h2>
              <div className="space-y-4">
                {operator.plans.map((plan, index) => (
                  <Link
                    key={index}
                    href={`/payment?operator=${operator.operator}&plan=${plan.amount}`}
                    className="block bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-white">{plan.amount}</span>
                      <span className="text-white/80">{plan.validity}</span>
                    </div>
                    <div className="text-white/80">{plan.data}</div>
                    <div className="mt-2 text-sm text-white/60">{plan.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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