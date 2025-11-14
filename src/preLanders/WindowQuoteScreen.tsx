// import { Header } from "../../components";

export const WindowQuoteScreen = () => {
  const handleCTA = () => {
    window.location.href = "https://ehomequote.co/windows";
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* <Header logoShow={false} /> */}

      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Transform Your Home with New Windows
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Get Free Quotes from Top-Rated Window Replacement Experts!
          </p>
        </div>
      </header>

      {/* CTA Section */}
      <section className="bg-blue-100 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Get Your Free Window Replacement Quote Today!
          </h2>
          <p className="text-gray-600 mt-4">
            Connect with top local contractors. No fees, no hassle!
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <button
              onClick={handleCTA}
              className="w-full bg-blue-600 text-black hover:text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get My Free Quote Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Why Replace Your Windows?
            </h2>
            <p className="text-gray-600 mt-4">
              Old windows can lead to high energy bills, drafts, and a dated
              look. Upgrade to energy-efficient windows and enjoy:
            </p>
            <ul className="mt-4 space-y-3 text-gray-600">
              {[
                "Lower energy costs with advanced insulation",
                "Enhanced curb appeal and home value",
                "Improved comfort and noise reduction",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-4 mx-5">
              With eHomeQuote, connect with trusted local contractors for free,
              no-obligation quotes tailored to your needs.
            </p>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Modern window installation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
          Why Choose eHomeQuote?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Trusted Contractors",
              description:
                "We connect you with licensed, insured professionals for quality service you can rely on.",
            },
            {
              title: "Free & No Obligation",
              description:
                "Get quotes at no cost and choose the best option for your home.",
            },
            {
              title: "Satisfaction Guaranteed",
              description:
                "Our customers love the seamless experience and professional results.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            What Homeowners Are Saying
          </h2>
          <div className="mt-6 max-w-2xl mx-auto">
            <blockquote className="text-gray-600 italic">
              "eHomeQuote made finding a reliable contractor so easy! I got
              multiple quotes and chose a professional who did an amazing job on
              my new windows."
              <footer className="mt-2 text-gray-800 font-semibold">
                — Sarah T., Homeowner
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 eHomeQuote. All rights reserved.</p>
          <p className="mt-2">
            Connect with trusted window replacement experts today!
          </p>
        </div>
      </footer>
    </div>
  );
};
