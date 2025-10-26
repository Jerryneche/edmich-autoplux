import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import {
  WrenchScrewdriverIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
  CheckBadgeIcon,
  PhoneIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import Link from "next/link";

// Mock mechanic data - replace with real API data later
const featuredMechanics = [
  {
    id: 1,
    name: "Emmanuel Okafor",
    specialty: "Engine Specialist",
    rating: 4.9,
    reviews: 156,
    experience: "12 years",
    location: "Lagos, VI",
    hourlyRate: "₦8,000",
    verified: true,
    available: true,
  },
  {
    id: 2,
    name: "Chioma Adewale",
    specialty: "Electrical Systems",
    rating: 4.8,
    reviews: 203,
    experience: "9 years",
    location: "Abuja, Garki",
    hourlyRate: "₦7,500",
    verified: true,
    available: true,
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    specialty: "Transmission Expert",
    rating: 5.0,
    reviews: 89,
    experience: "15 years",
    location: "Lagos, Ikeja",
    hourlyRate: "₦9,000",
    verified: true,
    available: false,
  },
  {
    id: 4,
    name: "Blessing Eze",
    specialty: "Brake & Suspension",
    rating: 4.7,
    reviews: 124,
    experience: "7 years",
    location: "Port Harcourt",
    hourlyRate: "₦6,500",
    verified: true,
    available: true,
  },
];

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: "General Repairs",
    description: "Complete vehicle diagnostics and repairs",
    color: "blue",
  },
  {
    icon: ClockIcon,
    title: "Maintenance",
    description: "Regular servicing and oil changes",
    color: "green",
  },
  {
    icon: ShieldCheckIcon,
    title: "Inspections",
    description: "Pre-purchase and safety checks",
    color: "purple",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Custom Work",
    description: "Modifications and upgrades",
    color: "orange",
  },
];

export default function MechanicsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-neutral-50 to-white min-h-screen">
      <Header />

      <Hero
        image="/hero-mechanics.jpg"
        title="Certified Mechanics"
        subtitle="Book trusted experts for repairs and installations."
        primaryCta={{
          label: "Book a Mechanic",
          href: "/business/mechanics/booking",
        }}
        secondaryCta={{ label: "View All Profiles", href: "#mechanics" }}
      />

      {/* Why Choose Our Mechanics */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
              <CheckBadgeIcon className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Verified Professionals
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mechanics
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              All our mechanics are certified, background-checked, and highly
              rated by customers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: CheckBadgeIcon,
                title: "100% Verified",
                desc: "Background checked & certified",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: StarIcon,
                title: "Top Rated",
                desc: "Average 4.8+ star rating",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: ShieldCheckIcon,
                title: "Insured Work",
                desc: "All repairs are guaranteed",
                gradient: "from-green-500 to-green-600",
              },
              {
                icon: CurrencyDollarIcon,
                title: "Fair Pricing",
                desc: "Transparent, competitive rates",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((feature, i) => (
              <div key={i} className="group text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="relative py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-16">
            Services{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              We Offer
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-purple-300 hover:shadow-xl transition-all">
                  <service.icon className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mechanics */}
      <section id="mechanics" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-2">
                Featured{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mechanics
                </span>
              </h2>
              <p className="text-lg text-neutral-600">
                Highly rated professionals ready to help
              </p>
            </div>
            <Link
              href="/business/mechanics/all"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View All
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMechanics.map((mechanic) => (
              <div key={mechanic.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                <div className="relative bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden hover:border-purple-300 hover:shadow-xl transition-all">
                  {/* Profile Header */}
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-24 relative">
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                      <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <UserGroupIcon className="h-10 w-10 text-purple-600" />
                      </div>
                    </div>

                    {/* Status Badge */}
                    {mechanic.available ? (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 rounded-full flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-white">
                          Available
                        </span>
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-neutral-500 rounded-full">
                        <span className="text-xs font-semibold text-white">
                          Busy
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-14 pb-6 px-6">
                    {/* Name & Verified */}
                    <div className="text-center mb-3">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <h3 className="text-lg font-bold text-neutral-900">
                          {mechanic.name}
                        </h3>
                        {mechanic.verified && (
                          <CheckBadgeIcon className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <p className="text-sm text-purple-600 font-semibold">
                        {mechanic.specialty}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <StarSolid className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-bold text-neutral-900">
                        {mechanic.rating}
                      </span>
                      <span className="text-sm text-neutral-500">
                        ({mechanic.reviews} reviews)
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-neutral-600">
                        <ClockIcon className="h-4 w-4 flex-shrink-0" />
                        <span>{mechanic.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-600">
                        <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                        <span>{mechanic.location}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-neutral-100">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs text-neutral-500">
                            Hourly Rate
                          </p>
                          <p className="text-lg font-bold text-purple-600">
                            {mechanic.hourlyRate}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/business/mechanics/booking?mechanic=${mechanic.id}`}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                      >
                        Book Now
                        <ArrowRightIcon className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="md:hidden mt-8 text-center">
            <Link
              href="/business/mechanics/all"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold"
            >
              View All Mechanics
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-16">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Browse & Select",
                desc: "View mechanic profiles, ratings, and specialties",
              },
              {
                num: "02",
                title: "Book Appointment",
                desc: "Choose a time slot and describe your issue",
              },
              {
                num: "03",
                title: "Get Service",
                desc: "Meet your mechanic and get your car fixed",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
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
          <WrenchScrewdriverIcon className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a Mechanic Today?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book now and get connected with certified professionals in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business/mechanics/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Book a Mechanic
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="tel:+2349025579441"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-800/50 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-purple-800/70 transition-all"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
