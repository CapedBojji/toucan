---
editUrl: false
next: false
prev: false
title: "POST_STARTUP"
---

> `const` **POST\_STARTUP**: `Phase`

Defined in: [std/phases.ts:40](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/phases.ts#L40)

The last phase in the startup pipeline, running once after all other **startup** phases, even custom ones.

PRE_STARTUP -> STARTUP -> **POST_STARTUP**.

---

The startup pipeline runs before the update pipeline.
