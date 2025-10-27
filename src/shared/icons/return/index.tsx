import { IconWithBgProps } from "@/components/icon";

export const ReturnIcon: React.FC<IconWithBgProps> = ({
  fill = "black",
  bg = "none",
  ...props
}) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
      <circle cx="15" cy="15" r="14.5" stroke={fill} fill={bg} />
      <path
        d="M8.64645 14.6464C8.45118 14.8417 8.45118 15.1583 8.64645 15.3536L11.8284 18.5355C12.0237 18.7308 12.3403 18.7308 12.5355 18.5355C12.7308 18.3403 12.7308 18.0237 12.5355 17.8284L9.70711 15L12.5355 12.1716C12.7308 11.9763 12.7308 11.6597 12.5355 11.4645C12.3403 11.2692 12.0237 11.2692 11.8284 11.4645L8.64645 14.6464ZM20 14.5L9 14.5V15.5L20 15.5V14.5Z"
        fill={fill}
      />
    </svg>
  );
};
