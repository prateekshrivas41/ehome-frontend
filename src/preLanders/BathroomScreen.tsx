// import * as XLSX from "xlsx";

// import { Header } from "../../components";

export const BathroomScreen = () => {
//   const gk_isXlsx = false;
//   const gk_xlsxFileLookup: Record<string, boolean> = {};
//   const gk_fileData: Record<string, string> = {};

//   const filledCell = (cell: any) => cell !== "" && cell != null;

//   const loadFileData = (filename: string): string => {
//     if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
//       try {
//         const workbook = XLSX.read(gk_fileData[filename], { type: "base64" });
//         const firstSheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[firstSheetName];

//         const jsonData = XLSX.utils.sheet_to_json(worksheet, {
//           header: 1,
//           blankrows: false,
//           defval: "",
//         });

//         const filteredData = jsonData.filter((row: any) => row.some(filledCell));

//         let headerRowIndex = filteredData.findIndex((row: any, index: number) =>
//           row.filter(filledCell).length >=
//           (filteredData[index + 1]?.filter(filledCell).length || 0)
//         );

//         if (headerRowIndex === -1 || headerRowIndex > 25) {
//           headerRowIndex = 0;
//         }

//         const csvSheet = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
//         const csv = XLSX.utils.sheet_to_csv(csvSheet, { header: 1 });
//         return csv;
//       } catch (e) {
//         console.error(e);
//         return "";
//       }
//     }
//     return gk_fileData[filename] || "";
//   };

  return (
    <div className="bg-gray-50 font-sans">
    {/* <Header logoShow={false} /> */}
      <header className="bg-gradient-to-br from-teal-800 to-teal-400 text-white py-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Transform Your Bathroom with Professional Remodeling
        </h1>
        <p className="text-lg mt-2">
          Get a FREE Quote from Top-Rated Local Experts in Minutes!
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Create Your Dream Bathroom Today!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Outdated or cramped bathrooms reduce comfort and home value. Our trusted contractors at eHomeQuote deliver custom remodels tailored to your style and budget.
          </p>
          <a
            href="https://ehomequote.co/bathroom"
            className="inline-block bg-gradient-to-br from-teal-800 to-teal-400 !text-white font-semibold py-3 px-6 rounded-lg transform transition-transform duration-300 hover:scale-110 active:scale-95 animate-pulse"
          >
            Get Your Free Quote Now
          </a>
        </section>

        <section className="my-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Why Choose eHomeQuote for Your Bathroom Remodel?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-paint-roller",
                title: "Custom Designs",
                desc: "Personalized bathroom layouts, fixtures, and finishes to match your vision, from modern to classic.",
              },
              {
                icon: "fa-hard-hat",
                title: "Expert Craftsmanship",
                desc: "Licensed contractors deliver high-quality work, backed by warranties for lasting results.",
              },
              {
                icon: "fa-clock",
                title: "Fast & Free Quotes",
                desc: "Connect with top local remodelers in minutes. No obligation, no hassle!",
              },
            ].map((item, index) => (
              <div
                key={`ind-${index}`}
                className="bg-white p-6 rounded-lg shadow-md flex items-start"
              >
                
                <i className={`fas ${item.icon} text-teal-800 text-3xl mr-4`}></i>
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

        <section className="my-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Trusted by Homeowners Nationwide
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[
              {
                text: "eHomeQuote found me the perfect contractor. My new bathroom is stunning and was completed on time!",
                author: "– Lisa R., Austin, TX",
              },
              {
                text: "The process was seamless, and I got multiple quotes to fit my budget. Highly recommend eHomeQuote!",
                author: "– Mark S., Seattle, WA",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-gray-600"
              >
                <p className="italic">"{item.text}"</p>
                <p className="text-gray-800 font-semibold mt-2">{item.author}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Partnered with contractors offering up to 5-year workmanship warranties and A+ BBB ratings.
          </p>
        </section>

        <section className="text-center my-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Don’t Settle for an Outdated Bathroom!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Upgrade your home with a beautiful, functional bathroom. Get started now and bring your vision to life.
          </p>
          <a
            href="https://ehomequote.co/bathroom"
            className="inline-block bg-gradient-to-br from-teal-800 to-teal-400 !text-white font-semibold py-3 px-6 rounded-lg transform transition-transform duration-300 hover:scale-110 active:scale-95 animate-pulse"
          >
            Get Started Now
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 eHomeQuote. All rights reserved.</p>
        <p className="mt-2">
          Connect with trusted bathroom remodeling contractors today!
        </p>
      </footer>
      
        {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
