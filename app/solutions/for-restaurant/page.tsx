import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { CellTower, Robot, ShoppingBagOpen, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import ImageWithSkeleton from "@/components/image-with-skeleton";

export default function ForRestaurant() {
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="text-center container max-w-[1300px]">
                <div className="flex flex-col gap-y-4 mx-auto">
                    <Badge className="mx-auto">
                        <ShoppingBagOpen /> For Restaurant
                    </Badge>
                    <h2 className="text-3xl font-bold">The web-based POS for high-volume restaurants.</h2>
                    <p className="text-black/60">Streamline complex menus, track exact food costs, and manage your entire front and back-of-house operations on one unified platform.</p>


                    <EmailCapture className="mx-auto" />

                    <div className="rounded-lg mt-8 overflow-hidden w-full">
                        <ImageWithSkeleton
                            src="/img/for-restaurant/banner.svg"
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
                            <Robot /> Back Office Automation
                        </Badge>
                        <h2 className="text-3xl font-bold">Run your back-of-house on autopilot.</h2>
                        <p className="text-black/60">Automate inventory tracking, kitchen routing, and supplier purchasing without switching between fragmented systems.</p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 mt-12">
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-restaurant/back-office-1.svg"
                            alt="Exact BOM Management"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Exact BOM Management</h3>
                            <p className="text-black/60 mt-4">Attach full recipes to menus. Deduct raw ingredients down to the gram with every sale.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-restaurant/back-office-2.svg"
                            alt="Prevent Food Waste"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Prevent Food Waste</h3>
                            <p className="text-black/60 mt-4">Monitor live stock balances, log daily waste, and generate variance reports to protect margins.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-restaurant/back-office-3.svg"
                            alt="Unified Kitchen Queue"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Unified Kitchen Queue</h3>
                            <p className="text-black/60 mt-4">Stop losing paper tickets. Route dine-in and delivery orders to one screen seamlessly.</p>
                        </div>
                    </section>
                    <section>
                        <ImageWithSkeleton
                            src="/img/for-restaurant/back-office-4.svg"
                            alt="Direct Purchasing"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />

                        <div className="mt-4">

                            <h3 className="text-xl font-semibold ">Direct Purchasing</h3>
                            <p className="text-black/60 mt-4">Create purchase orders and manage restaurant suppliers directly from your central dashboard.</p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <CTA />
        <Footer />
    </>)
}