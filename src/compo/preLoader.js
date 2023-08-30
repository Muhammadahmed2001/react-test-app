import "./preLoader.css";

const Loader = () => {
  return (
    <div className="main-loader">
      <div>
        <svg
          height="108px"
          width="108px"
          viewBox="0 0 128 128"
          className="loader"
        >
          <defs>
            <clipPath id="loader-eyes">
              <circle
                transform="rotate(-40,64,64) translate(0,-56)"
                r={8}
                cy={64}
                cx={64}
                className="loader__eye1"
              />
              <circle
                transform="rotate(40,64,64) translate(0,-56)"
                r={8}
                cy={64}
                cx={64}
                className="loader__eye2"
              />
            </clipPath>
            <linearGradient y2={1} x2={0} y1={0} x1={0} id="loader-grad">
              <stop stopColor="#000" offset="0%" />
              <stop stopColor="#fff" offset="100%" />
            </linearGradient>
            <mask id="loader-mask">
              <rect
                fill="url(#loader-grad)"
                height={128}
                width={128}
                y={0}
                x={0}
              />
            </mask>
          </defs>
          <g
            strokeDasharray="175.93 351.86"
            strokeWidth={12}
            strokeLinecap="round"
          >
            <g>
              <rect
                clipPath="url(#loader-eyes)"
                height={64}
                width={128}
                fill="hsl(193,90%,50%)"
              />
              <g stroke="hsl(193,90%,50%)" fill="none">
                <circle
                  transform="rotate(180,64,64)"
                  r={56}
                  cy={64}
                  cx={64}
                  className="loader__mouth1"
                />
                <circle
                  transform="rotate(0,64,64)"
                  r={56}
                  cy={64}
                  cx={64}
                  className="loader__mouth2"
                />
              </g>
            </g>
            <g mask="url(#loader-mask)">
              <rect
                clipPath="url(#loader-eyes)"
                height={64}
                width={128}
                fill="hsl(223,90%,50%)"
              />
              <g stroke="hsl(223,90%,50%)" fill="none">
                <circle
                  transform="rotate(180,64,64)"
                  r={56}
                  cy={64}
                  cx={64}
                  className="loader__mouth1"
                />
                <circle
                  transform="rotate(0,64,64)"
                  r={56}
                  cy={64}
                  cx={64}
                  className="loader__mouth2"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      
    </div>
  );
};

export default Loader;
