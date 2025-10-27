import { IconProps } from "@/components/icon";

export const SearchIcon: React.FC<IconProps> = ({
  fill = "black",
  ...props
}) => {
  return (
    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" {...props}>
      <circle cx="19" cy="10" r="9.5" stroke={fill} />
      <line
        x1="0.98529"
        y1="28.803"
        x2="12.293"
        y2="17.0147"
        stroke={fill}
        strokeLinecap="round"
      />
    </svg>
  );
};
