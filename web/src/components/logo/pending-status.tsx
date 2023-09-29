import { SVGProps } from "react"
const PendingStatus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={5}
    fill="none"
    {...props}
  >
    <path fill="#FCC123" d="M.065.874v3.484H14V.874H.065Z" />
  </svg>
)
export default PendingStatus
