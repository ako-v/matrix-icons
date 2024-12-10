import { SVGProps } from "react";

export const Triangle: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M11.9897 5.85447L19.1653 18.049H4.87669L11.9897 5.85447ZM11.9897 4C11.5156 4 11.0098 4.24586 10.6902 4.73757L3.20205 17.5222C2.6285 18.5018 3.34644 19.7349 4.46997 19.7349H19.513C20.6643 19.7349 21.3861 18.5056 20.7809 17.5222L13.2893 4.73757C13.0329 4.24586 12.5271 4 11.9897 4Z" />
    </svg>
  );
};
