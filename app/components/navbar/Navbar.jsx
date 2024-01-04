import Image from 'next/image';

// Assets
import logo from '@/app/assets/images/convex_logo.svg';
import IconLocation from '@/app/assets/images/icons/location.svg';

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
                    <Image src={logo} className="h-[42px] w-[100px]" alt="logo" />
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
                            <Image src={IconLocation} alt="Location icon" />
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
                <ul className="list-none flex gap-7">
                    {navMenus.map((navMenu, index) => (
                        <NavbarItem key={index} item={navMenu} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
