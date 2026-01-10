// import { Header } from "../../components";

export  const FlooringScreen = () => {
  return (
    <div className="bg-white font-sans">
      {/* <Header logoShow={false} /> */}

      {/* Header Section */}
      <header className="bg-indigo-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Upgrade Your Home with Professional Flooring Installation
          </h1>
          <p className="text-lg mt-2">
            Get a FREE Quote from Top-Rated Local Experts in Minutes!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Transform Your Space with Beautiful Flooring!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Worn or outdated floors diminish your home’s value and comfort. Our
            trusted contractors at eHomeQuote offer expert flooring solutions
            tailored to your style and budget.
          </p>
          <a
            href="https://ehomequote.co/flooring"
            className="inline-block bg-indigo-900 !text-white font-semibold py-3 px-6 rounded-lg animate-cta-pulse hover:bg-indigo-800 cta-button"
          >
            Get Your Free Quote Now
          </a>
        </section>

        {/* Benefits Section */}
        <section className="my-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Why Choose eHomeQuote for Your Flooring Needs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit Item */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <i className="fas fa-layer-group text-indigo-900 text-3xl mr-4"></i>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Wide Material Selection
                </h4>
                <p className="text-gray-600">
                  Choose from hardwood, tile, vinyl, or carpet, customized to
                  elevate your home’s aesthetic.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <i className="fas fa-tools text-indigo-900 text-3xl mr-4"></i>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Expert Installation
                </h4>
                <p className="text-gray-600">
                  Licensed contractors deliver high-quality work, backed by
                  warranties for lasting quality.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <i className="fas fa-clock text-indigo-900 text-3xl mr-4"></i>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Fast & Free Quotes
                </h4>
                <p className="text-gray-600">
                  Connect with top local flooring experts in minutes. No
                  obligation, no hassle!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="my-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Trusted by Homeowners Nationwide
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "eHomeQuote connected me with an amazing contractor. My new
                hardwood floors look incredible!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                – Emily K., Orlando, FL
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The process was so easy, and I got competitive quotes that fit
                my budget. Highly recommend!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                – David L., Phoenix, AZ
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            Partnered with contractors offering up to 5-year workmanship
            warranties and A+ BBB ratings.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center my-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Don’t Live with Worn-Out Floors!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Elevate your home with durable, stylish flooring. Get started now
            and bring your vision to life.
          </p>
          <a
            href="https://ehomequote.co/flooring"
            className="inline-block bg-indigo-900 !text-white font-semibold py-3 px-6 rounded-lg animate-cta-pulse hover:bg-indigo-800 cta-button"
          >
            Get Started Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 eHomeQuote. All rights reserved.</p>
          <p className="mt-2">
            Connect with trusted flooring contractors today!
          </p>
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

      {/* Extra Styles */}
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
