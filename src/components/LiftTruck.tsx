import { SVGProps } from "react";

export const LiftTruck: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.1818 15.4545H18.3982C18.4934 15.1922 18.5432 14.9155 18.5455 14.6364V10.5455C18.5455 9.89447 18.2869 9.27014 17.8265 8.80983C17.3662 8.34951 16.7419 8.09091 16.0909 8.09091H11.1818C10.5308 8.09091 9.90651 8.34951 9.44619 8.80983C8.98588 9.27014 8.72727 9.89447 8.72727 10.5455V14.6364C8.72949 14.9155 8.77929 15.1922 8.87455 15.4545H7.90909C7.6921 15.4545 7.48399 15.3683 7.33055 15.2149C7.17711 15.0615 7.09091 14.8534 7.09091 14.6364V6.45455C7.09091 5.80356 6.83231 5.17924 6.37199 4.71892C5.91167 4.2586 5.28735 4 4.63636 4H3.81818C3.60119 4 3.39308 4.0862 3.23964 4.23964C3.0862 4.39308 3 4.60119 3 4.81818C3 5.03518 3.0862 5.24328 3.23964 5.39672C3.39308 5.55016 3.60119 5.63636 3.81818 5.63636H4.63636C4.85336 5.63636 5.06147 5.72256 5.21491 5.876C5.36834 6.02944 5.45455 6.23755 5.45455 6.45455V14.6364C5.45756 15.1738 5.6369 15.6954 5.96503 16.1211C6.29315 16.5468 6.75193 16.853 7.27091 16.9927C7.12023 17.3614 7.0615 17.7611 7.0998 18.1575C7.1381 18.5539 7.27227 18.935 7.49073 19.268C7.7092 19.6009 8.0054 19.8757 8.35377 20.0687C8.70215 20.2616 9.09224 20.3669 9.49038 20.3754C9.88853 20.384 10.2828 20.2955 10.6391 20.1177C10.9954 19.9398 11.3031 19.678 11.5356 19.3547C11.7682 19.0314 11.9185 18.6563 11.9738 18.2619C12.029 17.8676 11.9875 17.4657 11.8527 17.0909H14.6018C14.4673 17.4617 14.424 17.8594 14.4758 18.2504C14.5275 18.6414 14.6727 19.0141 14.8991 19.3371C15.1254 19.6601 15.4263 19.9238 15.7762 20.1058C16.1261 20.2878 16.5147 20.3829 16.9091 20.3829C17.3035 20.3829 17.6921 20.2878 18.042 20.1058C18.3919 19.9238 18.6927 19.6601 18.9191 19.3371C19.1455 19.0141 19.2907 18.6414 19.3424 18.2504C19.3942 17.8594 19.3509 17.4617 19.2164 17.0909H20.1818C20.3988 17.0909 20.6069 17.0047 20.7604 16.8513C20.9138 16.6978 21 16.4897 21 16.2727C21 16.0557 20.9138 15.8476 20.7604 15.6942C20.6069 15.5407 20.3988 15.4545 20.1818 15.4545ZM9.54545 18.7273C9.38363 18.7273 9.22545 18.6793 9.0909 18.5894C8.95635 18.4995 8.85148 18.3717 8.78955 18.2222C8.72763 18.0727 8.71142 17.9082 8.74299 17.7495C8.77456 17.5908 8.85249 17.445 8.96691 17.3305C9.08134 17.2161 9.22712 17.1382 9.38584 17.1066C9.54455 17.0751 9.70906 17.0913 9.85856 17.1532C10.0081 17.2151 10.1358 17.32 10.2257 17.4545C10.3157 17.5891 10.3636 17.7473 10.3636 17.9091C10.3636 18.1261 10.2774 18.3342 10.124 18.4876C9.97056 18.6411 9.76245 18.7273 9.54545 18.7273ZM11.1818 15.4545C10.9648 15.4545 10.7567 15.3683 10.6033 15.2149C10.4498 15.0615 10.3636 14.8534 10.3636 14.6364V10.5455C10.3636 10.3285 10.4498 10.1204 10.6033 9.96691C10.7567 9.81347 10.9648 9.72727 11.1818 9.72727H16.0909C16.3079 9.72727 16.516 9.81347 16.6695 9.96691C16.8229 10.1204 16.9091 10.3285 16.9091 10.5455V14.6364C16.9091 14.8534 16.8229 15.0615 16.6695 15.2149C16.516 15.3683 16.3079 15.4545 16.0909 15.4545H11.1818ZM16.9091 18.7273C16.7473 18.7273 16.5891 18.6793 16.4545 18.5894C16.32 18.4995 16.2151 18.3717 16.1532 18.2222C16.0913 18.0727 16.0751 17.9082 16.1066 17.7495C16.1382 17.5908 16.2161 17.445 16.3305 17.3305C16.445 17.2161 16.5908 17.1382 16.7495 17.1066C16.9082 17.0751 17.0727 17.0913 17.2222 17.1532C17.3717 17.2151 17.4995 17.32 17.5894 17.4545C17.6793 17.5891 17.7273 17.7473 17.7273 17.9091C17.7273 18.1261 17.6411 18.3342 17.4876 18.4876C17.3342 18.6411 17.1261 18.7273 16.9091 18.7273Z" />
    </svg>
  );
};