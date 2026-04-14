"use client";

import { useState } from "react";
import clsx from "clsx";
import { CaretDown } from "./icons";

type AccordionItem = {
    title: string;
    content: string;
};

type AccordionProps = {
    items: AccordionItem[];
    className?: string;

};

export default function Accordion({ items, className }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={clsx("w-full max-w-2xl mx-auto divide-y divide-[#0000001A] rounded-xl  bg-white  ", className)}>
            {items.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                    <div key={index}>
                        {/* HEADER */}
                        <button
                            onClick={() => toggle(index)}
                            className="flex w-full items-center justify-between px-4 py-4 text-left"
                        >
                            <span className="text-sm font-medium text-gray-800">
                                {item.title}
                            </span>

                            <CaretDown
                                stroke="#999999"
                                className={clsx(
                                    "h-4 w-4 text-gray-500 transition-transform duration-300",
                                    isOpen && "rotate-180"
                                )}
                            />
                        </button>

                        {/* CONTENT */}
                        <div
                            className={clsx(
                                "grid transition-all duration-300 ease-in-out",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            )}
                        >
                            <div className="overflow-hidden">
                                <p className="px-4 pb-4 text-sm text-left text-[#666666]">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}