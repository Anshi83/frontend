
    import React from 'react';

function PricingSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Plans and Pricing</h1>
        <p className="text-gray-500 text-lg">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>

        <div className="inline-flex mt-6 bg-gray-100 p-1 rounded-full">
          <button className="px-5 py-2 rounded-full bg-white text-black font-medium shadow">
            Monthly
          </button>
          <button className="px-5 py-2 rounded-full text-gray-600 font-medium relative">
            Annual <span className="text-xs text-blue-600 absolute top-0 right-0 -mt-1 -mr-2">Save 35%</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Free Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition bg-white">
          <h2 className="text-lg font-semibold mb-2">Free</h2>
          <p className="text-4xl font-bold mb-1">$0</p>
          <p className="text-sm text-gray-500 mb-4">Per user/month, billed annually</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Free e-mail alerts</li>
            <li>✅ 3-minute checks</li>
            <li>✅ Automatic data enrichment</li>
            <li>✅ 10 monitors</li>
            <li>✅ Up to 3 seats</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg">Get started for free</button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition bg-white relative">
          <span className="absolute top-4 right-4 text-sm bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded">
            🔥 Popular
          </span>
          <h2 className="text-lg font-semibold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-1">$85</p>
          <p className="text-sm text-gray-500 mb-4">Per user/month, billed annually</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Unlimited phone calls</li>
            <li>✅ 30 second checks</li>
            <li>✅ Single-user account</li>
            <li>✅ 20 monitors</li>
            <li>✅ Up to 6 seats</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded-lg">Get started with Pro</button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition bg-black text-white">
          <h2 className="text-lg font-semibold mb-2">Enterprise</h2>
          <p className="text-3xl font-bold mb-1">Custom</p>
          <p className="text-sm text-gray-400 mb-4">Per user/month, billed annually</p>
          <ul className="text-sm text-gray-200 space-y-2 mb-6">
            <li>✅ Everything in Pro</li>
            <li>✅ Up to 5 team members</li>
            <li>✅ 100 monitors</li>
            <li>✅ 15 status pages</li>
            <li>✅ 200+ integrations</li>
          </ul>
          <button className="w-full bg-white text-black py-2 rounded-lg">Get started with Enterprise</button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

  {/*rafce */}

