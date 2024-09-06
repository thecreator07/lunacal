import React, { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Aboutme from "./section1/aboutme";
import Experience from "./section1/experience";
import Recommended from "./section1/recommended";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [images, setImages] = useState(() => {
    // Load images from localStorage or return an empty array if none exist
    const storedImages = localStorage.getItem("images");
    return storedImages ? JSON.parse(storedImages) : [];
  });

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/aboutme");
    }
  }, [location.pathname, navigate]);

  // Save images to localStorage whenever the images array changes
  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Function to handle image upload and add to the carousel
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]); // Add new image to state
      };
      reader.readAsDataURL(file); // Convert image to base64 URL for display
    }
  };

  return (
    <div className="flex justify-center flex-col w-screen h-screen items-center">
      <div className="w-full max-w-7xl p-5 flex gap-10">
        <div className="w-1/2 rounded-3xl h-full border border-slate-500 bg-[#616161]"></div>
        <div className="w-1/2">
          <div className="w-full p-4 h-80 bg-[#363C43] rounded-3xl neomrph">
            <section className="section-1 flex gap-2 justify-between p-[5px] rounded-[20px] bg-black">
              <NavLink
                to={"/aboutme"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-[#363C43] text-[#FAF0E6] px-10 py-2.5 text-lg rounded-2xl`
                    : `bg-transparent text-slate-300 px-10 py-2.5 text-lg rounded-2xl`
                }
              >
                About me
              </NavLink>
              <NavLink
                to={"/experiences"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-[#363C43] text-[#FAF0E6] px-10 py-2.5 text-lg rounded-2xl`
                    : `bg-transparent text-slate-300 px-10 py-2.5 text-lg rounded-2xl`
                }
              >
                Experiences
              </NavLink>
              <NavLink
                to={"/recommended"}
                className={({ isActive }) =>
                  isActive
                    ? `bg-[#363C43] text-[#FAF0E6] px-10 py-2.5 text-lg rounded-2xl`
                    : `bg-transparent text-slate-300 px-10 py-2.5 text-lg rounded-2xl`
                }
              >
                Recommended
              </NavLink>
            </section>
            <section className="section-1 p-2 my-4">
              <Routes>
                <Route exact path="/aboutme" element={<Aboutme />} />
                <Route path="/experiences" element={<Experience />} />
                <Route path="/recommended" element={<Recommended />} />
              </Routes>
            </section>
          </div>
          <div className="m-5 h-1 bg-[#363C43] neomrph"></div>
          <section className="w-full p-4 h-80 bg-[#363C43] rounded-3xl neomrph">
            <div className="flex w-full gap-2 justify-between p-[5px] rounded-[20px]">
              <button className="bg-black hover:bg-slate-800 text-slate-300 px-10 py-2.5 text-lg rounded-2xl">
                Gallery
              </button>
              <div className="w-1/2 flex justify-between items-center">
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleAddImage}
                  accept="image/*"
                />
                <button
                  onClick={() => document.getElementById("fileInput").click()}
                  className="uppercase btnneomrph py-2.5 px-4 font-medium text-xs text-white rounded-full"
                >
                  + add image
                </button>
                <div className="flex gap-5 items-center">
                  <div
                    onClick={scrollLeft}
                    className="rounded-full btnneomrph p-1 cursor-pointer"
                  >
                    <CgArrowLongLeft color="white" size={25} />
                  </div>
                  <div
                    onClick={scrollRight}
                    className="rounded-full btnneomrph p-1 cursor-pointer"
                  >
                    <CgArrowLongRight color="white" size={25} />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Scroller */}
            <div
              ref={scrollRef}
              className="imageslider carousel flex gap-4 overflow-x-scroll p-2 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-48 h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
