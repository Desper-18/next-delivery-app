'use client';

export default function SearchInput() {
    return (
        <div className="grid">
            <input
                type="text"
                className="bg-gray rounded-full font-medium leading-none
                placeholder:text-center placeholder:text-captions placeholder:before:bg-[url()]"
                placeholder="Поиск товаров"
            />
        </div>
    );
}
