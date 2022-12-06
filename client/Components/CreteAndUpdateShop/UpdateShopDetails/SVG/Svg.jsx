import React from "react";

/* https://codepen.io/bchiang7/pen/JBzxEW */

const Svg = () => {
  return (
    <div class="container">
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g
            id="B"
            transform="translate(36, 33)"
            fill="#64FFDA"
            style="opacity: 0"
            font-family="Calibre-Medium, Calibre"
            font-size="50"
            font-weight="400"
            letter-spacing="4.16666603"
          >
            <text>
              <tspan x="1" y="30">
                K
              </tspan>
            </text>
          </g>
          <path
            stroke="#64FFDA"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Svg;
