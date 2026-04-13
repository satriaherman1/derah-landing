"use client";

import Image from "next/image";
import { useState } from "react";
import {
    CaretDown,
    Devices,
    Basket,
    ArrowClockwise,
    RockerLaunch,
} from "./icons";

const productItems = [
    {
        icon: <Devices />,
        title: "Web-Based POS",
        desc: "Dedicated page for hardware-agnostic terminal.",
    },
    {
        icon: <Basket />,
        title: "Online Webstore",
        desc: "eCommerce & BYO payment features.",
    },
    {
        icon: <ArrowClockwise />,
        title: "Sync Ecosystem",
        desc: "Configure Once, Sync Everywhere.",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProduct, setMobileProduct] = useState(false);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="py-4 px-3 relative z-40 border-b border-[#66666630] bg-white">
                <div className="container max-w-[1300px] flex justify-between items-center">
                    {/* LOGO */}
                    <Image
                        src="/img/logo.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[120px] md:w-[140px] h-auto object-contain"
                    />

                    {/* DESKTOP MENU */}
                    <section className="hidden md:flex items-center gap-x-6">
                        {/* PRODUCT */}
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className="relative"
                        >
                            <button className="flex items-center gap-x-2 font-medium">
                                Product <CaretDown />
                            </button>

                            <div
                                className={`
                  absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[80vw]
                  transition-all duration-200
                  ${open
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-2 invisible"
                                    }
                `}
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-6">
                                    <p className="text-sm text-[#666666] mb-4 font-medium">
                                        Product
                                    </p>

                                    <div className="grid grid-cols-3 gap-6">
                                        {productItems.map((item, i) => (
                                            <div
                                                key={i}
                                                className="hover:bg-gray-50 p-3 rounded-lg flex gap-x-3 cursor-pointer transition"
                                            >
                                                <div className="icon-box shrink-0">{item.icon}</div>
                                                <div className="min-w-0">
                                                    <h4 className="font-semibold">{item.title}</h4>
                                                    <p className="text-sm text-[#666666] mt-2">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="rounded-lg bg-primary p-1.5">
                                                <RockerLaunch />
                                            </div>
                                            <span className="text-sm">
                                                Want to see Derah in action?
                                            </span>
                                        </div>
                                        <button className="btn btn-primary">See a Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button>Solutions</button>
                        <button>Integrations</button>
                        <button>Pricing</button>
                    </section>

                    {/* CTA DESKTOP */}
                    <section className="hidden md:flex gap-x-2">
                        <button className="btn">Sign in</button>
                        <button className="btn btn-primary">See a Demo</button>
                    </section>

                    {/* HAMBURGER */}
                    <button onClick={() => setMobileOpen(true)} className="md:hidden text-xl">
                        ☰
                    </button>
                </div>
            </nav>

            {/* ================= OVERLAY ================= */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 z-50
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
            />

            {/* ================= DRAWER ================= */}
            <div
                className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white
          z-[60]
          transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <Image
                        src="/img/logo.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[110px] h-auto"
                    />

                    <button onClick={() => setMobileOpen(false)} className="text-xl">
                        ✕
                    </button>
                </div>

                {/* MENU */}
                <div className="px-6 py-6 flex flex-col gap-y-6">
                    {/* PRODUCT */}
                    <div>
                        <button
                            onClick={() => setMobileProduct(!mobileProduct)}
                            className="flex justify-between items-center w-full text-left font-medium text-lg"
                        >
                            Product
                            <CaretDown
                                className={`transition-transform ${mobileProduct ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* ACCORDION */}
                        <div
                            className={`
                overflow-hidden transition-all duration-300
                ${mobileProduct ? "max-h-[500px] mt-4" : "max-h-0"}
              `}
                        >
                            <div className="flex flex-col gap-y-3">
                                {productItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-x-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
                                    >
                                        <div className="icon-box shrink-0">{item.icon}</div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-sm">{item.title}</p>
                                            <p className="text-xs text-[#666666]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MENU */}
                    <button className="text-left text-lg font-medium">Solutions</button>
                    <button className="text-left text-lg font-medium">Integrations</button>
                    <button className="text-left text-lg font-medium">Pricing</button>

                    {/* CTA */}
                    <div className="mt-6 flex flex-col gap-y-3">
                        <button className="btn w-full">Sign in</button>
                        <button className="btn btn-primary w-full">See a Demo</button>
                    </div>
                </div>
            </div>
        </>
    );
}