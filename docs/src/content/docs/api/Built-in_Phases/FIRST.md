---
editUrl: false
next: false
prev: false
title: "FIRST"
---

> `const` **FIRST**: `Phase`

Defined in: [std/phases.ts:51](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/phases.ts#L51)

The first phase in the update pipeline, running on `RunService.Heartbeat` before all other **update** phases, even custom ones.

**FIRST** -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> LAST.
