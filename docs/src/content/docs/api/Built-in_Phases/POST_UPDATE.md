---
editUrl: false
next: false
prev: false
title: "POST_UPDATE"
---

> `const` **POST\_UPDATE**: `Phase`

Defined in: [std/phases.ts:75](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/phases.ts#L75)

Runs on `RunService.Heartbeat` in the following order (assuming no custom phases are added):

FIRST -> PRE_UPDATE -> UPDATE -> **POST_UPDATE** -> LAST.
