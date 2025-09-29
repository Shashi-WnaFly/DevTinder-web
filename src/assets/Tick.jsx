import React from "react";

export default function Tick({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title></title>{" "}
        <g id="Complete">
          {" "}
          <g id="tick">
            {" "}
            <polyline
              fill="none"
              points="3.7 14.3 9.6 19 20.3 5"
              stroke="currentColor"
            ></polyline>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
