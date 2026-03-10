---
editUrl: false
next: false
prev: false
title: "useDeltaTime"
---

> **useDeltaTime**(): `number`

Defined in: [std/hooks/useDeltaTime.ts:21](https://github.com/OverlineJunior/toucan/blob/62f1b2542b7786caa0f969ae53354577a38c701d/src/std/hooks/useDeltaTime.ts#L21)

Returns the `os.clock()` time delta between the start of this and the last frame.

## Returns

`number`

## Example

```ts
function liftAll() {
    query(Position).forEach((id, position) => {
        id.set(
            Position,
			// We use delta time to make the movement frame-independent.
            position.add(Vector3.up).mul(useDeltaTime())
        )
    })
}
```
