import { SVGProps } from "react";

export const Selected: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M16.2975 12C16.2975 14.3734 14.3734 16.2975 12 16.2975C9.62657 16.2975 7.70253 14.3734 7.70253 12C7.70253 9.62657 9.62657 7.70253 12 7.70253C14.3734 7.70253 16.2975 9.62657 16.2975 12Z" />
      <circle cx={12} cy={12} r={8} fill="none" stroke="currentColor" />
    </svg>
  );
};
