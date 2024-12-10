import { SVGProps } from "react";

export const Board: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4C3.44772 4 3 4.44772 3 5V19.667C3 20.2192 3.44771 20.667 4 20.667H10.1674C10.7197 20.667 11.1674 20.2192 11.1674 19.667V5C11.1674 4.44772 10.7197 4 10.1674 4H4ZM13.8326 4C13.2803 4 12.8326 4.44772 12.8326 5V12.9835C12.8326 13.5358 13.2803 13.9835 13.8326 13.9835H20C20.5523 13.9835 21 13.5358 21 12.9835V5C21 4.44772 20.5523 4 20 4H13.8326Z"
      />
    </svg>
  );
};
