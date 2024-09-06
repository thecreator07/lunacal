import React from "react";

const Recommended = () => {
  return (
    <div className="h-48 overflow-y-scroll text-[#969696] text-xl  scroll-container">
      <p className="pb-5 text-justify px-2">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
        at this awesome company for 3 years now.
      </p>

      <p  className="pb-5 text-justify px-2">
        Here are some resources and tools I highly recommend for developers:
      </p>
      <ul className="list-disc ml-5">
        <li>
          <strong>React</strong> - A powerful frontend library for building
          dynamic UIs. It’s highly modular and easy to integrate with various
          backend technologies.
        </li>
        <li>
          <strong>Next.js</strong> - A great framework for React applications,
          offering server-side rendering and static site generation.
        </li>
        <li>
          <strong>Node.js</strong> - A JavaScript runtime that enables you to
          build scalable server-side applications.
        </li>
        <li>
          <strong>GitHub</strong> - For version control, collaboration, and
          exploring open-source projects.
        </li>
      </ul>
      {/* Add more content here to make it scrollable */}
    </div>
  );
};

export default Recommended;
