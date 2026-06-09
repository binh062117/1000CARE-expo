export const brandColors = {
  tealPrimary: '#0B7B8A',
  tealDark: '#075E6B',
  tealLight: '#E0F4F6',
  goldAccent: '#F5A623',
  textDark: '#1A1A2E',
  background: '#F6FAFB',
  surface: '#FFFFFF',
  surfaceAlt: '#FDFBFF',
  border: '#DDEBED',
  borderSoft: '#EEF5F6',
  muted: '#6D787E',
  mutedLight: '#9AA8AD',
  danger: '#FF3B30',
  success: '#10B981',
  warning: '#F5A623',
};

export const brandTypography = {
  title1: 28,
  title2: 18,
  body: 14,
  caption: 11,
};

export const brandRadius = {
  card: 24,
  control: 16,
  pill: 999,
  badge: 11,
};

export const brandShadow = {
  teal: {
    shadowColor: brandColors.tealPrimary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 6,
  },
  soft: {
    shadowColor: '#112B33',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
};

export const brandGradients = {
  primary: [brandColors.tealDark, brandColors.tealPrimary],
  light: ['#FFFFFF', brandColors.tealLight],
  gold: [brandColors.goldAccent, '#FFC04D'],
};
