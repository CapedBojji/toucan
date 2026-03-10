---
editUrl: false
next: false
prev: false
title: "LAST"
---

> `const` **LAST**: [`Phase`](/api/interfaces/phase/)

Defined in: [src/std/phases.ts:83](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/std/phases.ts#L83)

The last phase in the update pipeline, running on `RunService.Heartbeat` after all others, even custom ones.

FIRST -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> **LAST**.
