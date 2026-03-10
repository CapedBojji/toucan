---
editUrl: false
next: false
prev: false
title: "PRE_STARTUP"
---

> `const` **PRE\_STARTUP**: [`Phase`](/api/interfaces/phase/)

Defined in: [src/std/phases.ts:16](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/std/phases.ts#L16)

The first phase in the startup pipeline, running once before all others, even custom ones.

**PRE_STARTUP** -> STARTUP -> POST_STARTUP.

---

The startup pipeline runs before the update pipeline.
