type EventType = string | symbol;

/**
  * returned by an on/once method, can be used to turn `off` the subscription
  * @public
*/
type OffCallbackHandler = () => void;
/**
  * Handler callback
  * @public
*/
type Handler<T = any> = (event?: T) => void;

type EventHandlerList = Array<Handler>;
type EventHandlerMap = Map<EventType, EventHandlerList>;

export interface Emitter {
  on<T = any>(type: EventType, handler: Handler<T>): void;
  once<T = any>(type: EventType, handler: Handler<T>): void;
  off<T = any>(type: EventType, handler: Handler<T>): void;
  emit<T = any>(type: EventType, event?: T): void;
}


const once = Symbol('once');
const evts = Symbol('evts');

/**
 * Emitter Class
 * @name emitter
 * @returns {Emitter}
 * @public
 */
export class Emitter implements Emitter {
  private [evts]: EventHandlerMap = new Map();

  private [once] = new WeakMap<Handler, number>();

  has(key: EventType): boolean {
    return this[evts].has(key);
  }

  on<T = any>(type: EventType, handler: Handler<T>) : OffCallbackHandler {
    const handlers = this[evts].get(type) || [] as EventHandlerList;
    handlers.push(handler as any);
    this[evts].set(type, handlers);
    return () => this.off(type, handler);
  }

  once<T = any>(type: EventType, handler: Handler<T>) : OffCallbackHandler {
    const counter = this[once].get(handler) || 0;
    this[once].set(handler, counter + 1);
    return this.on(type, handler);
  }

  off<T = any>(type: EventType, handler: Handler<T>) : void {
    const handlers = this[evts].get(type);
    if (!handlers) {
      return;
    }

    const counter = this[once].get(handler);
    if (counter > 1) {
      this[once].set(handler, counter - 1);
    } else {
      this[once].delete(handler);
    }

    if (handlers.length === 1) {
      this[evts].delete(type);
      return;
    }
    handlers.splice(handlers.findIndex((callback) => callback === handler) >>> 0, 1);
  }

  emit<T = any>(type: EventType, e: T) : void {
    [...this[evts].get(type) || [] as EventHandlerList].forEach((handler: Handler) => {
      handler(e);
      this[once].get(handler) && this.off(type, handler);
    });
  }
}
