// import { Header } from "../../components";

export const SolarScreen = () => {
  return (
    <div className="bg-gray-100">
      {/* <Header logoShow={false} /> */}

      {/* Header Section */}
      {/* <header className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4"></div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Slash Your Energy Bills with Solar Power!
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Get free, no-obligation solar quotes from trusted local installers.
            Start saving today!
          </p>
          <a
            href="https://ehomequote.co/solar"
            style={{ color: "white" }}
            className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 transition duration-300 shadow-lg hover:scale-105 transform"
          >
            Get Your Free Quotes Now
          </a>
          <p className="mt-4 text-sm">
            Takes just 60 seconds. No hassle, no pressure.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Go Solar with eHomeQuote?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/5648/5648150.png"}
                alt={"save-money"}
                className="mx-auto mb-4 h-16"
              />
              <h4 className="text-xl font-semibold mb-2">Save Money</h4>
              <p>
                Reduce your electricity bills by up to 80% with solar energy.
                Enjoy long-term savings and a great return on investment.
              </p>
            </div>
            <div className="text-center">
              <img
                src={
                  "https://thumbs.dreamstime.com/b/two-leaves-plant-green-spa-gardener-logo-icon-two-leaves-plant-green-wellness-logo-gardener-logo-icon-button-nature-130195182.jpg"
                }
                alt={"save-money"}
                className="mx-auto mb-4 h-16"
              />
              <h4 className="text-xl font-semibold mb-2">Eco-Friendly</h4>
              <p>
                Power your home with clean, renewable energy and reduce your
                carbon footprint.
              </p>
            </div>
            <div className="text-center">
              <img
                src={
                  "https://png.pngtree.com/png-clipart/20250417/original/pngtree-trusted-icon-stamp-red-vector-logo-symbol-company-design-png-image_20763511.png"
                }
                alt={"save-money"}
                className="mx-auto h-20"
              />
              <h4 className="text-xl font-semibold mb-2">Trusted Installers</h4>
              <p>
                Connect with vetted, local professionals for a hassle-free
                installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">
                "eHomeQuote made going solar so easy! I got 3 quotes in a day
                and saved 60% on my energy bills."
              </p>
              <p className="mt-4 font-semibold">— Sarah M., California</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">
                "The installers were professional, and the process was seamless.
                I’m thrilled with my solar savings!"
              </p>
              <p className="mt-4 font-semibold">— John D., Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Power Your Home with Solar?
          </h3>
          <p className="text-lg mb-6">
            Enter your details to get personalized solar quotes from top-rated
            installers in your area.
          </p>
          <a
            href="https://ehomequote.co/solar"
            className="bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 eHomeQuote. All rights reserved.</p>
          <p className="mt-2">
            Partnered with top solar installers nationwide.{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="underline">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
