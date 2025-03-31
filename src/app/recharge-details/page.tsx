'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Operator {
  id: string;
  name: string;
}

export default function RechargeDetails() {
  const router = useRouter();
  const [connectionType, setConnectionType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const operators: Operator[] = [
    { id: 'airtel', name: 'Airtel' },
    { id: 'jio', name: 'Jio' },
    { id: 'vi', name: 'Vi' },
    { id: 'bsnl', name: 'Bsnl' },
  ];

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value.replace(/\D/g, '');
    if (number.length <= 10) {
      setMobileNumber(number);
      setIsValidNumber(number.length === 10);
      
      if (number.length >= 4) {
        const prefix = number.substring(0, 4);
        if (prefix.startsWith('99')) {
          setSelectedOperator('vi');
        } else if (prefix.startsWith('98')) {
          setSelectedOperator('airtel');
        } else if (prefix.startsWith('97')) {
          setSelectedOperator('jio');
        } else if (prefix.startsWith('94')) {
          setSelectedOperator('bsnl');
        }
      }
    }
  };

  const handleProceed = () => {
    if (isValidNumber && selectedOperator) {
      router.push(`/plan-selection?mobile=${mobileNumber}&operator=${selectedOperator}`);
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
        <div className="bg-[#00cc44] rounded-[40px] p-12 flex flex-col items-center overflow-hidden relative w-full max-w-3xl mx-auto">
          {/* Connection Type Selection */}
          <div className="bg-white/20 rounded-full p-1 mb-8">
            <div className="flex">
              <button
                onClick={() => setConnectionType('prepaid')}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all ${
                  connectionType === 'prepaid'
                    ? 'bg-white text-[#00cc44]'
                    : 'text-white'
                }`}
              >
                Prepaid
              </button>
              <button
                onClick={() => setConnectionType('postpaid')}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all ${
                  connectionType === 'postpaid'
                    ? 'bg-white text-[#00cc44]'
                    : 'text-white'
                }`}
              >
                Postpaid
              </button>
            </div>
          </div>

          {/* Mobile Number Input */}
          <div className="w-full max-w-md mb-8">
            <div className="bg-white rounded-full overflow-hidden flex items-center">
              <span className="px-4 text-gray-500 text-base">+91</span>
              <input
                type="text"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder="Enter Mobile Number"
                className="flex-1 px-4 py-3 text-base focus:outline-none"
                maxLength={10}
              />
              {isValidNumber && (
                <span className="px-4 text-green-500">✓</span>
              )}
            </div>
          </div>

          {/* Operator Selection */}
          <div className="grid grid-cols-3 gap-3 mb-8 w-full max-w-xl">
            {operators.map((operator) => (
              <button
                key={operator.id}
                onClick={() => setSelectedOperator(operator.id)}
                className={`px-4 py-2 rounded-full text-base font-medium transition-all ${
                  selectedOperator === operator.id
                    ? 'bg-white text-[#00cc44]'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {operator.name}
              </button>
            ))}
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={!isValidNumber || !selectedOperator}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
              isValidNumber && selectedOperator
                ? 'bg-white text-[#00cc44] hover:bg-opacity-90'
                : 'bg-white/50 text-white/50 cursor-not-allowed'
            }`}
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="pb-4 text-center">
        <svg className="w-8 h-8 text-white animate-bounce inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <footer className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white text-2xl font-semibold flex items-center">
            <span className="text-2xl">Aisyncy.recharge</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 