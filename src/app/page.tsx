'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'website' | 'whatsapp'>('website');
  const [currentBox, setCurrentBox] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBox((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (tab: 'website' | 'whatsapp') => {
    setActiveTab(tab);
    if (tab === 'whatsapp') {
      router.push('/whatsapp');
    }
  };

  const handleRechargeClick = () => {
    router.push('/recharge-details');
  };

  const boxes = [
    {
      title: "Recharge via Whatsapp",
      subtitle: "Trained Ai ChartBot",
      description: "Recharge it once We Will Connected to Always To Serve better Assistants and Services",
      image: "/profile.jpg",
      tag: "#Aisyncy.Recharge"
    },
    {
      title: "24/7 Support",
      subtitle: "Always Here to Help",
      description: "Get instant support and assistance for all your recharge needs",
      image: "/support.jpg",
      tag: "#24/7Support"
    },
    {
      title: "Secure Payments",
      subtitle: "Safe & Reliable",
      description: "Your transactions are secure with our advanced payment system",
      image: "/secure.jpg",
      tag: "#SecurePayments"
    }
  ];

  return (
    <div className="h-screen bg-[#00802b] flex flex-col">
      {/* Top Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/explore"
            className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
          >
            Explore
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-[#00cc44] rounded-full overflow-hidden flex p-1">
            <button
              onClick={() => handleTabChange('website')}
              className={`px-6 py-2 text-white text-base font-medium rounded-full transition-all duration-300 ${
                activeTab === 'website' ? 'bg-[#00802b]' : ''
              }`}
            >
              Website
            </button>
            <button
              onClick={() => handleTabChange('whatsapp')}
              className={`px-6 py-2 text-white text-base font-medium rounded-full transition-all duration-300 ${
                activeTab === 'whatsapp' ? 'bg-[#00802b]' : ''
              }`}
            >
              Whatsapp
            </button>
          </div>
        </div>

        <Link
          href="/"
          className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
        >
          <Image
            src="/syncy.png"
            alt="Syncy Logo"
            width={26}
            height={26}
            className="mr-2"
          />
          <span className="text-lg">Aisyncy.recharge</span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative w-full max-w-[90%] mx-auto h-[500px]">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-[#00cc44] rounded-[40px] p-16 flex items-center justify-between overflow-hidden transition-opacity duration-500 ${
                currentBox === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="max-w-xl z-10">
                <span className="inline-block bg-[#0066ff] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                  {box.tag}
                </span>
                <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                  {box.title}
                  <br />
                  {box.subtitle}
                </h1>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  "{box.description}"
                </p>
                <button
                  onClick={handleRechargeClick}
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium flex items-center hover:bg-opacity-90 transition-all"
                >
                  Recharge Now
                  <div className="bg-[#00cc44] rounded-full p-2 ml-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
                <div className="relative w-[550px] h-[550px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <Image
                    src={box.image}
                    alt={`Box ${index + 1} Image`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#00802b] py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white/70 text-sm">
              © 2024 Aisyncy.recharge. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/70 text-sm hover:text-white transition-all">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 text-sm hover:text-white transition-all">
                Terms & Conditions
              </Link>
              <Link href="/recharge-policy" className="text-white/70 text-sm hover:text-white transition-all">
                Recharge Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}