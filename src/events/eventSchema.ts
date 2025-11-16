/**
 * Universal Mind's Eye event schema.
 * This is intentionally Google Workspace–aware but generic enough
 * to support other sources.
 */

export type MindEyeSource =
  | "gmail"
  | "calendar"
  | "drive"
  | "docs"
  | "meet"
  | "android"
  | "system"
  | "other";

/**
 * A loose taxonomy for event kinds.
 * Examples:
 * - "gmail.message"
 * - "calendar.event"
 * - "drive.file"
 * - "docs.document"
 * - "meet.call"
 * - "android.activity"
 */
export type MindEyeKind = string;

/**
 * LAW-T metadata attached to an event.
 * - blockId: which time block this event belongs to (e.g. daily)
 * - segmentId: sub-block segment, often hourly
 * - blockGranularity: how the blockId was computed
 */
export interface LawTMetadata {
  blockId?: string;
  segmentId?: string;
  blockGranularity?: "daily" | "weekly" | "custom";
}

/**
 * The core event type for Mind's Eye.
 *
 * Payload is intentionally generic – each connector (Gmail, Calendar, etc.)
 * can define its own payload shape, but everything moves through this envelope.
 */
export interface MindEyeEvent<TPayload = any> {
  id: string;
  source: MindEyeSource;
  kind: MindEyeKind;
  createdAt: string; // ISO 8601 timestamp
  lawT?: LawTMetadata;
  payload: TPayload;
}
