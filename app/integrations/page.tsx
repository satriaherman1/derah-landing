import Badge from "@/components/badge";
import CTA from "@/components/cta";
import EmailCapture from "@/components/email-capture";
import Footer from "@/components/footer";
import { CellTower, CreditCard, Moped, PuzzlePiece, ShoppingBagOpen, SquaresFour, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import SearchBox from "@/components/search-box";
import IntegrationList from "@/components/fragments/integration-list";
import IntegrationLayout from "@/components/fragments/integration-list";

export default function Integrations() {


    const sections = [
        {
            key: "food",
            icon: <StoreFront width={20} height={20} color="currentColor" />,
            title: "Food Aggregators",
            description:
                "Sync your menu and pull orders directly from top third-party platforms into your POS.",
            items: [
                {
                    title: "Talabat",
                    description: "Sync menus and orders directly to your POS.",
                    imageUrl: "/img/integrations/talabat.svg",
                },
                {
                    title: "Deliveroo",
                    description: "Manage delivery listings and orders.",
                    imageUrl: "/img/integrations/deliveroo.svg",
                },
                {
                    title: "Keeta",
                    description: "Automate order acceptance and updates.",
                    imageUrl: "/img/integrations/keeta.svg",
                },
                {
                    title: "Jahez",
                    description:
                        "Sync delivery orders into your unified kitchen engine.",
                    imageUrl: "/img/integrations/jahez.svg",
                },
            ],
        },
        {
            key: "delivery",
            icon: <Moped width={20} height={20} color="currentColor" />,
            title: "Delivery & Logistics",
            description: "Automate your last-mile delivery workflows.",
            items: [
                {
                    title: "Armada",
                    description: "Dispatch orders automatically.",
                    imageUrl: "/img/integrations/armada.svg",
                },
            ],
        },
        {
            key: "payment",
            icon: <CreditCard width={20} height={20} color="currentColor" />,
            title: "Payment Gateways",
            description: "Process online payments securely.",
            items: [
                {
                    title: "Tap Payments",
                    description: "Accept cards globally.",
                    imageUrl: "/img/integrations/tap-payments.svg",
                },
                {
                    title: "Hesabe",
                    description: "Fast checkout integration.",
                    imageUrl: "/img/integrations/hesabe.svg",
                },
                {
                    title: "MyFatoorah",
                    description: "Track transactions easily.",
                    imageUrl: "/img/integrations/my-fatoorah.svg",
                },
                {
                    title: "Upayment",
                    description: "Local payment options.",
                    imageUrl: "/img/integrations/upayment.svg",
                },
            ],
        },
    ];
    return (<>

        <Navbar />
        <main className="mt-6 md:mt-16">
            <div className="flex gap-y-12 flex-wrap flex-col-reverse md:flex-row md:items-end justify-between gap-x-4 container max-w-[1300px]">
                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0">
                    <Badge>
                        <PuzzlePiece /> Connect Your Tools
                    </Badge>

                    <h1 className="text-4xl font-bold mt-4 ">Intergrations
                    </h1>
                    <p className="text-black/60 mt-5">Clear the morning rush faster. Process orders in seconds, manage complex drink modifiers, and keep your barista queue moving seamlessly.</p>




                </section>


                <section className="basis-full w-full md:w-auto md:basis-[calc(50%-15px)] min-w-0 flex justify-end">
                    <SearchBox />
                </section>

            </div>

            <div className="container max-w-[1300px] border-t border-[#66666630] py-16 mt-16">

                <IntegrationLayout allIcon={<SquaresFour width={20} height={20} color="currentColor" />} sections={sections} />
            </div>

        </main>
        <CTA />
        <Footer />
    </>)
}