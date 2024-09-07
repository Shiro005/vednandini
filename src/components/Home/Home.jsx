import React, { useEffect, useRef } from 'react';
import Activities from '../Activities/Activities';


export function Home() {
  const scrollRef = useRef(null);

  // Array of image links
  const images = [
    "https://vednandini.com/wp-content/uploads/2018/09/Main-.png",
    "https://vednandini.com/wp-content/uploads/2018/09/slide2.jpg",
    "https://vednandini.com/wp-content/uploads/2018/09/Cottage-3.jpg",
    "https://vednandini.com/wp-content/uploads/2018/09/act9.png",
    "https://vednandini.com/wp-content/uploads/2018/09/school4.png"
  ];

  // Function to scroll images automatically every 2 seconds in mobile view
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

          const scrollStep = 150; // Adjust for mobile

          // Looping logic: restart from the first image after reaching the end
          if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= maxScrollLeft) {
            scrollRef.current.scrollTo({
              left: 0, // Restart from the beginning
              behavior: 'smooth',
            });
          } else {
            scrollRef.current.scrollBy({
              left: scrollStep,
              behavior: 'smooth',
            });
          }
        }
      }, 2000);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        {/* Heading and Tagline */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
            Welcome to Vednandini Agri Food Court
          </h1>
          <p className="mt-4 text-2xl font-semibold text-gray-800">
            The World of Natural Agriculture & Healthy Environment
          </p>
          <p className="mt-2 text-lg text-gray-600 italic">
            "Embassy of the Agriculture Community of Vidarbha"
          </p>
        </div>

        {/* Tagline and Mission */}
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-800">
            Join us to experience pollution-free agriculture, natural environments, and
            traditional village living.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            We provide a complete range of services for everyone interested in learning more about
            sustainable agriculture and eco-friendly living.
          </p>
        </div>

        {/* Automatically Scrolling Image Section */}
        <div className="mt-12">
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide md:scrollbar-visible"
              style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
            >
              {/* Map through the image array */}
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Event ${index + 1}`}
                  className="min-w-[300px] w-72 h-48 object-cover rounded-lg shadow-lg hover:scale-110 transform transition duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activities section  */}
      <div className="mx-auto max-w-7xl px-4 md:py-16 lg:px-8">
        <Activities />
      </div>
    </div>
  );
}
