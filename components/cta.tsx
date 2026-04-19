import React from 'react';
import EmailCapture from './email-capture';

const CTA = () => {
    return (
        <div
            className="w-full relative overflow-hidden py-24 mt-20 px-3 md:px-0"
            style={{
                backgroundImage: `url('/img/cta-bg.svg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            {/* Background Star & Plus Details */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Dots */}
                <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white rounded-full opacity-40"></div>
                <div className="absolute top-[40%] left-[30%] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-30"></div>
                <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-20 blur-[1px]"></div>
                <div className="absolute bottom-[30%] left-[45%] w-1 h-1 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                <div className="absolute bottom-[20%] right-[35%] w-1 h-1 bg-white rounded-full opacity-60 blur-[0.5px]"></div>
                <div className="absolute top-[50%] right-[15%] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-30"></div>
                <div className="absolute top-[60%] left-[60%] w-1 h-1 bg-white rounded-full opacity-50"></div>

                {/* Crosses (+) */}
                <div className="absolute top-[30%] left-[40%] text-white/30 text-xs font-light select-none">+</div>
                <div className="absolute bottom-[35%] left-[25%] text-white/30 text-xs font-light select-none">+</div>
                <div className="absolute top-[30%] right-[40%] text-white/30 text-xs font-light select-none">+</div>
                <div className="absolute bottom-[40%] right-[10%] text-white/30 text-xs font-light select-none">+</div>
                <div className="absolute top-[15%] right-[10%] text-white/30 text-xs font-light select-none">+</div>
            </div>

            <div className="container max-w-[1300px] mx-auto px-4 lg:px-0 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-white text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight">
                        One cloud-based POS system <br className="hidden md:block" />
                        to run your entire F&B brand.
                    </h2>
                </div>

                <div className="w-fit flex flex-col justify-end">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                        Ditch the fragmented tools and hidden fees. Experience <br className="hidden lg:block" />
                        the most powerful web-based POS built strictly for the <br className="hidden lg:block" />
                        F&B industry. Set up in minutes.
                    </p>

                    <EmailCapture
                        className="border-transparent"
                        buttonClassName="bg-primary border-none hover:bg-[#D64431] text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTA;
