export const brand = {
  ink: "#17181C",
  paper: "#FAFAF8",
  orange: "#F08C00",
};

/**
 * Static version of public/logo/jc-tile-animated.svg (cursor solid),
 * for build-time PNG rasterization via next/og ImageResponse.
 */
export function BrandTile({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="108" height="108" rx="26" fill={brand.ink} />
      <g fill="none" stroke={brand.paper} strokeWidth="10" strokeLinecap="round">
        <path d="M44,52 V66 Q44,80 31,80" />
        <path d="M82,56 A15,15 0 1 0 82,78" />
      </g>
      <circle cx="44" cy="36" r="5.5" fill={brand.paper} />
      <rect x="88" y="72" width="14" height="9" rx="2" fill={brand.orange} />
    </svg>
  );
}

/** Small static wordmark for OG image corners. */
export function BrandMark({ height, color }: { height: number; color: string }) {
  const width = (height * 140) / 110;
  return (
    <svg width={width} height={height} viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={color} strokeWidth="12" strokeLinecap="round">
        <path d="M34,42 V68 Q34,88 16,88" />
        <path d="M92,47 A22,22 0 1 0 92,81" />
      </g>
      <circle cx="34" cy="20" r="7" fill={color} />
      <rect x="106" y="76" width="22" height="12" rx="2.5" fill={brand.orange} />
    </svg>
  );
}
