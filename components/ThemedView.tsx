import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}


// import { View, Text, type ViewProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedViewProps = ViewProps & {
//   lightColor?: string;
//   darkColor?: string;
//   lightTextColor?: string;
//   darkTextColor?: string;
//   text?: string;
// };

// export function ThemedView({
//   style,
//   lightColor,
//   darkColor,
//   lightTextColor = '#000',  // Default to black for light mode
//   darkTextColor = '#fff',   // Default to white for dark mode
//   text = '',
//   ...otherProps
// }: ThemedViewProps) {
//   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
//   const textColor = useThemeColor({ light: lightTextColor, dark: darkTextColor }, 'text');

//   return (
//     <View style={[{ backgroundColor }, style]} {...otherProps}>
//       <Text style={{ color: textColor }}>{text}</Text>
//     </View>
//   );
// }
