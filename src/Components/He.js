import React, { useState, useEffect, useRef } from "react";
import ClickableRectangle from "./ClickableRectangle";
let screenWidth = window.innerWidth; // Declare screenWidth as a global variable

function LogoutButton() {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(screenWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    // Handle logout functionality
  };
}
const RectanglesSection = () => {
  const lastRectangleRef = useRef(null);
  return (
    <>
      <div
        className="dashboard-rectangles-section"
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          padding: "0rem 6rem",
          paddingTop: "2rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle.svg"
            text1="20"
            text2="Total Leaves"
            style={{ width: "90%" }}
          />
        </div>
        <div
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle (2).png"
            text1="20%"
            text2="Success Ratio"
            style={{ width: "90%" }}
          />
        </div>
        <div
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle (3).png"
            text2="Learning Tutorials"
            style={{ width: "90%" }}
          />
        </div>
      </div>
      <div
        className="dashboard-rectangles-section"
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          padding: "0rem 6rem",
          paddingTop: "2rem",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle (4).png"
            text1="3"
            text2="Total Task"
            style={{ width: "90%" }}
          />
        </div>
        <div
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle (5).png"
            text1="1"
            text2="Total Meet"
            style={{ width: "90%" }}
          />
        </div>
        <div
          ref={lastRectangleRef}
          style={{
            width: "calc(30%)",
            minWidth: "300px",
            margin: "5px",
          }}
        >
          <ClickableRectangle
            clickable={true}
            imageSrc="images/Rectangle (1).png"
            text1="3"
            text2="Total Badges"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </>
  );
};

export { RectanglesSection };
