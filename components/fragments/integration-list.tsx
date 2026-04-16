"use client";

import React, { useState } from "react";

type Item = {
    title: string;
    description: string;
    imageUrl?: string; // 🔥 pakai image
};

type Section = {
    key: string;
    title: string;
    description?: string;
    icon?: React.ReactNode; // sidebar masih boleh pakai icon
    items: Item[];
};

interface IntegrationLayoutProps {
    sections: Section[];
    allIcon?: React.ReactNode;
}

export default function IntegrationLayout({
    sections,
    allIcon,
}: IntegrationLayoutProps) {
    const [active, setActive] = useState("all");

    const activeSection = sections.find((s) => s.key === active);

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">

            {/* 🔥 MOBILE TABS */}
            <div className="md:hidden overflow-x-auto">
                <div className="flex gap-2 min-w-max pb-2">

                    {/* ALL */}
                    <button
                        onClick={() => setActive("all")}
                        className={`
                            flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap
                            ${active === "all"
                                ? "bg-orange-50 text-orange-600"
                                : "bg-gray-100 text-[#666666]"}
                        `}
                    >
                        <span className="w-5 h-5 rounded md:bg-gray-200 flex items-center justify-center text-[10px]">
                            {allIcon ?? "●"}
                        </span>
                        All
                    </button>

                    {sections.map((section) => (
                        <button
                            key={section.key}
                            onClick={() => setActive(section.key)}
                            className={`
                                flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm whitespace-nowrap
                                ${active === section.key
                                    ? "bg-orange-50 text-orange-600"
                                    : "bg-gray-100 text-[#666666]"}
                            `}
                        >
                            <span className="w-5 h-5 rounded md:bg-gray-200 flex items-center justify-center text-[10px]">
                                {section.icon ?? "■"}
                            </span>
                            {section.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* 🔥 DESKTOP SIDEBAR */}
            <div className="hidden md:block w-60 shrink-0">
                <div className="space-y-1 pr-4">

                    {/* ALL */}
                    <button
                        onClick={() => setActive("all")}
                        className={`
                            w-full flex items-center gap-2 px-3 py-4 text-sm border-b border-[#66666630]
                            ${active === "all"
                                ? "text-orange-600 font-medium"
                                : "text-[#999999] hover:bg-gray-100"}
                        `}
                    >
                        <span className={active === "all" ? "icon-box-primary text-white" : "icon-box-gray"}>
                            {allIcon ?? "●"}
                        </span>
                        All integrations
                    </button>

                    {sections.map((section) => (
                        <button
                            key={section.key}
                            onClick={() => setActive(section.key)}
                            className={`
                                w-full flex items-center gap-2 px-3 py-4 text-sm border-b border-[#66666630]
                                ${active === section.key
                                    ? "text-orange-600 font-medium"
                                    : "text-[#999999] hover:bg-gray-100"}
                            `}
                        >
                            <span className={active === section.key ? "icon-box-primary text-white" : "icon-box-gray"}>
                                {section.icon ?? "■"}
                            </span>
                            {section.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* 🔥 CONTENT */}
            <div className="flex-1">

                {/* ================= ALL (GROUPED) ================= */}
                {active === "all" && (
                    <div>
                        <div className="space-y-6">
                            {sections.map((section) => (
                                <div key={section.key}>

                                    {/* CATEGORY */}
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                        {section.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                                        {section.description}
                                    </p>

                                    {/* GRID */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-3">
                                        {section.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="
                                                    group flex items-start gap-3
                                                    p-3 rounded-lg
                                                    
                                                    hover:bg-gray-50
                                                    transition-all
                                                    cursor-pointer
                                                "
                                            >
                                                {/* 🔥 IMAGE LOGO */}
                                                <div className="w-12 h-12  rounded-md bg-white  flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                    {item.imageUrl ? (
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.title}
                                                            className="w-12 h-12 object-contain group-hover:scale-110 transition"
                                                        />
                                                    ) : (
                                                        <span className="text-xs font-semibold text-[#666666]">
                                                            {item.title.charAt(0)}
                                                        </span>
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ================= SINGLE SECTION ================= */}
                {active !== "all" && activeSection && (
                    <div>
                        <div className="mb-4 md:mb-5">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900">
                                {activeSection.title}
                            </h3>
                            {activeSection.description && (
                                <p className="text-xs md:text-sm text-gray-500 mt-1">
                                    {activeSection.description}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {activeSection.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="
                                        group flex items-start gap-3
                                        p-3 rounded-lg
                                        
                                        hover:bg-gray-50
                                        transition-all
                                        cursor-pointer
                                    "
                                >
                                    {/* 🔥 IMAGE LOGO */}
                                    <div className="w-12 h-12  rounded-md bg-white      flex items-center justify-center flex-shrink-0 overflow-hidden">
                                        {item.imageUrl ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-12 h-12 object-contain group-hover:scale-110 transition"
                                            />
                                        ) : (
                                            <span className="text-xs font-semibold text-gray-500">
                                                {item.title.charAt(0)}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}