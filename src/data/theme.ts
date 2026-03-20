export const themeTokens = {
  colors: {
    background: "#090D17",
    surface: "#101725",
    surfaceAlt: "#131D30",
    primary: "#3C7DFF",
    primaryStrong: "#2967E5",
    accent: "#22D3B6",
    text: "#E9EEF8",
    mutedText: "#A0A9BB",
    border: "rgba(152, 172, 204, 0.24)",
  },
  gradients: {
    heroGlow:
      "radial-gradient(circle at 20% 10%, rgba(60,125,255,0.32), transparent 48%), radial-gradient(circle at 80% 0%, rgba(34,211,182,0.18), transparent 42%)",
    sectionGlow:
      "radial-gradient(circle at 80% 20%, rgba(60,125,255,0.14), transparent 55%)",
    cta:
      "linear-gradient(135deg, rgba(13,25,45,0.98) 0%, rgba(20,39,70,0.97) 56%, rgba(16,63,92,0.94) 100%)",
  },
  shadows: {
    soft: "0 18px 50px rgba(2, 8, 24, 0.35)",
    inset: "inset 0 1px 0 rgba(255,255,255,0.08)",
  },
} as const;

export type ThemeTokens = typeof themeTokens;

