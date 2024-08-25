"use client";

import { ThemeProvider } from "next-themes";
import { store } from "./store";
import { Provider } from 'react-redux'
export function Providers({ children }: { children: React.ReactNode }) {
  return (

    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
       <Provider store={store}> {children}</Provider>
    </ThemeProvider>
  );
}
