---
editUrl: false
next: false
prev: false
title: "ABSOLUTE_FIRST"
---

> `const` **ABSOLUTE\_FIRST**: [`Phase`](/api/interfaces/phase/)

Defined in: [src/std/phases.ts:121](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/std/phases.ts#L121)

**ABSOLUTE_FIRST** -> FIRST -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> LAST -> ABSOLUTE_LAST.

## Remarks

⚠️ This is an internal phase. It should only be used by the framework itself and third-party
plugins that need to run systems absolutely first or last in the update pipeline.
