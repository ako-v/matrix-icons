import { SVGProps } from "react";

export const MapPin: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M17.1072 8.05362C17.1072 5.26255 14.8447 3 12.0536 3C9.26255 3 7 5.26255 7 8.05362C7 10.5562 8.82351 12.6194 11.2113 13.023V20.1577C11.2113 20.6245 11.5904 21 12.0536 21C12.5169 21 12.8959 20.6227 12.8959 20.1577V13.0546C15.2823 12.651 17.1072 10.5874 17.1072 8.05362ZM12.0536 11.4543C10.1961 11.4543 8.68454 9.94311 8.68454 8.0852C8.68454 6.2273 10.1961 4.71612 12.0536 4.71612C13.9115 4.71612 15.4227 6.2273 15.4227 8.0852C15.4227 9.94311 13.9101 11.4543 12.0536 11.4543Z" />
    </svg>
  );
};