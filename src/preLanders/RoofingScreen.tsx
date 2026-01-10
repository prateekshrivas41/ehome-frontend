// import { Header } from "../../components";
import Fast from "./assests/Fast.svg";
import quality from "./assests/Quality-1.svg";
import satisfaction from "./assests/satisfaction.svg";
import high from "./assests/high.svg"
export const RoofingScreen = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* <Header logoShow={false} /> */}

      {/* Hero Section */}
      <section
        className="hero-bg text-white py-16 px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 200, 150, 0.5), 
  rgba(255, 255, 255, 0.8)), url('https://images.unsplash.com/photo-1595878715977-2e9f53b781cd?auto=format&fit=crop&w=1350&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Need a New Roof? Get a Free Quote in Minutes!
          </h1>
          <p className="text-lg md:text-xl mb-6 text-black">
            Connect with top-rated local roofing contractors for repairs,
            replacements, or inspections.
          </p>
          <a
            href="https://ehomequote.co/roofing"
            style={{ color: "#FFFFFF" }}
            className="inline-block bg-green-500 hover:bg-green-700 text-black font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 hover:text-white"
          >
            Get Your Free Quote Now
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className=" mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose eHomeQuote for Your Roofing Needs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {[
              {
                img: `${high}`,
                title: "Top-Quality Contractors",
                text: "We connect you with trusted, local roofing professionals who deliver exceptional craftsmanship.",
              },
              {
                img: `${satisfaction}`,
                title: "Fast & Free Quotes",
                text: "Get personalized quotes from multiple contractors in your area within minutes.",
              },
              {
                img: `${Fast}`,
                title: "Satisfaction Guaranteed",
                text: "Our network of roofers ensures high-quality service and customer satisfaction.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto mb-4 h-16"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className=" mx-auto text-center text-black">
          <h2 className="text-3xl font-bold mb-8">
            Trusted by Homeowners Nationwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "eHomeQuote made finding a reliable roofer so easy! Got my quote fast and the work was top-notch.",
                author: "– Sarah T., Chicago, IL",
              },
              {
                quote:
                  "The contractors were professional, and the process was seamless. Highly recommend!",
                author: "– James R., Houston, TX",
              },
              {
                quote:
                  "Saved time and money with eHomeQuote. My new roof looks amazing!",
                author: "– Emily W., Denver, CO",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4 text-black">"{item.quote}"</p>
                <p className="font-semibold">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-green-600 text-white text-center">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Fix or Replace Your Roof?
          </h2>
          <p className="text-lg mb-6">
            Don’t wait—get connected with trusted local roofers and start your
            project today!
          </p>
          <a
            href="https://ehomequote.co/roofing"
            className="inline-block bg-white hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Get a Free Quote Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p>&copy; 2025 eHomeQuote. All rights reserved.</p>
      </footer>
    </div>
  );
};
