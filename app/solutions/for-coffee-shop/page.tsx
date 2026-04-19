import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { CellTower, Robot, ShoppingBagOpen, StoreFront, TreeStructure } from "@/components/icons";
import Navbar from "@/components/navbar";
import ImageWithSkeleton from "@/components/image-with-skeleton";

export default function ForCoffeeShop() {
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="text-center container max-w-[1300px]">
                <div className="flex flex-col gap-y-4 mx-auto">
                    <Badge className="mx-auto">
                        <ShoppingBagOpen /> Coffe Shops & Cafes
                    </Badge>
                    <h2 className="text-3xl font-bold">The lightning-fast POS for coffee shops.</h2>
                    <p className="text-black/60">Clear the morning rush faster. Process orders in seconds, manage complex drink modifiers, and keep your barista queue moving seamlessly.</p>


                    <EmailCapture className="mx-auto" />

                    <div className="rounded-lg mt-8 overflow-hidden w-full h-[700px] ">
                        <ImageWithSkeleton
                            src="/img/for-coffee-shop/banner.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>

            <section className="container max-w-[1300px] mt-26 border-t border-[#66666630] py-12">
                <div className="text-center ">
                    <div className="flex flex-col gap-y-4 mx-auto">
                        <Badge className="mx-auto">
                            <TreeStructure /> Front of House Workflow
                        </Badge>
                        <h2 className="text-3xl font-bold">Built to clear lines faster.</h2>
                        <p className="text-black/60">Optimize your checkout flow to handle high order volumes without sacrificing accuracy or customer experience.</p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 mt-12">
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-coffee-shop/front-workflow-1.svg"
                            alt="1-Click Modifiers"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">1-Click Modifiers</h3>
                            <p className="text-black/60 mt-4">Customize orders instantly. Add extra espresso shots, milk alternatives, or syrups with zero friction.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-coffee-shop/front-workflow-2.svg"
                            alt="Rapid Checkouts"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Rapid Checkouts</h3>
                            <p className="text-black/60 mt-4">Accept integrated tap-to-pay, mobile wallets, and split payments to keep the line moving during peak hours.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-coffee-shop/front-workflow-3.svg"
                            alt="Name-Based Routing"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Name-Based Routing</h3>
                            <p className="text-black/60 mt-4">Assign customer names to orders. Send tickets directly to the barista display system for accurate handoffs.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-coffee-shop/front-workflow-4.svg"
                            alt="Offline Reliability"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Offline Reliability</h3>
                            <p className="text-black/60 mt-4">Never stop selling. Continue taking orders and processing cash transactions even if your internet drops.</p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <CTA />
        <Footer />
    </>)
}