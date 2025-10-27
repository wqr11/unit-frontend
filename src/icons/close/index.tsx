import { IconProps } from "@/components/icon";

export const CloseIcon: React.FC<IconProps> = ({
  fill = "black",
  ...props
}) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M0.646446 23.2739L23.2739 0.646448"
        stroke={fill}
        strokeLinecap="round"
      />
      <path
        d="M1.35355 0.646446L23.981 23.2739"
        stroke={fill}
        strokeLinecap="round"
      />
    </svg>
  );
};
