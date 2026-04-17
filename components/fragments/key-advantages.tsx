"use client";
import React, { useState } from "react";
import Badge from "../badge";
import { ChartLineUp, Lightning, Scales, SquaresFour } from "../icons";
import ImageWithSkeleton from "../image-with-skeleton";

const ADVANTAGES = [
    {
        title: "Connect front and back of house.",
        description: "Eliminate paper tickets and lost orders. Send tickets straight to the Kitchen Display System (KDS) for faster prep times.",
        icon: SquaresFour,
        image: "/img/home/key-advantages/key-advantages-1.svg",
    },
    {
        title: "Know your stock levels down to the last gram.",
        description: "Track ingredients down to the last gram. Get real-time alerts when supplies run low so you never run out of a popular dish.",
        icon: Scales,
        image: "/img/home/key-advantages/key-advantages-2.svg",
    },
    {
        title: "Data-driven decisions.",
        description: "Stop guessing. View your most profitable menu items, peak hours, and staff performance in a simple dashboard.",
        icon: ChartLineUp,
        image: "/img/home/key-advantages/key-advantages-3.svg", // Placeholder as no 3rd image found
    },
];

export default function KeyAdvantages({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={className}>
            <Badge className="bg-[#FFFFFF1A] text-white">
                <Lightning /> Key Advantages
            </Badge>

            <div className="flex flex-wrap justify-between">
                <section className="basis-full md:basis-[calc(50%-20px)]">
                    <h2 className="text-4xl font-medium text-white mb-7">
                        Everything you need to run a
                        high-margin restaurant.
                    </h2>

                    {ADVANTAGES.map((advantage, index) => {
                        const Icon = advantage.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex gap-x-3 border-b border-[#ffffff37] py-5 cursor-pointer transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
                            >
                                <div className={`w-fit h-fit p-1 rounded-md transition-colors duration-300 ${isActive ? "bg-primary" : "bg-[#FFFFFF29]"} shadow-[inset_0px_-2px_0px_0px_#FFFFFF1A]`}>
                                    <Icon width={25} height={25} color="currentColor" className="text-white" />
                                </div>

                                <div>
                                    <span className={`transition-colors duration-300 ${isActive ? "text-white font-medium" : "text-[#999999]"}`}>{advantage.title}</span>
                                    {isActive && advantage.description && (
                                        <p className="text-[#999999] font-light text-sm mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
                                            {advantage.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </section>

                <section className="basis-full md:basis-[calc(50%-20px)] pt-10 flex flex-col-reverse md:flex-col gap-y-4">
                    <p className="text-[#cccccc] font-light">
                        Automate your daily operations and make smarter decisions without switching between different apps.
                    </p>

                    <div className="relative mt-6">
                        <ImageWithSkeleton
                            key={activeIndex}
                            src={ADVANTAGES[activeIndex].image}
                            alt={ADVANTAGES[activeIndex].title}
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain basis-full animate-in fade-in zoom-in-95 duration-500"
                        />
                    </div>
                </section>
            </div>
        </section>
    );
}