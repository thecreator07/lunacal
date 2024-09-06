import React from "react";

const Aboutme = () => {
  return (
    <div className="h-48 overflow-y-scroll text-[#969696] text-xl  scroll-container">
      <p className="pb-5 text-justify px-2">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
        at this awesome company for 3 years now.
      </p>

      <p  className="pb-5 text-justify px-2">
        Hello! I’m a passionate Full-Stack developer with experience in building dynamic web applications. My journey in tech started during my time at university, where I fell in love with creating interactive, user-friendly applications. I specialize in the MERN stack but am always open to exploring new technologies and frameworks that can help solve real-world problems. 
      </p>
      <p  className="pb-5 text-justify px-2">
        In my free time, I enjoy contributing to open-source projects, experimenting with new programming languages, and working on personal projects to improve my skills. When I’m not coding, you can find me exploring the outdoors or reading up on the latest tech trends.
      </p>
      {/* Add more content here to make it scrollable */}
    </div>
  );
};

export default Aboutme;
