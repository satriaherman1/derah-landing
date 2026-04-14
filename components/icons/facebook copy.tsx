import IconProps from "./icon-props";

const Icons = ({ width = 28, height = 28, color = "#868C98", className }: IconProps
) => (
    <svg className={className} width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6673 13.9997C25.6673 7.55967 20.4407 2.33301 14.0007 2.33301C7.56065 2.33301 2.33398 7.55967 2.33398 13.9997C2.33398 19.6463 6.34732 24.348 11.6673 25.433V17.4997H9.33398V13.9997H11.6673V11.083C11.6673 8.83134 13.499 6.99967 15.7507 6.99967H18.6673V10.4997H16.334C15.6923 10.4997 15.1673 11.0247 15.1673 11.6663V13.9997H18.6673V17.4997H15.1673V25.608C21.059 25.0247 25.6673 20.0547 25.6673 13.9997Z" fill={color} />
    </svg>




)

export default Icons