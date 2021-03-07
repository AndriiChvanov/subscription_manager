export function ButtonHome(props) {
  return (
    <div className="menu-button__home stroke__fff" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="82.25"
        height="60"
        viewBox="0 0 82.25 60"
      >
        <defs>
          <path
            id="path-1"
            fillRule="evenodd"
            d="M41.1250025 18.00001l10.04347826 9.05882353V37.4117747c0 1.29411764-1.25543478 2.58823529-2.51086956 2.58823529h-3.76630435v-6.46553309l-1.25543478-.00505515h-5.02173914l-1.25543478.00505515V40.00001H33.5923938c-1.25543478 0-2.51086956-1.29411765-2.51086956-2.5882353V27.05883354L41.1250025 18.00001z"
          />
          <mask
            id="mask-2"
            x="0"
            y="0"
            maskContentUnits="userSpaceOnUse"
            maskUnits="userSpaceOnUse"
          >
            <rect width="82.25" height="60" x="0" y="0" fill="white" />
            <use fill="black" xlinkHref="#path-1" />
          </mask>
        </defs>
        <g>
          <use
            fillOpacity="0"
            stroke="rgb(97,133,193)"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="4"
            mask="url(#mask-2)"
            xlinkHref="#path-1"
          />
          <rect width="82.25" height="60" x="0" y="0" fill="none" />
        </g>
      </svg>
    </div>
  );
}
