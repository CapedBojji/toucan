---
editUrl: false
next: false
prev: false
title: "ChildOf"
---

> `const` **ChildOf**: [`ComponentHandle`](/toucan/api/core_ecs/componenthandle/)\<`undefined`\>

Defined in: [handle.ts:685](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/handle.ts#L685)

Built-in component used to represent parent-child relationships between entities.

## Example

```ts
const alice = entity()
const bob = entity().set(pair(ChildOf, alice))
assert(bob.parent() === alice)
```
