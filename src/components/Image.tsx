import { SVGProps } from "react";

export const Image: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19.2 6.8H12.9L11.1 5H4.8C3.81 5 3 5.81 3 6.8V17.6C3 18.59 3.81 19.4 4.8 19.4H19.2C20.19 19.4 21 18.59 21 17.6V8.6C21 7.61 20.19 6.8 19.2 6.8ZM19.2 17.6H4.8V6.8H10.38L12.18 8.6H19.2V17.6ZM17.4 15.8L13.98 11.3H13.8L11.19 14.72L9.3 12.29L6.6 15.8H17.4ZM10.2 9.95C10.2 9.23 9.57 8.6 8.85 8.6C8.13 8.6 7.5 9.23 7.5 9.95C7.5 10.67 8.13 11.3 8.85 11.3C9.57 11.3 10.2 10.67 10.2 9.95Z" />
    </svg>
  );
};
