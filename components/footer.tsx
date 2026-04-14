import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, TwitterX } from './icons';

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-8 bg-white border-t border-[#66666630]">
            {/* Massive DERAH Background Text */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0 overflow-hidden select-none flex justify-center items-end h-[300px]">
                <Image src="/img/derah-wording.svg" alt="Derah Background" width={1200} height={360} className="mb-6" />
            </div>

            <div className="container max-w-[1300px] mx-auto px-4 lg:px-0 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between mb-24 lg:mb-32">

                    <div className="lg:w-1/3 mb-12 lg:mb-0">
                        <Image src="/img/logo.svg" alt="Derah Logo" width={120} height={36} className="mb-6" />
                        <p className="text-[#666666] text-sm leading-relaxed max-w-xs">
                            The all-in-one web-based POS and omnichannel platform built strictly for modern F&B businesses.
                        </p>
                        <div className="flex items-center gap-x-4 mt-4 h-6">
                            {/* Media icons requested to be blank */}
                            <Link href="#"><Facebook /></Link>
                            <Link href="#"><Instagram /></Link>
                            <Link href="#"><Linkedin /></Link>
                            <Link href="#"><TwitterX /></Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap gap-x-12 md:gap-x-24 gap-y-10 lg:pl-10">
                        <div>
                            <h4 className="font-semibold text-black mb-5 text-[15px]">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Integrations</Link></li>
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Pricing</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-black mb-5 text-[15px]">Company</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">About us</Link></li>
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Careers</Link></li>
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Contact Sales</Link></li>
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Partners</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-black mb-5 text-[15px]">Contact & Support</h4>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">Help Center</Link></li>
                                <li><Link href="#" className="text-sm text-[#666666] hover:text-black transition-colors">API Documentation</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[13px] text-[#666666] pt-6 border-transparent">
                    <p>© 2026 Derah. All rights reserved.</p>
                    <div className="flex gap-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
