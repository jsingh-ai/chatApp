const UNIT_TO_MS: Record<string, number> = {
  s: 1000,
  m: 60_000,
  h: 3_600_000,
  d: 86_400_000,
};

export const parseDurationToMs = (
  value: string | number | undefined,
  defaultMs: number,
): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (!value) {
    return defaultMs;
  }

  const trimmed = value.toString().trim();

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  const amount = Number(trimmed.slice(0, -1));
  const unit = trimmed.slice(-1).toLowerCase();
  const multiplier = UNIT_TO_MS[unit];

  if (Number.isFinite(amount) && multiplier) {
    return amount * multiplier;
  }

  return defaultMs;
};

export const parseDurationToSeconds = (
  value: string | number | undefined,
  defaultSeconds: number,
): number => {
  const msValue = parseDurationToMs(value, defaultSeconds * 1000);
  return Math.max(1, Math.floor(msValue / 1000));
};
