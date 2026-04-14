import React from 'react';

interface EmailCaptureProps {
    className?: string;
    inputClassName?: string;
    buttonClassName?: string;
}

export default function EmailCapture({
    className = "border-[#0000001A]",
    inputClassName = "",
    buttonClassName = "",
}: EmailCaptureProps) {
    return (
        <section className={`flex p-1 rounded-lg border bg-white w-full max-w-full md:w-fit shadow-soft mt-8 ${className}`}>
            <input
                type="text"
                className={`bg-transparent px-3 py-2 outline-0 text-black w-full min-w-0 md:min-w-[260px] flex-1 text-sm ${inputClassName}`}
                placeholder="Enter your work email"
            />
            <button className={`btn btn-primary whitespace-nowrap ${buttonClassName}`}>
                Get Started
            </button>
        </section>
    );
}
