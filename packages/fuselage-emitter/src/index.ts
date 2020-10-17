export type EventType = string | symbol;


export type StopHandler = () => void;

export type CallBackHandler<T = any> = (event?: T) => void;
export type Handler = {
  callback: CallBackHandler;
  once?: boolean;
}
export type EventHandlerList = Array<Handler>;

export type EventHandlerMap = Map<EventType, EventHandlerList>;

export interface Emitter {
  evts: EventHandlerMap;
  on<T = any>(type: EventType, handler: CallBackHandler<T>): void;
  once<T = any>(type: EventType, handler: CallBackHandler<T>): void;
  off<T = any>(type: EventType, handler: CallBackHandler<T>): void;
  emit<T = any>(type: EventType, event?: T): void;
}

/**
 * @name emitter
 * @returns {Emitter}
 */

export class Emitter implements Emitter {
  evts: EventHandlerMap = new Map();

  has(key: EventType): boolean {
    return this.evts.has(key);
  }

  private register<T = any>(type: EventType, handler: CallBackHandler<T>, once = false) : StopHandler {
    const handlers = this.evts.get(type) || [] as EventHandlerList;
    handlers.push({ callback: handler, once } as any);
    this.evts.set(type, handlers);
    return () => this.off(type, handler);
  }

  on<T = any>(type: EventType, handler: CallBackHandler<T>) : StopHandler {
    return this.register(type, handler);
  }

  once<T = any>(type: EventType, handler: CallBackHandler<T>) : StopHandler {
    return this.register(type, handler, true);
  }

  off<T = any>(type: EventType, handler: CallBackHandler<T>) : void {
    const handlers = this.evts.get(type);
    if (!handlers) {
      return;
    }
    if (handlers.length === 1) {
      this.evts.delete(type);
      return;
    }
    handlers.splice(handlers.findIndex(({ callback }) => callback === handler) >>> 0, 1);
  }

  emit<T = any>(type: EventType, e: T) : void {
    [...this.evts.get(type) || [] as EventHandlerList].forEach((handler: Handler) => {
      handler.callback(e);
      handler.once && this.off(type, handler.callback);
    });
  }
}
