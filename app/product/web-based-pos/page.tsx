import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { Cloud, CreditCard, Package, ShoppingBagOpen, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import Image from "next/image";
import EmailCapture from "@/components/email-capture";
import Badge from "@/components/badge";

export default function WebBasedPos() {
    return (
        <>
            <Navbar />
            <main className="mt-6 md:mt-16">
                <div className="flex gap-y-12 flex-wrap flex-col-reverse md:flex-row md:items-center justify-between gap-x-4 container max-w-[1300px]">
                    <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                        <Badge>
                            <StoreFront /> All-In-One POS Software
                        </Badge>

                        <h1 className="text-4xl font-bold mt-4 ">Web-Based Restaurant POS & Omnichannel Platform
                        </h1>
                        <p className="text-black/60 mt-5">Stop jumping between fragmented systems. Manage your POS, customer webstore, and back-office operations from one powerful admin dashboard.</p>

                        <EmailCapture />


                    </section>


                    <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                        <Image
                            src="/img/web-based-pos/image-1.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />
                    </section>

                </div>

                <div className="container max-w-[1300px] border-t border-[#66666630] my-20 py-16">
                    <div className="">
                        <div className="flex flex-col gap-y-4 ">
                            <Badge >
                                <Cloud /> Omnichannel Sync
                            </Badge>
                            <h2 className="text-3xl font-bold">Your entire catalog perfectly synced.</h2>
                            <p className="text-black/60">Connect your in-store registers directly with your custom webstore and third-party delivery partners in one seamless loop.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 mt-12">
                            <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                                <Image
                                    src="/img/web-based-pos/omnichannel-sync-1.svg"
                                    alt="Logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-contain"
                                />
                            </section>

                            <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                                <Image
                                    src="/img/web-based-pos/omnichannel-sync-2.svg"
                                    alt="Logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-contain"
                                />
                            </section>

                            <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                                <Image
                                    src="/img/web-based-pos/omnichannel-sync-3.svg"
                                    alt="Logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-contain"
                                />
                            </section>
                        </div>

                    </div>

                </div>
                <div className="container max-w-[1300px] border-t border-[#66666630] my-20 py-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="flex flex-col gap-y-4 mx-auto">
                            <Badge className="mx-auto">
                                <Package /> Catalog Management
                            </Badge>
                            <h2 className="text-3xl font-bold">Real-time restaurant inventory tracking.</h2>
                            <p className="text-black/60"> Automate your back-of-house. Track ingredients down to the gram, monitor daily waste, and get low-stock alerts before you run out of your best-sellers.</p>
                        </div>

                    </div>

                    <div className="space-y-20">

                        {/* SECTION 1 */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                            {/* TEXT */}
                            <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-1">
                                <h3 className="text-2xl font-bold">
                                    Track stock levels in real-time.
                                </h3>
                                <p className="text-black/60">
                                    Automate your back-of-house operations. Monitor real-time stock balances, log daily waste, and generate accurate variance reports to protect your margins.
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
                                    Stream every order into a single queue.
                                </h3>
                                <p className="text-black/60">
                                    Stop losing paper tickets. Track the exact lifecycle of every omnichannel order—from Open to Completed—with real-time streaming and status updates on one unified screen.
                                </p>
                            </div>
                        </section>


                        {/* SECTION 3 */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">

                            {/* TEXT */}
                            <div className="flex flex-col gap-y-4 max-w-md mx-auto order-2 md:order-1">
                                <h3 className="text-2xl font-bold">
                                    Control multiple locations independently.
                                </h3>
                                <p className="text-black/60">
                                    Manage all your branches from one login. Override prices, adjust product availability, set scheduled pricing for happy hours, and apply automatic markups for specific delivery channels.
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



                </div>

                <div className="container max-w-[1300px] border-t border-[#66666630] mt-20 py-16">
                    <div className="">
                        <div className="flex flex-col gap-y-4">
                            <Badge >
                                <CreditCard /> Flexible Ecosystem
                            </Badge>
                            <h2 className="text-3xl font-bold">Connect the tools you already rely on.</h2>
                            <p className="text-black/60">No vendor lock-in. Plug your preferred payment processors and delivery logistics directly into your dashboard for a seamless operational flow.</p>
                        </div>

                        <div className="flex justify-between gap-y-6 flex-wrap mt-12">

                            <Image
                                src="/img/web-based-pos/flexible-eco-1.svg"
                                alt="Feature 5"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain basis-full"
                            />

                            <Image
                                src="/img/web-based-pos/flexible-eco-2.svg"
                                alt="Feature 5"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain basis-full md:basis-[calc(50%-15px)]"
                            />
                            <Image
                                src="/img/web-based-pos/flexible-eco-3.svg"
                                alt="Feature 5"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-contain basis-full md:basis-[calc(50%-15px)]"
                            />
                        </div>
                    </div>

                </div>



            </main>
            <CTA />
            <Footer />
        </>
    )
}