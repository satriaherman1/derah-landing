import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { ShoppingBagOpen, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function OnlineWebStore() {
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="flex gap-y-12 flex-wrap flex-col-reverse md:flex-row md:items-center justify-between gap-x-4 container max-w-[1300px]">
                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                    <Badge>
                        <StoreFront /> Commission Free Online Ordering
                    </Badge>

                    <h1 className="text-4xl font-bold mt-4 ">Own your online sales. <br /> Commission-free.
                    </h1>
                    <p className="text-black/60 mt-5">Launch a fully branded customer webstore. Sync your menu, process BYO payments, and dispatch orders automatically without relying on expensive third-party apps.</p>

                    <EmailCapture />


                </section>


                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                    <Image
                        src="/img/online-webstore/image-1.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                    />
                </section>

            </div>


            <section className="container max-w-[1300px] mt-26 border-t border-[#66666630] py-12">
                <div className="text-center ">
                    <div className="flex flex-col gap-y-4 mx-auto">
                        <Badge className="mx-auto">
                            <ShoppingBagOpen /> Seamless Customer Experience
                        </Badge>
                        <h2 className="text-3xl font-bold">Built for fast, high-converting checkouts.</h2>
                        <p className="text-black/60">Everything your guests need to browse, customize, and order effortlessly.</p>
                    </div>

                </div>

                <div className="space-y-20">

                    {/* SECTION 1 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                        {/* TEXT */}
                        <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-1">
                            <h3 className="text-2xl font-bold">
                                Smart Search & Menu Filtering
                            </h3>
                            <p className="text-black/60">
                                Let guests navigate your menu instantly with dynamic category filters, dietary tags, and lightning-fast search capabilities.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="flex flex-col gap-y-4 order-1 md:order-2">
                            <Image
                                src="/img/online-webstore/image-2.svg"
                                alt="Feature 1"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </section>


                    {/* SECTION 2 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                        {/* IMAGE */}
                        <div className="flex flex-col gap-y-4 order-1 md:order-1">
                            <Image
                                src="/img/online-webstore/image-3.svg"
                                alt="Feature 2"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-2">
                            <h3 className="text-2xl font-bold">
                                Advanced modifiers & order customization
                            </h3>
                            <p className="text-black/60">
                                Increase average order value with nested modifiers. Let customers easily customize their meals with mandatory choices, optional add-ons, and special instructions.
                            </p>
                        </div>
                    </section>


                    {/* SECTION 3 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                        {/* TEXT */}
                        <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-1">
                            <h3 className="text-2xl font-bold">
                                Interactive map-based address picker
                            </h3>
                            <p className="text-black/60">
                                Eliminate delivery errors. Allow customers to pinpoint their exact location using an interactive map, ensuring your drivers always reach the right destination.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="flex flex-col gap-y-4 order-1 md:order-2">
                            <Image
                                src="/img/online-webstore/image-4.svg"
                                alt="Feature 3"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </section>


                    {/* SECTION 4 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                        {/* IMAGE */}
                        <div className="flex flex-col gap-y-4 order-1 md:order-1">
                            <Image
                                src="/img/online-webstore/image-5.svg"
                                alt="Feature 4"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-2">
                            <h3 className="text-2xl font-bold">
                                Flexible delivery & pickup scheduling
                            </h3>
                            <p className="text-black/60">
                                Capture orders around the clock. Give customers the freedom to order for ASAP delivery, or schedule their meals for specific dates and times in the future.
                            </p>
                        </div>
                    </section>

                </div>
            </section>
        </main>
        <CTA />
        <Footer />
    </>)
}