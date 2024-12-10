import { SVGProps } from "react";

export const Check: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.6986 7.55338L10.1439 18.1081C9.99645 18.3254 9.75974 18.4147 9.51915 18.4147C9.27857 18.4147 9.04264 18.3237 8.86065 18.1418L3.27284 12.554C2.90905 12.1903 2.90905 11.601 3.27284 11.237C3.63663 10.873 4.22587 10.8732 4.58986 11.237L9.51915 16.1679L19.4142 6.27284C19.778 5.90905 20.3673 5.90905 20.7312 6.27284C21.0952 6.63663 21.0944 7.22355 20.6986 7.55338Z" />
    </svg>
  );
};