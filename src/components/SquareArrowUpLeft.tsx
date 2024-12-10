import { SVGProps } from "react";

export const SquareArrowUpLeft: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M10.7906 9.42857H14.7016C15.234 9.42857 15.6659 8.99665 15.6659 8.46429C15.6659 7.93192 15.234 7.5 14.7016 7.5H8.46429C7.93393 7.5 7.5 7.93393 7.5 8.46429V14.704C7.5 15.2364 7.93192 15.6683 8.46429 15.6683C8.99665 15.6683 9.42857 15.2364 9.42857 14.704V10.7906L14.8527 16.2147C15.0415 16.4076 15.2866 16.5 15.5357 16.5C15.7848 16.5 16.0291 16.4058 16.2175 16.2175C16.5942 15.8408 16.5942 15.2307 16.2175 14.8538L10.7906 9.42857ZM18.4286 3H5.57143C4.15112 3 3 4.15152 3 5.57143V18.4286C3 19.8485 4.15112 21 5.57143 21H18.4286C19.8489 21 21 19.8485 21 18.4286V5.57143C21 4.15152 19.8469 3 18.4286 3ZM19.0714 18.4286C19.0714 18.7829 18.783 19.0714 18.4286 19.0714H5.57143C5.21697 19.0714 4.92857 18.7829 4.92857 18.4286V5.57143C4.92857 5.21705 5.21697 4.92857 5.57143 4.92857H18.4286C18.783 4.92857 19.0714 5.21705 19.0714 5.57143V18.4286Z" />
    </svg>
  );
};