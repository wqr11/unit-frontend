import { IconProps } from "@/components/icon";

export const SendIcon: React.FC<IconProps> = ({ fill = "black", ...props }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
      <circle cx="15" cy="15" r="14.5" stroke={fill} />
      <path
        d="M15.3536 8.64645C15.1583 8.45118 14.8417 8.45118 14.6464 8.64645L11.4645 11.8284C11.2692 12.0237 11.2692 12.3403 11.4645 12.5355C11.6597 12.7308 11.9763 12.7308 12.1716 12.5355L15 9.70711L17.8284 12.5355C18.0237 12.7308 18.3403 12.7308 18.5355 12.5355C18.7308 12.3403 18.7308 12.0237 18.5355 11.8284L15.3536 8.64645ZM15.5 21L15.5 9H14.5L14.5 21H15.5Z"
        fill={fill}
      />
    </svg>
  );
};
