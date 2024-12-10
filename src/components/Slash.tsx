import { SVGProps } from "react";

export const Slash: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M7.09288 21C6.94786 21 6.80174 20.9627 6.66783 20.8841C6.26554 20.6484 6.13041 20.1316 6.36551 19.7308L15.9284 3.41772C16.1635 3.01516 16.68 2.87981 17.0829 3.1167C17.4851 3.35236 17.6201 3.86942 17.3851 4.27127L7.82222 20.5844C7.66525 20.8523 7.38293 21 7.09288 21Z" />
    </svg>
  );
};
