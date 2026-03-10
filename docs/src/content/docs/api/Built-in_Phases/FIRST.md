---
editUrl: false
next: false
prev: false
title: "FIRST"
---

> `const` **FIRST**: [`Phase`](/api/interfaces/phase/)

Defined in: [src/std/phases.ts:51](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/std/phases.ts#L51)

The first phase in the update pipeline, running on `RunService.Heartbeat` before all other **update** phases, even custom ones.

**FIRST** -> PRE_UPDATE -> UPDATE -> POST_UPDATE -> LAST.
