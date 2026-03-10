---
editUrl: false
next: false
prev: false
title: "component"
---

> **component**\<`Value`\>(`label?`): [`ComponentHandle`](/api/core_ecs/componenthandle/)\<`Value`\>

Defined in: [src/handle.ts:521](https://github.com/OverlineJunior/toucan/blob/709434bcef3b0130ed797e45cdf39d37c0b15ce9/src/handle.ts#L521)

Creates a new component.

Additionally, a `label` can be provided for easier identification during debugging.

## Type Parameters

### Value

`Value` = `undefined`

## Parameters

### label?

`string`

## Returns

[`ComponentHandle`](/api/core_ecs/componenthandle/)\<`Value`\>

## Example

```ts
// A component with a value.
const Health = component<number>()

// A tag component.
const IsAlive = component()
```
