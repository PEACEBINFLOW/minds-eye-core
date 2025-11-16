import { MindEyeEvent, LawTMetadata } from "../events/eventSchema";
import {
  computeDailyBlockId,
  computeHourlySegmentLabel,
} from "./timeline";

/**
 * Configuration for LAW-T labeling.
 */
export interface LawTLabelerConfig {
  /**
   * Whether to apply daily blockId.
   */
  useDailyBlock?: boolean;
  /**
   * Whether to apply hourly segments.
   */
  useHourlySegments?: boolean;
}

/**
 * Default LAW-T labeling behavior:
 * - daily blockId
 * - hourly segmentId
 */
export const defaultLawTConfig: LawTLabelerConfig = {
  useDailyBlock: true,
  useHourlySegments: true,
};

/**
 * Attach LAW-T metadata to an event based on its createdAt timestamp.
 */
export function labelEventWithLawT<TPayload>(
  event: MindEyeEvent<TPayload>,
  config: LawTLabelerConfig = defaultLawTConfig
): MindEyeEvent<TPayload> {
  const createdAt = event.createdAt;
  const lawT: LawTMetadata = {
    ...event.lawT,
  };

  if (config.useDailyBlock) {
    lawT.blockId = computeDailyBlockId(createdAt);
    lawT.blockGranularity = "daily";
  }

  if (config.useHourlySegments) {
    lawT.segmentId = computeHourlySegmentLabel(createdAt);
  }

  return {
    ...event,
    lawT,
  };
}
