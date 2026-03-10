---
editUrl: false
next: false
prev: false
title: "LAST"
---

> `const` **LAST**: `Phase`

Defined in: [std/phases.ts:83](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/phases.ts#L83)

The last phase in the update pipeline, running on `RunService.Heartbeat` after all others, even custom ones.

FIRST -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> **LAST**.
