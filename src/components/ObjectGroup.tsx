import { SVGProps } from "react";

export const ObjectGroup: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M21 6.84694V5.13878C21 4.50996 20.4962 4 19.875 4H18.1875C17.5663 4 17.0625 4.50996 17.0625 5.13878H6.9375C6.9375 4.50996 6.43371 4 5.8125 4H4.125C3.50379 4 3 4.50996 3 5.13878V6.84694C3 7.47576 3.50379 7.98571 4.125 7.98571V15.9571C3.50379 15.9571 3 16.4671 3 17.0959V18.8041C3 19.4329 3.50379 19.9429 4.125 19.9429H5.8125C6.43371 19.9429 6.9375 19.4329 6.9375 18.8041H17.0625C17.0625 19.4329 17.5663 19.9429 18.1875 19.9429H19.875C20.4962 19.9429 21 19.4329 21 18.8041V17.0959C21 16.4671 20.4962 15.9571 19.875 15.9571V7.98571C20.4973 7.98571 21 7.47682 21 6.84694ZM5.53125 18.5194H4.40625V17.3806H5.53125V18.5194ZM5.53125 6.56224H4.40625V5.42347H5.53125V6.56224ZM18.1875 15.9571C17.5663 15.9571 17.0625 16.4671 17.0625 17.0959H6.9375C6.9375 16.4671 6.43371 15.9571 5.8125 15.9571V7.98571C6.43371 7.98571 6.9375 7.47576 6.9375 6.84694H17.0625C17.0625 7.47576 17.5663 7.98571 18.1875 7.98571V15.9571ZM19.5938 18.5194H18.4688V17.3806H19.5938V18.5194ZM19.5938 6.56224H18.4688V5.42347H19.5938V6.56224ZM13.125 11.9714V9.12449C13.125 8.49567 12.6212 7.98571 12 7.98571H8.0625C7.44129 7.98571 6.9375 8.49567 6.9375 9.12449V11.9714C6.9375 12.6002 7.44129 13.1102 8.0625 13.1102H12C12.6223 13.1102 13.125 12.6013 13.125 11.9714ZM11.7188 11.6867H8.34375V9.40918H11.7188V11.6867ZM15.9375 10.8327H14.25V12.2561H15.6562V14.5337H12.2812V14.249H10.875V14.8184C10.875 15.4472 11.3788 15.9571 12 15.9571H15.9375C16.5587 15.9571 17.0625 15.4472 17.0625 14.8184V11.9714C17.0625 11.3415 16.5598 10.8327 15.9375 10.8327Z" />
    </svg>
  );
};