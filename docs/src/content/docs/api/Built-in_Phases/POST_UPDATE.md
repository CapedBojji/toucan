---
editUrl: false
next: false
prev: false
title: "POST_UPDATE"
---

> `const` **POST\_UPDATE**: [`Phase`](/api/interfaces/phase/)

Defined in: [src/std/phases.ts:75](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/std/phases.ts#L75)

Runs on `RunService.Heartbeat` in the following order (assuming no custom phases are added):

FIRST -> PRE_UPDATE -> UPDATE -> **POST_UPDATE** -> LAST.
