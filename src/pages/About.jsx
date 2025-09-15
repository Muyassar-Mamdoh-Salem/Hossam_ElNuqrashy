import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* صورة شخصية */}
        <div className="flex justify-center">
          <img
            src="hossam.jpg"
            alt="Hossam Photographer"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-gray-200"
          />
        </div>

        {/* النص */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Hossam</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I am <span className="font-semibold">Hossam</span>, a passionate{" "}
            <span className="font-semibold">photographer</span> who captures
            life’s most precious moments through the lens. My journey started
            with a simple camera and grew into a love for telling stories with
            pictures.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I specialize in <span className="font-medium">weddings</span>,{" "}
            <span className="font-medium">portraits</span>, and{" "}
            <span className="font-medium">creative photoshoots</span>. My goal
            is to create timeless memories for my clients with creativity,
            professionalism, and a touch of art.
          </p>

          {/* Skills / Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-gray-800">+5 Years</h3>
              <p className="text-gray-500">Experience</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-gray-800">200+</h3>
              <p className="text-gray-500">Projects</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-gray-800">Weddings</h3>
              <p className="text-gray-500">Specialist</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="font-semibold text-gray-800">Portraits</h3>
              <p className="text-gray-500">Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
