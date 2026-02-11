import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What People Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feedback from clients, collaborators, and professionals who have
            experienced working with NabiCode.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “The website delivered was clean, modern, and highly responsive.
              Communication was smooth throughout the project.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Adebayo Oladipo</h4>
              <p className="text-sm text-gray-500">Business Owner · Nigeria</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “Professional approach and attention to detail. The UI looks
              premium and works perfectly on all devices.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Blessing Akinwale</h4>
              <p className="text-sm text-gray-500">Product Manager · Nigeria</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “Clean frontend code and well-structured components.
              Delivery was timely and exceeded expectations.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Michael Roberts</h4>
              <p className="text-sm text-gray-500">Startup Founder · UK</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “The final product feels polished and professional.
              A great balance between design and performance.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
              <p className="text-sm text-gray-500">Digital Consultant · Canada</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “Simple, elegant, and effective. The layout feels modern
              without being overdesigned.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Daniel Krüger</h4>
              <p className="text-sm text-gray-500">UI Designer · Germany</p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <p className="text-gray-700 leading-relaxed mb-6">
              “Very reliable and easy to work with. The result matched
              exactly what we discussed.”
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Chiamaka Eze</h4>
              <p className="text-sm text-gray-500">Content Strategist · Nigeria</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
