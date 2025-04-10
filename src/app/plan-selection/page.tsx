'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

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

function PlanSelectionContent() {
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
    <div className="min-h-screen bg-[#00802b] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Select Payment Method</h1>
          <p className="text-white/80 text-lg">Complete your {searchParams.get('operator')} recharge of ₹{searchParams.get('amount')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/payment?operator=${searchParams.get('operator')}&amount=${searchParams.get('amount')}&method=upi`}
            className="bg-[#00cc44] rounded-2xl p-6 text-center hover:bg-opacity-90 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">UPI Payment</h2>
            <p className="text-white/80 mb-4">Pay using any UPI app</p>
            <button className="bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Pay Now
            </button>
          </Link>

          <Link
            href={`/payment?operator=${searchParams.get('operator')}&amount=${searchParams.get('amount')}&method=card`}
            className="bg-[#00cc44] rounded-2xl p-6 text-center hover:bg-opacity-90 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Card Payment</h2>
            <p className="text-white/80 mb-4">Pay using credit/debit card</p>
            <button className="bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Pay Now
            </button>
          </Link>

          <Link
            href={`/payment?operator=${searchParams.get('operator')}&amount=${searchParams.get('amount')}&method=netbanking`}
            className="bg-[#00cc44] rounded-2xl p-6 text-center hover:bg-opacity-90 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Net Banking</h2>
            <p className="text-white/80 mb-4">Pay directly from your bank account</p>
            <button className="bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Pay Now
            </button>
          </Link>

          <Link
            href={`/payment?operator=${searchParams.get('operator')}&amount=${searchParams.get('amount')}&method=cod`}
            className="bg-[#00cc44] rounded-2xl p-6 text-center hover:bg-opacity-90 transition-all"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Cash on Delivery</h2>
            <p className="text-white/80 mb-4">Pay in cash when recharging</p>
            <button className="bg-white text-[#00802b] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Pay Now
            </button>
          </Link>
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

export default function PlanSelection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlanSelectionContent />
    </Suspense>
  );
} 