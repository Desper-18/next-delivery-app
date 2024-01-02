import Image from 'next/image';
import React from 'react';

import logo from '@/app/assets/convex_logo.svg';
export default function Navbar() {
    return (
        <header className="xl:max-w-[1080px] 2xl:max-w-[1200px] mx-auto px-3 py-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-12">
                    <Image src={logo} className="h-[42px] w-[100px]" alt="logo" />
                    <div className="flex flex-col grow">
                        <p className="text-captions text-sm leading-normal">Бесплатный звонок</p>
                        <p className="text-title font-medium text-[22px] leading-normal">
                            8 800 080 5011
                        </p>
                    </div>
                </div>
            </div>
            <nav></nav>
        </header>
    );
}
