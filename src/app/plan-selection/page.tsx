'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Plan {
  id: string;
  amount: number;
  validity: string;
  benefits: string[];
}

const plans: Plan[] = [
  {
    id: '1',
    amount: 299,
    validity: '28 days',
    benefits: ['2GB/day', 'Unlimited calls', '100 SMS/day'],
  },
  {
    id: '2',
    amount: 499,
    validity: '56 days',
    benefits: ['3GB/day', 'Unlimited calls', '100 SMS/day'],
  },
  {
    id: '3',
    amount: 799,
    validity: '84 days',
    benefits: ['5GB/day', 'Unlimited calls', '100 SMS/day'],
  },
];

export default function PlanSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const filteredPlans = plans.filter(plan => 
    plan.amount.toString().includes(searchQuery) ||
    plan.validity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProceed = () => {
    if (selectedPlan) {
      const plan = plans.find(p => p.id === selectedPlan);
      if (plan) {
        router.push(`/payment?mobile=${searchParams.get('mobile')}&operator=${searchParams.get('operator')}&amount=${plan.amount}`);
      }
    }
  };

  return (
    <div className="h-screen bg-[#00802b] flex flex-col">
      {/* Top Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="flex items-center">
          <div className="text-white text-2xl font-semibold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
            </svg>
            <span className="text-2xl">Aisyncy.recharge</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="bg-[#00cc44] rounded-[40px] p-12 flex flex-col items-center overflow-hidden relative w-full max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="w-full max-w-md mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by amount or validity..."
              className="w-full px-6 py-3 rounded-full text-base focus:outline-none"
            />
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`bg-white rounded-[24px] p-6 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'ring-4 ring-white'
                    : 'hover:bg-white/90'
                }`}
              >
                <div className="text-[#00cc44] text-2xl font-bold mb-2">
                  ₹{plan.amount}
                </div>
                <div className="text-gray-600 mb-4">{plan.validity}</div>
                <ul className="space-y-2">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#00cc44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={!selectedPlan}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              selectedPlan
                ? 'bg-white text-[#00cc44] hover:bg-opacity-90'
                : 'bg-white/50 text-white/50 cursor-not-allowed'
            }`}
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="pb-4 text-center">
        <svg className="w-8 h-8 text-white animate-bounce inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <footer className="px-8 py-4">
        <div className="text-center text-white">
          <span className="text-sm">© 2023 Aisyncy. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
} 