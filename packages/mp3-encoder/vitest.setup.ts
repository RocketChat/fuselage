import { defineWebWorkers } from '@vitest/web-worker/pure';
import { vi } from 'vitest';

vi.stubGlobal('self', {
  dispatchEvent: vi.fn().mockImplementation(function (
    this: DedicatedWorkerGlobalScope,
    event: MessageEvent,
  ) {
    this.onmessage?.(event);
  }),
} as any);

defineWebWorkers({
  clone: 'none',
});
