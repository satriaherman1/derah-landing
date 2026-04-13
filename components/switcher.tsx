"use client";

import { useState, ReactNode } from "react";
import clsx from "clsx";

type Option = {
    label: string;
    value: string;
    icon?: ReactNode;
};

type SwitcherProps = {
    options: Option[];
    defaultValue?: string;
    value?: string; // optional controlled
    onChange?: (val: string) => void;
    className?: string;
};

export default function Switcher({
    options,
    defaultValue,
    value,
    onChange,
    className,
}: SwitcherProps) {
    const [internalValue, setInternalValue] = useState(
        defaultValue || options[0]?.value
    );

    const active = value ?? internalValue;

    const activeIndex = options.findIndex((o) => o.value === active);

    const handleChange = (val: string) => {
        if (value === undefined) {
            setInternalValue(val);
        }
        onChange?.(val);
    };

    return (
        <div className={clsx("w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", className)}>
            <div
                className="relative grid w-max min-w-full mx-auto grid-flow-col auto-cols-fr bg-gray-100 p-1 rounded-xl text-sm"
                style={{
                    "--options-count": options.length,
                    "--active-index": activeIndex,
                } as React.CSSProperties}
            >
                {/* SLIDER */}
                <div
                    className="absolute bg-white rounded-lg shadow-sm transition-all duration-300 top-1 bottom-1 left-1 h-auto translate-y-0 w-[calc((100%_-_0.5rem)/var(--options-count))] translate-x-[calc(var(--active-index)*100%)]"
                />

                {/* OPTIONS */}
            {options.map((opt) => {
                const isActive = active === opt.value;

                return (
                    <button
                        key={opt.value}
                        onClick={() => handleChange(opt.value)}
                        className={clsx(
                            "relative z-10 flex items-center justify-center gap-2 px-3 py-2 md:py-1.5 rounded-lg transition w-full",
                            isActive
                                ? "text-black"
                                : "text-gray-500 hover:text-black"
                        )}
                    >
                        {/* ICON */}
                        {opt.icon && (
                            <div
                                className={clsx(
                                    "w-7 h-7 flex items-center justify-center rounded-md transition",
                                    isActive
                                        ? "bg-primary text-white"
                                        : "bg-[#E5E5E5] text-gray-500"
                                )}
                            >
                                {opt.icon}
                            </div>
                        )}

                        <span className="whitespace-nowrap">{opt.label}</span>
                    </button>
                );
            })}
        </div>
        </div>
    );
}