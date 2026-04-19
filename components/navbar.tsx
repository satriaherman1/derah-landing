"use client";

import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import {
    CaretDown,
    Devices,
    Basket,
    ArrowClockwise,
    RockerLaunch,
} from "./icons";
import Link from "next/link";

type NavItem = {
    icon: React.ReactNode;
    title: string;
    desc: string;
    href: string;
};

type NavDropdownProps = {
    label: string;
    items: NavItem[];
    open: boolean;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

function NavDropdown({ label, items, open, className, ...rest }: NavDropdownProps) {
    return (
        <div
            {...rest}
            className={`
                fixed left-1/2 -translate-x-1/2 top-[65px]
                w-fit max-w-[1100px]
                z-[9999] isolate
                transition-all duration-200
                ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}
                ${className}
            `}
        >
            <div className="bg-white rounded-2xl shadow-xl p-6 relative z-100">
                <p className="text-sm text-[#666666] mb-4 font-medium">{label}</p>

                <div className={`flex  gap-3`}>
                    {items.map((item, i) => (
                        <Link
                            href={item.href}
                            key={i}
                            className="flex-1 hover:bg-gray-50 p-3 rounded-lg flex gap-x-3 cursor-pointer transition"
                        >
                            <div className="shrink-0 icon-box">
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-[#666666] mt-2">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* BANNER */}
                <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                    <div className="flex gap-x-2 items-center">
                        <div className="rounded-lg bg-primary p-1.5">
                            <RockerLaunch />
                        </div>
                        <span className=" font-semibold">Want to see Derah in action?</span> <span className="text-[#666666]">Get a personalized walkthrough of our unified POS.</span>
                    </div>
                    <button className="btn btn-primary">See a Demo</button>
                </div>
            </div>
        </div>
    );
}

const productItems = [
    {
        icon: <Devices />,
        title: "Web-Based POS",
        desc: "Dedicated page for hardware-agnostic terminal.",
        href: "/product/web-based-pos",
    },
    {
        icon: <Basket />,
        title: "Online Webstore",
        desc: "Dedicated page for the eCommerce & BYO payment features.",
        href: "/product/online-webstore",
    },
    {
        icon: <ArrowClockwise />,
        title: "The Sync Ecosystem",
        desc: "Dedicated page explaining the Configure Once, Sync Everywhere technology.",
        href: "/product/sync-ecosystem",
    },
];


const solutionsItems = [
    {
        icon: <Devices />,
        title: "For Restaurants",
        desc: "Tailored features for full-service dining.",
        href: "/solutions/for-restaurant",
    },
    {
        icon: <Basket />,
        title: "For Coffee Shops",
        desc: "Optimized flows for quick-service and cafe operations.",
        href: "/solutions/for-coffee-shop",
    },

];

export default function Navbar() {
    const [openProduct, setOpenProduct] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProduct, setMobileProduct] = useState(false);
    const [mobileSolutions, setMobileSolutions] = useState(false);

    const anyOpen = openProduct || openSolutions;

    return (
        <>
            {/* ================= DESKTOP OVERLAY ================= */}
            <div
                className={`
                    fixed inset-0 bg-gradient-to-b from-black/5 to-black/20
                    transition-opacity duration-300 z-40 hidden md:block pointer-events-none
                    ${anyOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
            />

            {/* ================= NAVBAR ================= */}
            <nav className="py-4 px-3 sticky top-0 z-30 border-b border-[#66666630] bg-white w-full">
                <div className="container max-w-[1300px] mx-auto flex justify-between items-center">

                    {/* LOGO */}
                    <Link href="/">
                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[120px] md:w-[140px] h-auto object-contain"
                        />
                    </Link>
                    {/* DESKTOP MENU */}
                    <section className="hidden md:flex items-center gap-x-6">

                        {/* PRODUCT */}
                        <div
                            onMouseEnter={() => setOpenProduct(true)}
                            onMouseLeave={() => setOpenProduct(false)}
                            className="relative"
                        >
                            <button className="flex items-center gap-x-2 font-medium">
                                Product <CaretDown />
                            </button>
                        </div>

                        {/* SOLUTIONS */}
                        <div
                            onMouseEnter={() => setOpenSolutions(true)}
                            onMouseLeave={() => setOpenSolutions(false)}
                            className="relative"
                        >
                            <button className="flex items-center gap-x-2 font-medium">
                                Solutions <CaretDown />
                            </button>
                        </div>
                        <Link href="/integrations">Integrations</Link>
                        <Link href="/pricing">Pricing</Link>
                    </section>

                    {/* CTA DESKTOP */}
                    <section className="hidden md:flex gap-x-2">
                        <button className="btn">Sign in</button>
                        <button className="btn btn-primary">
                            See a Demo
                        </button>
                    </section>

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden text-xl"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            <NavDropdown onMouseEnter={() => setOpenProduct(true)} onMouseLeave={() => setOpenProduct(false)} className="min-w-6xl" label="Product" items={productItems} open={openProduct} />
            <NavDropdown onMouseEnter={() => setOpenSolutions(true)} onMouseLeave={() => setOpenSolutions(false)} className="min-w-4xl" label="Solutions" items={solutionsItems} open={openSolutions} />


            {/* ================= OVERLAY (MOBILE ONLY) ================= */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`
                    fixed inset-0 bg-black/40 backdrop-blur-sm
                    transition-opacity duration-300 z-50 md:hidden
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
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#66666630]">
                    <Link href="/">
                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[110px] h-auto"
                        />
                    </Link>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-xl"
                    >
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

                        <div
                            className={`
                                overflow-hidden transition-all duration-300
                                ${mobileProduct ? "max-h-[500px] mt-4" : "max-h-0"}
                            `}
                        >
                            <div className="flex flex-col gap-y-3">
                                {productItems.map((item, i) => (
                                    <Link
                                        href={item.href}
                                        key={i}
                                        className="flex gap-x-3 p-3 rounded-xl hover:bg-gray-50 transition"
                                    >
                                        <div className="shrink-0 icon-box">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-sm">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-[#666666]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SOLUTIONS */}
                    <div>
                        <button
                            onClick={() => setMobileSolutions(!mobileSolutions)}
                            className="flex justify-between items-center w-full text-left font-medium text-lg"
                        >
                            Solutions
                            <CaretDown
                                className={`transition-transform ${mobileSolutions ? "rotate-180" : ""}`}
                            />
                        </button>

                        <div
                            className={`
                                overflow-hidden transition-all duration-300
                                ${mobileSolutions ? "max-h-[500px] mt-4" : "max-h-0"}
                            `}
                        >
                            <div className="flex flex-col gap-y-3">
                                {solutionsItems.map((item, i) => (
                                    <Link
                                        href={item.href}
                                        key={i}
                                        className="flex gap-x-3 p-3 rounded-xl hover:bg-gray-50 transition"
                                    >
                                        <div className="shrink-0 icon-box">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-sm">{item.title}</p>
                                            <p className="text-xs text-[#666666]">{item.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="text-left text-lg font-medium">
                        Integrations
                    </button>
                    <button className="text-left text-lg font-medium">
                        Pricing
                    </button>

                    {/* CTA */}
                    <div className="mt-6 flex flex-col gap-y-3">
                        <button className="btn w-full">Sign in</button>
                        <button className="btn btn-primary w-full">
                            See a Demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}