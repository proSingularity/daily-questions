import React, { FC } from "react";
import { AccessibilityRole, StyleSheet } from "react-native";
import { List, Text, useTheme } from "react-native-paper";

interface Props {
  title: string;
  description?: string;
  onPress: () => void;
  value?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  /** @default button */
  accessibilityRole?: AccessibilityRole;
}

const styles = StyleSheet.create({
  paddingLeft: {
    paddingLeft: 12,
  },
});

const SettingsButtonRow: FC<Props> = ({
  title,
  description,
  onPress,
  value,
  accessibilityLabel,
  accessibilityHint,
  disabled,
  accessibilityRole = "button",
}) => {
  const theme = useTheme();
  return (
    <List.Item
      title={title}
      titleStyle={[styles.paddingLeft, { color: theme.colors.text }]}
      description={description}
      descriptionStyle={styles.paddingLeft}
      right={
        value !== undefined
          ? () => (
              // TODO double check whether accessible false works the way we expect
              <Text style={{ textAlignVertical: "center" }}>{value}</Text>
            )
          : undefined
      }
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      // TODO double check accessibility (needs to say the current value!)
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      disabled={disabled}
    />
  );
};

export default SettingsButtonRow;
