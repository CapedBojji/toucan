---
editUrl: false
next: false
prev: false
title: "query"
---

> **query**\<`Cs`\>(...`components`): [`Query`](/toucan/api/core_ecs/query/)\<`Cs`\>

Defined in: [query.ts:428](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/query.ts#L428)

Creates a new query for the specified components and/or pairs.

## Type Parameters

### Cs

`Cs` *extends* `ZeroUpToEight`\<[`ComponentHandle`](/toucan/api/core_ecs/componenthandle/)\<`unknown`\> \| [`Pair`](/toucan/api/core_ecs/pair/)\<`unknown`\>\>

## Parameters

### components

...`Cs`

## Returns

[`Query`](/toucan/api/core_ecs/query/)\<`Cs`\>

## Example

```ts
const Position = component<Vector3>()
const Velocity = component<Vector3>()

function updatePositions() {
    query(Position, Velocity).forEach((entity, position, velocity) => {
        entity.set(Position, position.add(velocity))
    })
}
```
