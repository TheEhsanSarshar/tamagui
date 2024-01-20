import { GetProps } from '@tamagui/web';
import * as React from 'react';
type TamaguiButtonElement = HTMLButtonElement;
export type ToggleElement = TamaguiButtonElement;
export declare const ToggleFrame: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>;
type ToggleFrameProps = GetProps<typeof ToggleFrame>;
type ToggleItemExtraProps = {
    defaultValue?: string;
    disabled?: boolean;
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?(pressed: boolean): void;
};
export type ToggleProps = ToggleFrameProps & ToggleItemExtraProps;
export declare const Toggle: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "unstyled" | "pressTheme" | "active" | "orientation" | "elevation" | keyof import("@tamagui/web").StackStylePropsBase | "transparent" | "fullscreen" | "circular" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    pressTheme?: boolean | undefined;
    active?: boolean | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & ToggleItemExtraProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Toggle.d.ts.map