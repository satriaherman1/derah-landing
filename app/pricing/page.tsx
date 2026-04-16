import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { CellTower, Robot, ShoppingBagOpen, StoreFront, TagChevron, TreeStructure } from "@/components/icons";
import Navbar from "@/components/navbar";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import PricingCards from "@/components/fragments/pricing-card";
import CompareFeatures from "@/components/fragments/compare-features";

export default function Pricing() {
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="text-center container max-w-[1300px]">
                <div className="flex flex-col gap-y-4 mx-auto">
                    <Badge className="mx-auto">
                        <TagChevron /> Coffe Shops & Cafes
                    </Badge>
                    <h2 className="text-4xl font-bold">Simple pricing for any restaurant size.</h2>
                    <p className="text-black/60 text-lg">Start with what you need. Upgrade as your operations grow. No hidden fees.</p>



                </div>

            </div>

            <section className="container max-w-[1300px] mt-5 border-[#66666630] py-12">
                <PricingCards />
                <CompareFeatures />
            </section>
        </main>
        <CTA />
        <Footer />
    </>)
}