import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { s, fs } from '~/utils/responsive';
import { brandColors } from './tokens';

const AppSection = ({ title, subtitle, action, children, style, headerStyle }) => {
  return (
    <View style={[styles.section, style]}>
      {(title || subtitle || action) && (
        <View style={[styles.header, headerStyle]}>
          <View style={styles.titleBlock}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
          {action}
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: s(16),
  },
  header: {
    paddingHorizontal: s(18),
    marginBottom: s(10),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    color: brandColors.textDark,
    fontSize: fs(18),
    fontWeight: '800',
  },
  subtitle: {
    marginTop: s(3),
    color: brandColors.muted,
    fontSize: fs(12),
    fontWeight: '500',
  },
});

export default AppSection;
