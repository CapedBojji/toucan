import { cleanupHookState } from '../../topoRuntime'
import { ABSOLUTE_LAST } from '../phases'
import { Scheduler } from '../../scheduler'
import * as Planck from '@rbxts/planck'

function topoRuntimeCleanup() {
	cleanupHookState()
}

export function topoRuntimePlugin(scheduler: Scheduler, _planckScheduler: Planck.Scheduler<[]>) {
	scheduler.useSystem(topoRuntimeCleanup, ABSOLUTE_LAST)
}
