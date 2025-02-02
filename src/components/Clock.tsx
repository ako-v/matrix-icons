import { SVGProps } from "react";

export const Clock: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12.9181 7.50201C12.9181 7.00495 12.5151 6.60201 12.0181 6.60201C11.521 6.60201 11.1181 7.00495 11.1181 7.50201V12.002C11.1181 12.2407 11.2129 12.4696 11.3817 12.6384L14.0817 15.3384C14.4331 15.6899 15.003 15.6899 15.3545 15.3384C15.7059 14.9869 15.7059 14.4171 15.3545 14.0656L12.9181 11.6292V7.50201Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.8 12C4.8 8.02355 8.02355 4.8 12 4.8C15.9764 4.8 19.2 8.02355 19.2 12C19.2 15.9764 15.9764 19.2 12 19.2C8.02355 19.2 4.8 15.9764 4.8 12Z"
      />
    </svg>
  );
};
