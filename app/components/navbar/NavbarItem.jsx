'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import ChevronDown from '@/app/assets/images/icons/chevron-down.svg';
import Link from 'next/link';
export const dynamicRendering = true

export default function NavbarItem({ item }) {
    const [isClicked, setIsClicked] = useState(false);
    const [subMenuDisplay, setSubMenuDisplay] = useState('hidden');
    const itemRef = useRef()
    const onMenuClick = () => {
        setIsClicked(!isClicked);
    };
    useEffect(() => {
        console.log("reran");
        if (isClicked) {
            setSubMenuDisplay('');
        } else {
            setSubMenuDisplay('hidden');
        }
    }, [isClicked]);

    return (
        <li className='relative'>
            <button
                type="menu"
                ref={itemRef}
                onClick={onMenuClick}
                className="flex gap-1 items-center hover:text-green"
            >
                {item.title}
                <ChevronDown />
            </button>
            <ul className={`${subMenuDisplay} border absolute border-captions rounded-lg overflow-hidden`}>
                {item.submenu.map((submenu, index) => (
                    <li key={index} className='hover:bg-green hover:text-white'>
                        <Link href={submenu.path} className='block px-3 py-2'>{submenu.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
