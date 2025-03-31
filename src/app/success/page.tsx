'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get transaction details from URL params
  const mobileNumber = searchParams.get('mobile') || '9876543210';
  const operator = searchParams.get('operator') || 'Airtel';
  const amount = searchParams.get('amount') || '299';
  const transactionId = 'AIS' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const date = new Date().toLocaleString();

  const handleShare = () => {
    const message = `
🎉 Recharge Successful!
---------------------------
📱 Mobile: +91 ${mobileNumber}
🔄 Operator: ${operator}
💰 Amount: ₹${amount}
🆔 Transaction ID: ${transactionId}
📅 Date: ${date}
---------------------------
Thank you for choosing Aisyncy Recharge! 🙏
    `.trim();

    // Share on WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownload = () => {
    const receipt = `
===============================
      RECHARGE RECEIPT
===============================

Transaction ID: ${transactionId}
Date & Time: ${date}

Mobile Number: +91 ${mobileNumber}
Operator: ${operator}
Amount: ₹${amount}

Status: ✅ Success

Thank you for choosing Aisyncy Recharge!
We appreciate your trust in our service.
===============================
    `.trim();

    // Create blob and download
    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recharge_receipt_${transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-[#00cc44] rounded-[24px] p-6 flex flex-col items-center overflow-hidden relative w-full max-w-xl mx-auto">
          {/* Success Animation */}
          <div className="mb-3">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center animate-bounce">
              <svg className="w-10 h-10 text-[#00cc44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-white mb-1">🎊 Congratulations! 🎊</h1>
            <p className="text-white/90 text-sm">
              Welcome to unlimited connectivity with {operator}!
              <br />
              Your recharge has been processed successfully.
            </p>
          </div>

          {/* Transaction Details */}
          <div className="bg-white/20 rounded-[16px] p-4 w-full mb-4">
            <h2 className="text-white text-base font-semibold mb-2">Transaction Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center text-white">
                <div>
                  <p className="text-white/80">Mobile Number</p>
                  <p>+91 {mobileNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80">Operator</p>
                  <p>{operator}</p>
                </div>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between text-white">
                <span>Amount</span>
                <span>₹{amount}</span>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between text-white">
                <span>Transaction ID</span>
                <span className="font-mono">{transactionId}</span>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between text-white">
                <span>Date & Time</span>
                <span>{date}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-all flex items-center"
            >
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
              </svg>
              Share on WhatsApp
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#00cc44] hover:bg-opacity-90 transition-all flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Receipt
            </button>
          </div>

          {/* Thank You Message */}
          <p className="text-white/80 text-xs text-center">
            Thank you for choosing Aisyncy Recharge! 🙏
            <br />
            We hope to serve you again soon.
          </p>

          {/* Home Button */}
          <button
            onClick={() => router.push('/')}
            className="mt-2 text-white/70 text-xs hover:text-white transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="pb-2 text-center">
        <svg className="w-5 h-5 text-white animate-bounce inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <footer className="px-6 py-2 flex items-center justify-center">
        <div className="text-white text-sm">
          Made with ❤️ by Aisyncy
        </div>
      </footer>
    </div>
  );
} 
 