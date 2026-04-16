// components/PricingCards.tsx

const plans = [
    {
        name: "Free",
        price: "0",
        featured: false,
        buttonStyle: "border",
        features: [
            "15 Products",
            "2 Team members",
            "eCommerce",
            "Payment gateways",
            "Armada delivery",
        ],
    },
    {
        name: "Growth",
        price: "19.9",
        featured: true,
        buttonStyle: "primary",
        features: [
            "Unlimited Products",
            "10 Team members",
            "2 POS branches",
            "POS & Inventory included",
            "Delivery aggregators",
        ],
    },
    {
        name: "Business",
        price: "49.9",
        featured: false,
        buttonStyle: "dark",
        features: [
            "Unlimited Products & Team",
            "Unlimited POS branches",
            "Advanced pricing & Financials",
            "Food cost tracking",
            "All Growth features",
        ],
    },
];

const CheckIcon = () => (
    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
        <svg
            className="h-2.5 w-2.5 text-primary"
            viewBox="0 0 10 8"
            fill="none"
        >
            <polyline
                points="1,4 4,7 9,1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

export default function PricingCards() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
                <div
                    key={plan.name}
                    className={`relative flex flex-col gap-4 rounded-2xl bg-white p-6 ${plan.featured
                        ? "border-2 border-orange-500"
                        : "border border-gray-200"
                        }`}
                >
                    {/* Most Popular Badge */}
                    {plan.featured && (
                        <span className="absolute top-3.5 right-3.5 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white whitespace-nowrap">
                            Most Popular
                        </span>
                    )}

                    {/* Price */}
                    <div>
                        <p className="text-lg font-medium text-gray-900 font-semibold">{plan.name}</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-medium text-gray-900">
                                {plan.price}
                            </span>
                            <span className="text-sm text-black/60 font-semibold">KWD /location/month</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-black/60 leading-relaxed">
                        Everything you need to run a single physical store and start selling
                        online.
                    </p>


                    <hr className="border-black/10" />


                    {/* CTA Button */}
                    <button
                        className={`w-full rounded-lg  text-sm font-medium transition-opacity hover:opacity-90 btn-md ${plan.buttonStyle === "primary"
                            ? "btn-primary"
                            : plan.buttonStyle === "dark"
                                ? "btn-dark"
                                : "btn-gray"
                            }`}
                    >
                        Get Started
                    </button>

                    <hr className="border-black/10" />

                    {/* Features */}
                    <div>
                        <p className="mb-3 text-sm font-medium text-[#666666]">
                            Features :
                        </p>
                        <ul className="flex flex-col gap-2.5">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2.5 text-sm text-[#666666]">
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}