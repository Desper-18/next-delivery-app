import Image from 'next/image';

// Assets
import logoUrl from '@/app/assets/images/convex_logo.svg?url';
import IconLocationUrl from '@/app/assets/images/icons/location.svg?url';
import IconCartUrl from '@/app/assets/images/icons/cart.svg?url';

// Components
import SearchInput from './SearchInput';
import NavbarItem from './NavbarItem';

export default function Navbar() {
    const navMenus = [
        {
            title: 'Продукты',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
        {
            title: 'Еда быстрого приготовления',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
        {
            title: 'Консервы',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
        {
            title: 'Напитки',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
                {
                    title: 'Item 2',
                    path: '',
                },
                {
                    title: 'Item 3',
                    path: '',
                },
            ],
        },
        {
            title: 'Бытовая химия',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
        {
            title: 'Уход за собой',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
        {
            title: 'Еще',
            submenu: [
                {
                    title: 'Item 1',
                    path: '',
                },
            ],
        },
    ];

    return (
        <header className="xl:max-w-[1080px] 2xl:max-w-[1200px] mx-auto px-3 py-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-12">
                    <Image src={logoUrl} className="h-[42px] w-[100px]" alt="logo" />
                    <div className="flex flex-col grow">
                        <p className="text-captions text-sm leading-normal">Бесплатный звонок</p>
                        <p className="text-title font-medium text-[22px] leading-normal">
                            8 800 080 5011
                        </p>
                    </div>
                </div>
                <SearchInput />
                <div className="flex justify-end items-center gap-12">
                    <div className="flex flex-col gap-0.5 items-end">
                        <div className="text-green flex gap-1">
                            <Image src={IconLocationUrl} alt="Location icon" />
                            ЕЦ-166/4
                        </div>
                        <span className="text-captions text-xs">Нур-Султан</span>
                    </div>
                    <button className="rounded-full py-2 px-5 border border-captions hover:text-green active:shadow-sm active:shadow-captions">
                        Войти
                    </button>
                </div>
            </div>
            <hr className="text-lightGray h-[1px] my-5" />
            <nav>
                <ul className="list-none flex gap-6 items-center">
                    {navMenus.map((navMenu, index) => (
                        <NavbarItem key={index} item={navMenu} />
                    ))}
                    <li className='ms-auto'>
                        <button className='bg-green text-white flex items-center gap-2 p-2 rounded-lg'>
                            {/* <IconCartUrl /> */}
                            <Image src={IconCartUrl} alt="cart icon" />
                            <div className='flex flex-col'>
                                <span className='font-medium'>
                                    Корзина
                                </span>
                                <span className='font-normal text-xs text-start leading-none opacity-65'>
                                    2 400 г.
                                </span>
                            </div>
                            <span className='p-2 leading-none rounded-lg bg-paleGreen'>
                                12
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
