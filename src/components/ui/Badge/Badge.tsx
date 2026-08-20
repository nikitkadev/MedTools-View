import styles from "./styles.module.scss";

interface BadgeProps {
  text: string;
  color?: string;
  bgColor?: string;
  size: "sm" | "md" | "lg";
}

export const Badge = ({ text, color, bgColor, size }: BadgeProps) => {
  return (
    <div
      className={`${styles.badgeRoot} ${styles[size]}`}
      style={{
        color: color,
        background: bgColor,
      }}
    >
      {text}
    </div>
  );
};
