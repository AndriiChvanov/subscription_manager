export function AddIcon(props) {
  return (
    <div className="add-icons" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="60.647"
        height="60.647"
        viewBox="0 0 60.647 60.647"
      >
        <defs>
          <ellipse
            id="ellipse-1"
            cx="30.324"
            cy="30.324"
            rx="16.324"
            ry="16.324"
          />
          <filter
            id="filter-2"
            width="200%"
            height="200%"
            x="-50%"
            y="-50%"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feOffset
              dx="0"
              dy="0"
              in="SourceAlpha"
              result="shadow-1-feOffset-shadow"
            />
            <feGaussianBlur
              in="shadow-1-feOffset-shadow"
              result="shadow-1-feGaussianBlur-shadow"
              stdDeviation="8.434"
            />
            <feColorMatrix
              in="shadow-1-feGaussianBlur-shadow"
              result="shadow-1-feColorMatrix-shadow"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.12 0"
            />
          </filter>
        </defs>
        <g>
          <g>
            <use
              fill="black"
              stroke="black"
              strokeOpacity="0"
              strokeWidth="0"
              filter="url(#filter-2)"
              href="#ellipse-1"
            />
            <use fill="rgb(255,255,255)" href="#ellipse-1" />
          </g>
          <path
            fill="rgb(119,134,158)"
            fillRule="evenodd"
            d="M28.82355718 24.2606986c0-.82787323.67211914-1.5 1.5-1.5s1.5.67212677 1.5 1.5v4.56284333h4.5628357c.82788086 0 1.5.67212677 1.5 1.5s-.67211914 1.5-1.5 1.5h-4.5628357v4.56283569c0 .82788086-.67211914 1.5-1.5 1.5s-1.5-.67211914-1.5-1.5v-4.5628357H24.2607215c-.82788086 0-1.5-.67212676-1.5-1.5 0-.82787322.67211914-1.5 1.5-1.5h4.5628357V24.2606986z"
          />
        </g>
      </svg>
    </div>
  );
}
