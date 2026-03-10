---
editUrl: false
next: false
prev: false
title: "component"
---

> **component**\<`Value`\>(`label?`): [`ComponentHandle`](/toucan/api/core_ecs/componenthandle/)\<`Value`\>

Defined in: [handle.ts:521](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/handle.ts#L521)

Creates a new component.

Additionally, a `label` can be provided for easier identification during debugging.

## Type Parameters

### Value

`Value` = `undefined`

## Parameters

### label?

`string`

## Returns

[`ComponentHandle`](/toucan/api/core_ecs/componenthandle/)\<`Value`\>

## Example

```ts
// A component with a value.
const Health = component<number>()

// A tag component.
const IsAlive = component()
```
