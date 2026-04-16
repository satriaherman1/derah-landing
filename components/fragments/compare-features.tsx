"use client";

import { useState } from "react";
import { CaretDown } from "../icons";

const Check = () => (
    <svg className="h-3.5 w-3.5 stroke-current text-primary" viewBox="0 0 14 11" fill="none">
        <polyline
            points="1,5.5 5,9.5 13,1.5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Dash = () => <span className="text-black/50 text-base">—</span>;

type CellValue = "check" | "dash" | string;

interface FeatureRow {
    name: string;
    free: CellValue;
    basic: CellValue;
    enterprise: CellValue;
}

interface Section {
    title: string;
    rows: FeatureRow[];
}

const sections: Section[] = [
    {
        title: "Core Limits",
        rows: [
            { name: "Products", free: "15", basic: "Unlimited", enterprise: "Unlimited" },
            { name: "Team members", free: "2", basic: "10", enterprise: "Unlimited" },
        ],
    },
    {
        title: "Sales & Channels",
        rows: [
            { name: "eCommerce", free: "check", basic: "check", enterprise: "check" },
            { name: "POS", free: "dash", basic: "check", enterprise: "check" },
            { name: "Payment gateways", free: "check", basic: "check", enterprise: "check" },
            { name: "Armada delivery", free: "check", basic: "check", enterprise: "check" },
            { name: "Delivery aggregators", free: "dash", basic: "check", enterprise: "check" },
        ],
    },
    {
        title: "Operations & Management",
        rows: [
            { name: "Inventory", free: "dash", basic: "check", enterprise: "check" },
            { name: "Recipes / BOM", free: "dash", basic: "check", enterprise: "check" },
            { name: "Purchasing", free: "dash", basic: "check", enterprise: "check" },
            { name: "Advanced pricing", free: "dash", basic: "check", enterprise: "check" },
            { name: "Financials", free: "dash", basic: "check", enterprise: "check" },
            { name: "Food cost tracking", free: "dash", basic: "dash", enterprise: "check" },
        ],
    },
];

function Cell({ value }: { value: CellValue }) {
    if (value === "check") return <div className="flex justify-center"><span className="p-2 bg-primary/8 rounded-full"><Check /></span></div>;
    if (value === "dash") return <div className="flex justify-center"><Dash /></div>;

    const isUnlimited = value === "Unlimited";

    return (
        <div className="flex justify-center">
            <span className={`text-sm font-medium text-black/80`}>
                {value}
            </span>
        </div>
    );
}

export default function CompareFeatures() {
    // 🔥 default semua kebuka
    const [openSections, setOpenSections] = useState<string[]>(
        sections.map((s) => s.title)
    );

    const toggleSection = (title: string) => {
        setOpenSections((prev) =>
            prev.includes(title)
                ? prev.filter((t) => t !== title)
                : [...prev, title]
        );
    };

    return (
        <div className="w-full mt-12">

            <div className="overflow-x-auto">
                <div className="min-w-[640px]">

                    {/* HEADER */}
                    <div className="flex justify-between gap-y-4 flex-col md:flex-row gap-0 mb-6">
                        <div className="basis-full md:basis-[calc(25%-15px)]">
                            <h2 className="text-2xl font-medium text-gray-900 mb-1">
                                Compare all features.
                            </h2>
                            <p className="text-sm text-gray-500">
                                A complete breakdown of what's included in every plan.
                            </p>
                        </div>

                        <section className="flex gap-x-4 basis-full md:basis-[calc(65%-15px)]">
                            {[
                                { label: "Free", btn: "btn-md btn-gray" },
                                { label: "Basic", btn: "btn-md btn-primary" },
                                { label: "Enterprise", btn: "btn-md btn-dark" },
                            ].map(({ label, btn }) => (
                                <div key={label} className="flex flex-col gap-2.5 md:px-3 w-full">
                                    <span className="text-sm text-gray-500">{label}</span>
                                    <button className={`w-full rounded-lg text-sm font-medium  ${btn}`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* SECTIONS */}
                    {sections.map((section) => {
                        const isOpen = openSections.includes(section.title);

                        return (
                            <div key={section.title} className="mt-9">

                                {/* 🔥 CLICKABLE HEADER */}
                                <button
                                    onClick={() => toggleSection(section.title)}
                                    className="w-full grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-gray-100 pt-3.5 pb-2 text-left group"
                                >
                                    <span className="text-sm font-medium text-black/80">
                                        {section.title}
                                    </span>

                                    <span />
                                    <span />

                                    {/* Arrow */}
                                    <div className="flex justify-end pr-1">
                                        <span
                                            className={`
                        text-gray-400 text-sm transition-transform duration-200 bg-black/4 p-2 rounded-md
                        ${isOpen ? "rotate-180" : ""}
                      `}
                                        >
                                            <CaretDown />
                                        </span>
                                    </div>
                                </button>

                                {/* 🔥 COLLAPSIBLE CONTENT */}
                                <div
                                    className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                                >
                                    {section.rows.map((row, i) => (
                                        <div
                                            key={row.name}
                                            className={`grid grid-cols-[2fr_1fr_1fr_1fr] py-2.5 border-t border-gray-100 items-center ${i === section.rows.length - 1 ? "border-b" : ""
                                                }`}
                                        >
                                            <span className="text-sm text-gray-800">
                                                {row.name}
                                            </span>

                                            <Cell value={row.free} />
                                            <Cell value={row.basic} />
                                            <Cell value={row.enterprise} />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}