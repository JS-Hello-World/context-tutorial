import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC, ReactNode } from 'react';
import { THEME } from '../../constants/Theme.constant';

export type IThemeProviderProps = {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={THEME}>
      { children }
    </EmotionThemeProvider>
  );
};
