import { IconProps } from "@/components/icon";

export const DotsIcon: React.FC<IconProps> = ({ fill = "black", ...props }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <circle cx="13" cy="13" r="12.5" stroke={fill} />
      <circle cx="7" cy="13" r="2" fill={fill} />
      <circle cx="19" cy="13" r="2" fill={fill} />
      <circle cx="13" cy="13" r="2" fill={fill} />
    </svg>
  );
};
