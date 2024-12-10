import { SVGProps } from "react";

export const Warning: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.7992 17.5249L13.3061 4.73772C13.018 4.24591 12.5121 4 12.0063 4C11.5004 4 10.9945 4.24591 10.6748 4.73772L3.18522 17.5249C2.64107 18.505 3.35915 19.738 4.51453 19.738H19.5008C20.6516 19.738 21.3718 18.5085 20.7992 17.5249ZM4.8602 18.0518L11.9746 5.85484L19.1516 18.0518H4.8602ZM12.0063 14.718C11.3964 14.718 10.9018 15.2127 10.9018 15.8225C10.9018 16.4324 11.3975 16.927 12.0077 16.927C12.6179 16.927 13.1107 16.4324 13.1107 15.8225C13.1093 15.2134 12.6175 14.718 12.0063 14.718ZM11.1631 9.33969V12.7121C11.1631 13.1794 11.5425 13.5552 12.0063 13.5552C12.47 13.5552 12.8494 13.1776 12.8494 12.7121V9.33969C12.8494 8.87598 12.4735 8.49658 12.0063 8.49658C11.539 8.49658 11.1631 8.87598 11.1631 9.33969Z" />
    </svg>
  );
};
