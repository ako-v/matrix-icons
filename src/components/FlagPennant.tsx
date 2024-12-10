import { SVGProps } from "react";

export const FlagPennant: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.448 9.52148L4.65902 3.70348C4.59012 3.30705 4.26 3 3.84375 3C3.37793 3 3 3.37758 3 3.84375V20.1562C3 20.6238 3.37793 21 3.84375 21C4.30957 21 4.6875 20.6221 4.6875 20.1562V16.9113L20.448 11.1035C20.7785 10.9805 21 10.6676 21 10.3125C21 9.95742 20.7785 9.61289 20.448 9.52148ZM4.6875 15.1113V5.51297L17.7164 10.3125L4.6875 15.1113Z" />
    </svg>
  );
};
