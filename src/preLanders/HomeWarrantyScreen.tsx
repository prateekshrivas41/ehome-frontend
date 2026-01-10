// import { Header } from "../../components";

export const HomeWarrantyScreen = () => {
  return (
    <div className="bg-gray-100">
      {/* <Header logoShow={false} /> */}

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protect Your Home from Unexpected Repair Costs!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Get a Home Warranty Quote in Seconds and Save on Costly Repairs for
            Your Appliances and Systems.
          </p>
          <a
            href="https://ehomequote.co/homeWarranty"
            className="bg-yellow-500 text-gray-800 font-semibold pt-2 pb-4 px-8 rounded-md text-lg hover:bg-yellow-600"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose a Home Warranty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p>
                Protect your budget from unexpected repair bills for major home
                systems and appliances.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-piggy-bank text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p>
                Avoid high out-of-pocket costs with affordable warranty plans
                tailored to your needs.
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-user-check text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">
                Trusted Contractors
              </h3>
              <p>
                Connect with vetted, professional contractors through
                eHomeQuote’s network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="container mx-auto px-4 text-center text-bl">
          <h2 className="text-3xl font-bold mb-8">
            What Homeowners Are Saying
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="italic mb-4">
              "I faced no problem with the contractor services booked through
              eHomeQuote. The work was satisfying and met my expectations!"
            </p>
            <p className="font-semibold">– Happy Homeowner</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don’t Wait for a Costly Breakdown!
          </h2>
          <p className="text-lg mb-6">
            Get your free home warranty quote today and protect your home with
            confidence.
          </p>
          <a
            href="https://ehomequote.co/homeWarranty"
            className="bg-yellow-500 text-gray-800 font-semibold pt-2 pb-4 px-8 rounded-md text-lg hover:bg-yellow-600"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            eHomeQuote is a free platform connecting homeowners with trusted
            local contractors.{" "}
            <a
              href="https://ehomequote.co"
              className="underline hover:text-yellow-500"
            >
              Learn More
            </a>
          </p>
          <p className="mt-2 text-sm">
            © 2025 eHomeQuote. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
