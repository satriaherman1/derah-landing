import IconProps from "./icon-props";

const Icons = ({ width = 14, height = 14, color = "#333333", stroke = "#333333", className }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_2200_4560)">
                <path
                    d="M11.375 5.25L7 9.625L2.625 5.25"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_2200_4560">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Icons;