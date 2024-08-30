"use client"

import { ThemeProvider, useTheme } from "next-themes"

export default function Providers({children}:{children: React.ReactNode}){
    return (
        <ThemeProvider 
            enableSystem //read from client system
            attribute="class" //pacgage set classes 
            defaultTheme="system" //
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}

