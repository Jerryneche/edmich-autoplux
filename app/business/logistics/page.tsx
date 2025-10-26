import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import {
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LogisticsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-neutral-50 to-white min-h-screen">
      <Header />

      <Hero
        image="/hero-logistics.jpg"
        title="Logistics Network"
        subtitle="Arrange delivery and transport for parts anywhere in Nigeria."
        primaryCta={{
          label: "Request Delivery",
          href: "/business/logistics/request",
        }}
        secondaryCta={{
          label: "Track Order",
          href: "/business/logistics/track",
        }}
      />

      {/* How It Works Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
              <TruckIcon className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Fast & Reliable
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              How Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Logistics
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient delivery for all your auto
              parts
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: MapPinIcon,
                title: "Pick Location",
                description: "Enter pickup and delivery addresses",
                color: "blue",
              },
              {
                step: "02",
                icon: CurrencyDollarIcon,
                title: "Get Quote",
                description: "Instant pricing based on distance",
                color: "purple",
              },
              {
                step: "03",
                icon: TruckIcon,
                title: "Book Delivery",
                description: "Confirm and schedule your delivery",
                color: "green",
              },
              {
                step: "04",
                icon: ClockIcon,
                title: "Track Live",
                description: "Real-time tracking until delivery",
                color: "orange",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-neutral-300 to-neutral-200"></div>
                )}

                <div className="relative bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-green-300 hover:shadow-xl transition-all group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>

                  <div
                    className={`w-14 h-14 bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 rounded-xl flex items-center justify-center mb-4 mt-4`}
                  >
                    <step.icon className={`h-7 w-7 text-${step.color}-600`} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-16">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Delivery Service
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Insured Deliveries",
                description:
                  "All shipments are fully insured against damage or loss during transit.",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: ClockIcon,
                title: "Same-Day Delivery",
                description:
                  "Order before 12 PM for same-day delivery within Lagos and major cities.",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: MapPinIcon,
                title: "Nationwide Coverage",
                description:
                  "We deliver to all 36 states in Nigeria with reliable local partners.",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: TruckIcon,
                title: "Real-Time Tracking",
                description:
                  "Track your delivery live with GPS and get instant notifications.",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                icon: CurrencyDollarIcon,
                title: "Transparent Pricing",
                description:
                  "No hidden fees. Get instant quotes and pay only what you see.",
                gradient: "from-cyan-500 to-cyan-600",
              },
              {
                icon: PhoneIcon,
                title: "24/7 Support",
                description:
                  "Our customer support team is always available to help you.",
                gradient: "from-pink-500 to-pink-600",
              },
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-green-300 hover:shadow-xl transition-all">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Simple{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-neutral-600">
              Distance-based rates with no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Local Delivery",
                price: "₦2,500",
                description: "Within city limits",
                features: [
                  "Same-day delivery",
                  "Up to 50kg",
                  "Basic insurance",
                  "SMS tracking",
                ],
              },
              {
                title: "Interstate",
                price: "₦8,500",
                description: "Between states",
                features: [
                  "1-3 day delivery",
                  "Up to 100kg",
                  "Full insurance",
                  "GPS tracking",
                ],
                popular: true,
              },
              {
                title: "Express",
                price: "₦15,000",
                description: "Priority nationwide",
                features: [
                  "Next-day delivery",
                  "Up to 200kg",
                  "Premium insurance",
                  "Live tracking",
                ],
              },
            ].map((plan, i) => (
              <div key={i} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`bg-white rounded-2xl p-8 border-2 ${
                    plan.popular
                      ? "border-green-500 shadow-2xl scale-105"
                      : "border-neutral-200"
                  } hover:shadow-xl transition-all`}
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-neutral-900">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600"> / starting</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/business/logistics/request"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg"
                        : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    }`}
                  >
                    Get Started
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <TruckIcon className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Ship Your Parts?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get instant quotes, book deliveries, and track your shipments all in
            one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business/logistics/request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Request Delivery Now
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/business/logistics/track"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-800/50 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-green-800/70 transition-all"
            >
              Track Existing Order
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
