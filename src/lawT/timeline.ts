import { createBlockId } from "../utils/id";

/**
 * Compute the daily block label (YYYY-MM-DD) for a given Date or ISO string.
 */
export function computeDailyLabel(dateOrIso: Date | string): string {
  const d =
    typeof dateOrIso === "string" ? new Date(dateOrIso) : new Date(dateOrIso);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Compute a daily block ID using the LAW-T convention.
 * Example: daily_2025-11-16
 */
export function computeDailyBlockId(dateOrIso: Date | string): string {
  const label = computeDailyLabel(dateOrIso);
  return createBlockId("daily", label);
}

/**
 * Compute an hourly segment label for a given timestamp.
 * Example: 2025-11-16T09
 */
export function computeHourlySegmentLabel(
  dateOrIso: Date | string
): string {
  const d =
    typeof dateOrIso === "string" ? new Date(dateOrIso) : new Date(dateOrIso);
  const base = computeDailyLabel(d);
  const hour = String(d.getUTCHours()).padStart(2, "0");
  return `${base}T${hour}`;
}
