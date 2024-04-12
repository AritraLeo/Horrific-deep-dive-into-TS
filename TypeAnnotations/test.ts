namespace TypeAnnotations {
    
    type Color = ColorString | ColorRGB;
    
    type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
    type ColorRGB = [red: number, green: number, blue: number]
    
    type Theme = Record<string, Color>;

    /*
    const theme: Theme = {
        primary: 'red',
        secondary: [0, 255, 0],
        tertiary: 'purple', // throws error in theme.secondary access for r g b as it doesn't confirm to the Theme type
    }
    */
    
    const theme = {
        primary: 'red',
        secondary: [0, 255, 0],
        tertiary: 'purple', // doesn't throw error 
    } satisfies Theme;

    const [r, g, b] = theme.secondary;
}    
