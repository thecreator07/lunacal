import React from 'react';

const Experience = () => {
    return (
        <div className="h-48 overflow-y-scroll text-[#969696] text-xl  scroll-container">
        <p className="pb-5 text-justify px-2">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
          at this awesome company for 3 years now.
        </p>
        <p  className="pb-5 text-justify px-2">
        I have worked in various roles that have shaped my development journey:
      </p>
      <ul className="list-disc ml-5">
        <li>
          <strong>Full-Stack Developer Intern at Ezage - "The One App"</strong> - Worked on an E-commerce Application.
        </li>
        <li>
          <strong>Freelance Developer</strong> - Developed custom medical lab management systems for clients, handling everything from booking systems to report generation.
        </li>
        <li>
          <strong>Finalist, Smart India Hackathon 2022</strong> - Collaborated with a team to build innovative solutions under tight deadlines, gaining valuable teamwork and problem-solving experience.
        </li>
      </ul>
        {/* Add more content here to make it scrollable */}
      </div>
    );
}

export default Experience;
