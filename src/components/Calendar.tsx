import { SVGProps } from "react";

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M10.6719 17.5453C10.8359 17.7093 11.0591 17.8016 11.2906 17.8016C11.302 17.8016 11.3134 17.8016 11.3236 17.8005C11.5674 17.7914 11.7965 17.6809 11.9547 17.4963L15.4547 13.4129C15.7692 13.0462 15.727 12.4934 15.3601 12.1792C14.9945 11.8659 14.4417 11.9069 14.1264 12.2738L11.2414 15.6403L10.159 14.5579C9.81719 14.2161 9.26357 14.2161 8.92159 14.5579C8.57961 14.8997 8.57979 15.4533 8.92159 15.7953L10.6719 17.5453ZM18 4.99996H16.5417V3.54163C16.5417 3.05855 16.1516 2.66663 15.6667 2.66663C15.1818 2.66663 14.7917 3.05855 14.7917 3.54163V4.99996H9.54167V3.54163C9.54167 3.05855 9.15156 2.66663 8.66667 2.66663C8.18177 2.66663 7.79167 3.05855 7.79167 3.54163V4.99996H6.33333C5.04453 4.99996 4 6.04449 4 7.33329V19C4 20.2888 5.04453 21.3333 6.33333 21.3333H18C19.2888 21.3333 20.3333 20.2888 20.3333 19V7.33329C20.3333 6.04449 19.287 4.99996 18 4.99996ZM18.5833 19C18.5833 19.3217 18.3216 19.5833 18 19.5833H6.33333C6.0117 19.5833 5.75 19.3217 5.75 19V9.66663H18.5833V19Z" />
    </svg>
  );
}