import { SVGProps } from "react";

export const Minus: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19.1667 11.5416C19.1667 12.0265 18.7766 12.4166 18.2917 12.4166H4.875C4.39193 12.4166 4 12.0251 4 11.542C4 11.0604 4.39193 10.6666 4.875 10.6666H18.2917C18.7766 10.6666 19.1667 11.0604 19.1667 11.5416Z" />
    </svg>
  );
};
