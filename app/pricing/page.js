import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Zap, Rocket, Crown } from "lucide-react";

export const metadata = {
  title: "Pricing - Team Devora | Affordable Web Development Plans",
  description: "Choose from our flexible pricing plans for web development and design services",
};

export const revalidate = 86400; // Rebuild daily

const pricingPlans = [
  {
    name: "Starter",
    icon: <Zap className="w-8 h-8" />,
    price: "$999",
    period: "one-time",
    description: "Perfect for small businesses and startups",
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form",
      "Google Analytics Setup",
      "Social Media Integration",
      "Basic Customization",
      "30 Days Support",
      "SSL Certificate",
      "Mobile Optimized"
    ]
  },
  {
    name: "Business",
    icon: <Rocket className="w-8 h-8" />,
    price: "$2,499",
    period: "one-time",
    description: "Ideal for growing businesses and e-commerce stores",
    gradient: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "Up to 15 Pages",
      "Custom Design",
      "Advanced SEO",
      "E-commerce Integration",
      "Payment Gateway Setup",
      "Product Catalog",
      "Email Marketing Setup",
      "90 Days Support",
      "Performance Optimization",
      "Security Features",
      "Content Management",
      "Monthly Updates"
    ]
  },
  {
    name: "Enterprise",
    icon: <Crown className="w-8 h-8" />,
    price: "Custom",
    period: "negotiable",
    description: "Tailored solutions for large enterprises and complex projects",
    gradient: "from-orange-500 to-red-500",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Development",
      "Enterprise SEO",
      "Multi-Store Setup",
      "Advanced Integrations",
      "Custom CRM Integration",
      "Dedicated Project Manager",
      "1 Year Support",
      "Priority Support (24/7)",
      "White-label Solution",
      "Team Training",
      "Ongoing Maintenance",
      "Advanced Analytics",
      "API Development"
    ]
  }
];

const addOns = [
  { name: "Mobile App Development", price: "$3,999", description: "Native iOS and Android apps" },
  { name: "Digital Marketing Package", price: "$499/mo", description: "SEO, social media, content" },
  { name: "UI/UX Redesign", price: "$1,499", description: "Complete design overhaul" },
  { name: "Additional Pages", price: "$150/page", description: "Extra pages beyond plan limit" },
  { name: "Premium Hosting", price: "$99/mo", description: "Enterprise-grade hosting" },
  { name: "Extended Support", price: "$199/mo", description: "Priority support beyond included period" }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-700"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Star className="w-5 h-5 mr-2" />
              No Hidden Fees
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our quality guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm text-white/80">100% Guarantee</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm text-white/80">Fast Delivery</div>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm text-white/80">Ongoing Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Satisfaction Guaranteed</div>
                <div className="text-sm text-gray-600">100% money-back within 7 days</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Fast Delivery</div>
                <div className="text-sm text-gray-600">Projects completed in 2-6 weeks</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Ongoing Support</div>
                <div className="text-sm text-gray-600">30-365 days included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-purple-500 scale-105"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-8 bg-gradient-to-r ${plan.gradient} text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-center text-sm text-white/90">{plan.description}</p>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {plan.price}
                      {plan.price !== "Custom" && (
                        <span className="text-xl text-gray-500">/</span>
                      )}
                    </div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {addon.price}
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade to a higher tier at any time. We will apply any payments made to your new plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What if I need more pages than my plan includes?</h3>
              <p className="text-gray-600">
                We offer add-on packages for additional pages at $150 per page, or you can upgrade to the next tier.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">
                Yes! We offer flexible payment plans: 30% upfront, 40% at milestone completion, and 30% at launch.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What is included in ongoing support?</h3>
              <p className="text-gray-600">
                Support includes bug fixes, security updates, small content changes, and technical assistance via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us discuss your needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/917456096455?text=Hi!%20I%20want%20to%20start%20my%20business%20and%20need%20a%20mobile%20app%20and%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

