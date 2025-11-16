import { LawTMetadata, MindEyeEvent } from "./eventSchema";

/**
 * A LAW-T block represents a time-bounded window,
 * typically used for daily/weekly grouping.
 */
export interface LawTBlock {
  id: string;
  granularity: "daily" | "weekly" | "custom";
  /**
   * ISO date string representing the start of the block (UTC).
   */
  startsAt: string;
  /**
   * ISO date string representing the end of the block (UTC, exclusive).
   */
  endsAt: string;
}

/**
 * Group events by blockId (if present).
 */
export function groupEventsByBlock<TPayload>(
  events: MindEyeEvent<TPayload>[]
): Record<string, MindEyeEvent<TPayload>[]> {
  const result: Record<string, MindEyeEvent<TPayload>[]> = {};

  for (const event of events) {
    const blockId = event.lawT?.blockId ?? "unlabeled";
    if (!result[blockId]) {
      result[blockId] = [];
    }
    result[blockId].push(event);
  }

  return result;
}

/**
 * A trivial helper to produce a LawTBlock from a blockId and start/end.
 * Higher-level code (in lawT/timeline.ts) is responsible for computing dates.
 */
export function createLawTBlock(
  id: string,
  granularity: LawTBlock["granularity"],
  startsAt: string,
  endsAt: string
): LawTBlock {
  return {
    id,
    granularity,
    startsAt,
    endsAt,
  };
}
