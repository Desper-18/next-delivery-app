'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import ChevronDown from '@/app/assets/images/icons/chevron-down.svg';
import Link from 'next/link';
export const dynamicRendering = true

export default function NavbarItem({ item }) {
    const [isClicked, setIsClicked] = useState(false);
    const [subMenuDisplay, setSubMenuDisplay] = useState('hidden');
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
        <li>
            <button
                type="menu"
                onClick={onMenuClick}
                className="flex gap-1 items-center hover:text-green"
            >
                {item.title}
                <Image src={ChevronDown} alt="" />
            </button>
            <ul className={`CCC ${subMenuDisplay}`}>
                {item.submenu.map((submenu, index) => (
                    <li key={index}>
                        <Link href={submenu.path}>{submenu.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
