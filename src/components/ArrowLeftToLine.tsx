import { SVGProps } from "react";

export const ArrowLeftToLine: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M4.92978 18.2788V4.95192C4.92978 4.42638 4.49746 4 3.96469 4C3.43192 4 3 4.42638 3 4.95192V18.2788C3 18.8064 3.43232 19.2308 3.96509 19.2308C4.49786 19.2308 4.92978 18.8064 4.92978 18.2788ZM13.9406 15.9982L10.2442 12.5673H20.0317C20.5661 12.5673 21 12.1429 21 11.6154C21 11.0879 20.5677 10.6992 20.0349 10.6992H10.2442L13.9398 7.26708C14.1421 7.07991 14.2439 6.82721 14.2439 6.57416C14.2439 6.33991 14.1572 6.10573 13.9813 5.92209C13.6169 5.5391 13.0062 5.5207 12.618 5.8812L7.14972 10.9581C6.76023 11.3176 6.76023 11.9842 7.14972 12.344L12.618 17.4209C13.0063 17.7816 13.6169 17.763 13.9813 17.38C14.3504 16.962 14.3304 16.3591 13.9406 15.9982Z" />
    </svg>
  );
};