'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatsApp() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'website' | 'whatsapp'>('whatsapp');

  const handleTabChange = (tab: 'website' | 'whatsapp') => {
    setActiveTab(tab);
    if (tab === 'website') {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#00802b] flex flex-col">
      {/* Top Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <Link
          href="/explore"
          className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
        >
          Explore
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

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

        <Link
          href="/"
          className="bg-white text-black px-6 py-2 rounded-full text-base font-medium flex items-center hover:bg-opacity-90 transition-all"
        >
          <Image
            src="/syncy.png"
            alt="Syncy Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-lg">Aisyncy.recharge</span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="bg-[#00cc44] rounded-[40px] p-16 flex items-center justify-between overflow-hidden relative w-full max-w-[90%] mx-auto h-[500px]">
          <div className="max-w-xl z-10">
            <span className="inline-block bg-[#0066ff] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              #WhatsApp.Recharge
            </span>
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Recharge via WhatsApp
              <br />
              Quick & Easy
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              "Send us a message on WhatsApp and our AI assistant will help you recharge instantly"
            </p>
            <button
              onClick={() => window.open('https://wa.me/7783084613', '_I want to Recharge')}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium flex items-center hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
              <div className="bg-[#00cc44] rounded-full p-2 ml-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
            <div className="relative w-[550px] h-[550px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
              <Image
                src="/whatsapp-image.jpg"
                alt="WhatsApp Chat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#00802b] w-full">
        <div className="flex justify-between items-center text-sm text-white/70 px-8 py-2 border-t border-white/10">
          <div>© 2024 Aisyncy.recharge. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-all">Terms & Conditions</Link>
            <Link href="/recharge-policy" className="hover:text-white transition-all">Recharge Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 