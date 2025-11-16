/**
 * Utilities for generating stable IDs for events and blocks.
 * These are simple string helpers; you can swap for nanoid/uuid later.
 */

/**
 * Create a stable event ID, namespaced by source.
 * Example: gmail_msg-123, calendar_evt-456, etc.
 */
export function createEventId(source: string, rawId: string): string {
  return `${source}_${rawId}`;
}

/**
 * Create a block ID from a date string + granularity.
 * Example: daily_2025-11-16, weekly_2025-W46
 */
export function createBlockId(
  granularity: "daily" | "weekly",
  label: string
): string {
  return `${granularity}_${label}`;
}
