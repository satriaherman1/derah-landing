"use client";

import React, { useState } from "react";

interface SearchBoxProps {
    className?: string;
    inputClassName?: string;
    buttonClassName?: string;
    placeholder?: string;
    onSearch?: (value: string) => void;
}

export default function SearchBox({
    className = "",
    inputClassName = "",
    buttonClassName = "",
    placeholder = "Search apps, providers, or categories...",
    onSearch,
}: SearchBoxProps) {
    const [value, setValue] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div
            className={`
                flex items-center gap-2
                p-1.5
                rounded-xl
                border border-black/10
                bg-white
                shadow-[0_2px_8px_rgba(0,0,0,0.06)]
                w-full max-w-full md:w-fit
                ${className}
            `}
        >
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={`
                    flex-1
                    bg-transparent
                    px-4 py-2.5
                    text-sm text-gray-700
                    placeholder:text-gray-400
                    outline-none
                    min-w-0 md:min-w-[300px]
                    ${inputClassName}
                `}
            />

            <button
                onClick={handleSearch}
                className={`
                    px-5 py-2.5
                    rounded-lg
                    bg-primary
                    text-white
                    text-sm font-medium
                    shadow-[0_2px_0px_rgba(0,0,0,0.1)]
                    hover:bg-primary-hover
                    active:scale-[0.98]
                    transition-all
                    ${buttonClassName}
                `}
            >
                Search
            </button>
        </div>
    );
}