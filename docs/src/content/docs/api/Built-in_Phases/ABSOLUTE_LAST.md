---
editUrl: false
next: false
prev: false
title: "ABSOLUTE_LAST"
---

> `const` **ABSOLUTE\_LAST**: `Phase`

Defined in: [std/phases.ts:131](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/phases.ts#L131)

ABSOLUTE_FIRST -> FIRST -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> LAST -> **ABSOLUTE_LAST**.

## Remarks

⚠️ This is an internal phase. It should only be used by the framework itself and third-party
plugins that need to run systems absolutely first or last in the update pipeline.
