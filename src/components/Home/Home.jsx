import React, { useEffect, useRef } from 'react';

export function Home() {
  const scrollRef = useRef(null);

  // Array of image links
  const images = [
    "https://vednandini.com/wp-content/uploads/2018/09/Main-.png",
    "https://vednandini.com/wp-content/uploads/2018/09/slide2.jpg",
    "https://images.unsplash.com/photo-1507149833265-60c372daea22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjk5fDB8MHwxfGFsbHwzfHx8fHx8fHwxNjE1ODMyOTU5&ixlib=rb-1.2.1&q=80&w=400",
    "https://vednandini.com/wp-content/uploads/2018/09/act9.png",
    "https://vednandini.com/wp-content/uploads/2018/09/school4.png"
  ];

  // Function to scroll images automatically every 1 second in a loop
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        // Scroll by a smaller step size for mobile and larger for desktop
        const scrollStep = window.innerWidth < 768 ? 150 : 300;

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
    }, 1000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        {/* Heading and Tagline */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-green-900 md:text-6xl lg:text-7xl">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Activities & Social Events
          </h2>
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide"
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
    </div>
  );
}
