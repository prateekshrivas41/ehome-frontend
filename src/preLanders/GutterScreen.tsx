// import { Header } from "../../components";

export const GutterScreen = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* <Header logoShow={false} /> */}

      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Protect Your Home with Professional Gutter Installation
          </h1>
          <p className="text-lg mt-2">
            Get a FREE Quote from Top-Rated Local Gutter Experts in Minutes!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Stop Water Damage Before It Starts!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Faulty or missing gutters can lead to costly damage to your roof,
            foundation, and landscaping. Our trusted contractors at eHomeQuote
            provide seamless gutter solutions tailored to your home.
          </p>
          <a
            href="https://ehomequote.co/gutter"
            className="inline-block bg-blue-600 !text-white font-semibold py-3 px-6 rounded-lg cta-button animate-cta-pulse hover:bg-blue-700"
          >
            Get Your Free Quote Now
          </a>
        </section>

        {/* Benefits Section */}
        <section className="my-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Why Choose eHomeQuote for Your Gutter Needs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-shield-alt",
                title: "Top-Quality Materials",
                desc: "Durable seamless gutters in aluminum, copper, or steel, custom-fit to your home for maximum protection.",
              },
              {
                icon: "fa-wrench",
                title: "Expert Installation",
                desc: "Certified professionals ensure flawless installation, backed by warranties for peace of mind.",
              },
              {
                icon: "fa-clock",
                title: "Fast & Free Quotes",
                desc: "Connect with trusted local contractors in minutes. No obligation, no hassle!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-start"
              >
                <i
                  className={`fas ${item.icon} text-blue-600 text-3xl mr-4`}
                ></i>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="my-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Trusted by Homeowners Nationwide
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "eHomeQuote connected me with a fantastic contractor. My new
                gutters were installed in a day, and my home is now protected!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                – Sarah M., Denver, CO
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The process was so easy! I got multiple quotes and chose the
                best one for my budget. Highly recommend!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                – John T., Chicago, IL
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            Partnered with contractors offering up to 3-year workmanship
            warranties and A+ BBB ratings.
          </p>
        </section>

        {/* Final CTA */}
        <section className="text-center my-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Don’t Wait Until It’s Too Late!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Protect your home from water damage with a new gutter system. Get
            started now and save on costly repairs later.
          </p>
          <a
            href="https://ehomequote.co/gutter"
            style={{color: "white"}}
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg cta-button animate-cta-pulse hover:bg-blue-700"
          >
            Get Started Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 eHomeQuote. All rights reserved.</p>
          <p className="mt-2">Connect with trusted gutter contractors today!</p>
        </div>
      </footer>

      {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Custom styles */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-cta-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .cta-button:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        .cta-button:active {
          transform: scale(0.95);
          transition: transform 0.1s ease;
        }
      `}</style>
    </div>
  );
};
