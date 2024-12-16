import { FC, HTMLAttributes } from "react";
import { IColors } from "../../types/Colors.type";
import { useTheme } from "@emotion/react";
import { ITheme } from "../../types/Theme.type";

export type IButtonProps = {
  color?: IColors;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<IButtonProps> = ({
  color = 'primary',
  children,
  ...props
}) => {
  const theme = useTheme() as ITheme;

  return (
    <button
      style={{
        backgroundColor: theme.colors[color],
      }}
      { ...props }
    >
      { children }
    </button>
  );
};

