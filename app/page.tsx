import Accordion from "@/components/accordion";
import { Basket, ChartLineUp, Crosshair, Desktop, Devices, Lightning, MopedFront, Question, Scales, SquaresFour, Steps, StoreFront } from "@/components/icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Image from "next/image";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import EmailCapture from "@/components/email-capture";
import Badge from "@/components/badge";

export default function Home() {


  const faqData = [
    {
      title: "Do I have to use a specific payment gateway?",
      content:
        "No. We operate on a Bring Your Own (BYO) payment provider model for online orders.",
    },
    {
      title: "How does the menu sync actually work?",
      content: "Menu akan sync otomatis via API atau dashboard.",
    },
    {
      title: "Does Derah support multiple restaurant locations?",
      content: "Yes, multiple locations are supported.",
    },
    {
      title: "How are online deliveries handled?",
      content: "Delivery di-handle via integrasi third-party.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-x-4 container max-w-[1300px]">
          <section className="basis-full md:basis-[calc(40%-15px)]">
            <Badge>
              <StoreFront /> All-In-One POS Software
            </Badge>

            <h1 className="text-4xl font-bold">Run Your Entire Restaurant <br />
              From Any Device.
            </h1>
            <p className="text-black/60 mt-5">Manage in-store, online, and delivery apps (Talabat, Deliveroo, Keeta) from one web-based POS. No expensive hardware required.</p>

            <EmailCapture />


            <div className="mt-20">
              <p className="font-medium text-black/60">Integrates with top delivery and payment apps.</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Image src="/img/partnership/mayatoorah.svg" width={138} height={20} alt="" />
                <Image src="/img/partnership/talabat.svg" width={95} height={20} alt="" />
                <Image src="/img/partnership/deliveroo.svg" width={74} height={20} alt="" />
                <Image src="/img/partnership/keeta.svg" width={80} height={20} alt="" />
                <Image src="/img/partnership/tap.svg" width={52} height={20} alt="" />
                <Image src="/img/partnership/payments.svg" width={91} height={20} alt="" />
              </div>
            </div>
          </section>


          <section className="basis-full md:basis-[calc(55%-15px)]">
            <Image
              src="/img/hero-section.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </section>

        </div>

        <div className="container max-w-[1300px] border-t my-12 border-[#66666630]"></div>
        {/* platform features */}
        <div className="container max-w-[1300px] mt-20">
          <section className="flex flex-col items-center">
            <Badge>
              <Desktop /> Platform Features
            </Badge>

            <h2 className="mt-4 text-[32px] font-semibold">
              One platform for your restaurant.
            </h2>

            <p className="mt-4 text-[#666666]">Manage menus, orders, and checkouts across all sales channels with a
              single cloud-based POS system.</p>



          </section>


          <Switcher
            className="mx-auto mt-4"
            options={[
              {
                label: "Omnichannel Menu Management",
                value: "Omnichannel Menu Management",
                icon: <SquaresFour color="currentColor" />,
              },
              {
                label: "Seamless Checkout & Delivery",
                value: "Seamless Checkout & Delivery",
                icon: <MopedFront />,
              },
              {
                label: "Hardware-Agnostic Operations",
                value: "Hardware-Agnostic Operations",
                icon: <Devices color="currentColor" />,
              },
            ]}
            defaultValue="pos"
          // onChange={(val) => console.log(val)}
          />
        </div>
        {/* end platform features */}

        <div className=" mt-20 bg-black py-12">
          <section className="container max-w-[1300px]">
            <Badge className="bg-[#FFFFFF1A] text-white">
              <Crosshair /> Built For Your Workflow
            </Badge>

            <h2 className="mt-4 text-[32px] font-medium text-white">
              A POS designed for how you operate.
            </h2>

            <p className="mt-3 text-[#cccccc] font-light">Whether you run a fast-paced cafe or a delivery-only kitchen, Derah adapts to your <br /> exact business model.</p>

            <div className="flex flex-wrap justify-between gap-y-4 mt-9">

              <Image src="/img/home/built-workflow/cloud-kitchen.svg" alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain basis-full" />
              <Image src="/img/home/built-workflow/cafes-quick-services.svg" alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain basis-[calc(50%-15px)]" />
              <Image src="/img/home/built-workflow/full-service-dining.svg" alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain basis-[calc(50%-15px)]" />


            </div>


            <section className="mt-28">
              <Badge className="bg-[#FFFFFF1A] text-white">
                <Lightning /> Key Advantages
              </Badge>

              <div className="flex flex-wrap justify-between">
                <section className="basis-full md:basis-[calc(50%-20px)]">
                  <h2 className="text-4xl font-medium text-white">
                    Everything you need to run a
                    high-margin restaurant.
                  </h2>

                  <div className="flex gap-x-3 mt-7 border-b border-[#ffffff37] py-5">
                    <div className="w-fit h-fit p-1 rounded-md bg-primary shadow-[inset_0px_-2px_0px_0px_#FFFFFF1A]">
                      <SquaresFour width={20} height={20} />
                    </div>

                    <div>
                      <span className="text-white">Connect front and back of house.</span>
                      <p className="text-[#999999] font-light text-sm mt-2">Eliminate paper tickets and lost orders. Send tickets straight to the Kitchen Display System (KDS) for faster prep times.</p>


                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 border-b border-[#ffffff37] py-5">
                    <div className="w-fit h-fit p-1 rounded-md bg-[#FFFFFF29] shadow-[inset_0px_-2px_0px_0px_#FFFFFF1A]">
                      <Scales width={20} height={20} />
                    </div>

                    <div>
                      <span className="text-white">Know your stock levels down to the last gram.</span>

                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 border-b border-[#ffffff37] py-5">
                    <div className="w-fit h-fit p-1 rounded-md bg-[#FFFFFF29] shadow-[inset_0px_-2px_0px_0px_#FFFFFF1A]">
                      <ChartLineUp width={20} height={20} />
                    </div>

                    <div>
                      <span className="text-white">Data-driven decisions.</span>

                    </div>
                  </div>
                </section>

                <section className="basis-full md:basis-[calc(50%-20px)] pt-10">
                  <p className="text-[#cccccc] font-light"> Automate your daily operations and make smarter decisions without switching between different apps.</p>

                  <Image src="/img/home/mark-order-ready.svg" alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain basis-full mt-6" />
                </section>
              </div>
            </section>

          </section>
        </div>


        <div className="mt-20">
          <section className="container max-w-[1300px] border-b border-[#66666630] pb-9">
            <div className="bg-[#0000000A] p-10 rounded-2xl">
              <Badge className="bg-white">
                <Steps /> Platform Features
              </Badge>

              <h2 className="mt-4 text-[32px] font-semibold">
                Set up once. Sell everywhere.
              </h2>

              <p className="mt-4 text-[#666666]">Launch your omnichannel restaurant operations in three straightforward steps.
              </p>

              <div className="mt-6 flex gap-y-4 justify-between flex-wrap">
                <Image
                  src="/img/home/how-it-works/step-1.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain basis-full md:basis-[calc(33%-12px)]"
                />
                <Image
                  src="/img/home/how-it-works/step-2.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain basis-full md:basis-[calc(33%-12px)]"
                />
                <Image
                  src="/img/home/how-it-works/step-3.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain basis-full md:basis-[calc(33%-12px)]"
                />
              </div>
            </div>



          </section>


          <section className="container mt-12">
            <div className="flex flex-col items-center ">
              <div className="text-center">
                <Badge className="mx-auto">
                  <Question /> Frequently Asked Questions
                </Badge>

                <h2 className="mt-4 text-[32px] font-semibold">
                  Everything you need to know.
                </h2>

                <Accordion className="mt-10" items={faqData} />
              </div>

            </div>
          </section>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
