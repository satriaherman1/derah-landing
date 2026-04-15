import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { CellTower, ShoppingBagOpen, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import ImageWithSkeleton from "@/components/image-with-skeleton";

export default function SyncEcosystem() {
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="flex gap-y-12 flex-wrap flex-col-reverse md:flex-row md:items-center justify-between gap-x-4 container max-w-[1300px]">
                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                    <Badge>
                        <StoreFront /> Omnichanel Menu Sync
                    </Badge>

                    <h1 className="text-4xl font-bold mt-4 ">Own your online sales. <br /> Commission-free.
                    </h1>
                    <p className="text-black/60 mt-5">Launch a fully branded customer webstore. Sync your menu, process BYO payments, and dispatch orders automatically without relying on expensive third-party apps.</p>

                    <EmailCapture />


                </section>


                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">

                </section>

            </div>


            <section className="container max-w-[1300px] mt-26 border-t border-[#66666630] py-12">
                <div className="text-center ">
                    <div className="flex flex-col gap-y-4 mx-auto">
                        <Badge className="mx-auto">
                            <CellTower /> Seamless Distribution
                        </Badge>
                        <h2 className="text-3xl font-bold">Instantly live across all your platforms.</h2>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 mt-12">
                    <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                        <ImageWithSkeleton
                            src="/img/sync-ecosystem/seamless-dist-1.svg"
                            alt="Seamless Distribution 1"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />
                    </section>

                    <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                        <ImageWithSkeleton
                            src="/img/sync-ecosystem/seamless-dist-2.svg"
                            alt="Seamless Distribution 2"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />
                    </section>

                    <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                        <ImageWithSkeleton
                            src="/img/sync-ecosystem/seamless-dist-3.svg"
                            alt="Seamless Distribution 3"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />
                    </section>
                </div>
            </section>
        </main>
        <CTA />
        <Footer />
    </>)
}