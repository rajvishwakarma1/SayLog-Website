type Blob = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

type Dot = {
  x: number;
  y: number;
  r: number;
  opacity: number;
};

const LAND_BLOBS: Blob[] = [
  { cx: -112, cy: 47, rx: 54, ry: 28 }, // North America
  { cx: -149, cy: 62, rx: 26, ry: 14 }, // Alaska
  { cx: -91, cy: 21, rx: 23, ry: 16 }, // Central America
  { cx: -59, cy: -16, rx: 21, ry: 41 }, // South America
  { cx: -42, cy: 73, rx: 16, ry: 9 }, // Greenland
  { cx: 12, cy: 52, rx: 23, ry: 12 }, // Europe
  { cx: 22, cy: 8, rx: 27, ry: 38 }, // Africa
  { cx: 59, cy: 44, rx: 59, ry: 24 }, // West and Central Asia
  { cx: 107, cy: 34, rx: 46, ry: 23 }, // East Asia
  { cx: 78, cy: 22, rx: 24, ry: 17 }, // Indian subcontinent
  { cx: 132, cy: -25, rx: 27, ry: 14 }, // Australia
  { cx: 48, cy: -20, rx: 11, ry: 9 }, // Madagascar
  { cx: 139, cy: 36, rx: 8, ry: 8 }, // Japan
  { cx: 170, cy: -42, rx: 10, ry: 6 }, // New Zealand
];

const WATER_CUTS: Blob[] = [
  { cx: -85, cy: 53, rx: 18, ry: 9 }, // Hudson Bay shaping
  { cx: -74, cy: 12, rx: 15, ry: 8 }, // Caribbean indentation
  { cx: 34, cy: 31, rx: 13, ry: 8 }, // Mediterranean opening
  { cx: 58, cy: 20, rx: 15, ry: 10 }, // Arabian Sea separation
  { cx: 100, cy: 7, rx: 16, ry: 10 }, // Bay of Bengal/SEA separation
  { cx: 120, cy: 55, rx: 22, ry: 11 }, // Siberia tapering
  { cx: 112, cy: -7, rx: 16, ry: 10 }, // Indonesia gap
  { cx: -59, cy: 10, rx: 13, ry: 11 }, // Atlantic split for Americas
];

function inEllipse(lon: number, lat: number, blob: Blob) {
  const dx = (lon - blob.cx) / blob.rx;
  const dy = (lat - blob.cy) / blob.ry;
  return dx * dx + dy * dy <= 1;
}

function noise(x: number, y: number) {
  const value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function isLand(lon: number, lat: number) {
  const inLand = LAND_BLOBS.some((blob) => inEllipse(lon, lat, blob));
  if (!inLand) return false;
  return !WATER_CUTS.some((blob) => inEllipse(lon, lat, blob));
}

function generateDots() {
  const dots: Dot[] = [];

  for (let lat = -58; lat <= 82; lat += 4) {
    for (let lon = -176; lon <= 176; lon += 4) {
      const jitterLon = lon + (noise(lon, lat) - 0.5) * 1.8;
      const jitterLat = lat + (noise(lon + 9, lat + 13) - 0.5) * 1.6;
      if (!isLand(jitterLon, jitterLat)) continue;

      const keep = noise(lon + 21, lat - 7);
      if (keep < 0.22) continue;

      const x = ((lon + 180) / 360) * 1080;
      const y = ((90 - lat) / 180) * 360;
      const dotNoise = noise(lon - 11, lat + 5);

      dots.push({
        x,
        y,
        r: dotNoise > 0.7 ? 1.4 : 1.1,
        opacity: 0.45 + dotNoise * 0.4,
      });
    }
  }

  return dots;
}

const DOTS = generateDots();

export default function DottedWorldMap({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1080 360"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <g fill="currentColor">
        {DOTS.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            opacity={dot.opacity}
          />
        ))}
      </g>
    </svg>
  );
}