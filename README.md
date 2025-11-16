# Mind's Eye Core (Google-Native)

**Mind's Eye Core** is the brainstem of the Mind's Eye OS constellation.

It defines:

- The **universal event schema** for Mind's Eye.
- **LAW-T** (Law of Time) utilities for time-labeling events into blocks/segments.
- Shared TypeScript types and helpers reused by other Mind's Eye repos.
- Transformation helpers for turning raw Google Workspace data into
  normalized Mind's Eye events.

This repo is designed to sit at the center of a **Google-native agentic stack**:

- Gmail, Calendar, Drive, Docs, Meet → ingested by connectors.
- Mind's Eye Core → normalizes + time-labels events.
- Hunting Engine → indexes/searches events.
- Dashboards/Agents → reason over a consistent event model.

---

## 🧠 Core Concepts

### MindEyeEvent

A **MindEyeEvent** is the basic unit of cognition.

It is a normalized event that can come from sources like:

- Gmail (`gmail`)
- Calendar (`calendar`)
- Docs/Drive (`docs`, `drive`)
- Meet (`meet`)
- Android/mobile (`android`)
- System/OS (`system`)

Each event is:

- time stamped
- given a stable ID
- labeled with LAW-T time metadata (optional in v0)
- tagged with a `kind` that describes the semantic type

### LAW-T (Law of Time)

LAW-T defines how Mind's Eye understands time:

- **blocks** (e.g. `2025-11-16` as a daily block)
- **segments** (e.g. hourly ranges)
- labels that can be attached to events

This lets us say:

> "These 24 Gmail events belong to block `2025-11-16` and segment `2025-11-16T09`."

---

## 📦 Usage (High Level)

Install (after cloning):

```bash
npm install
npm run build
