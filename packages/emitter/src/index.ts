/**
 * @public
 */
export type EventType = string | symbol;

/**
 * @public
 */
export type Handler<T = any> = (event?: T) => void;

/**
 * @public
 */
export interface IEmitter {
  on<T = any>(type: EventType, handler: Handler<T>): void;
  once<T = any>(type: EventType, handler: Handler<T>): void;
  off<T = any>(type: EventType, handler: Handler<T>): void;
  emit<T = any>(type: EventType, event?: T): void;
}

type OffCallbackHandler = () => void;

type EventHandlerList = Array<Handler>;
type EventHandlerMap = Map<EventType, EventHandlerList>;

const once = Symbol('once');
const evts = Symbol('evts');

/**
 * The event emitter class.
 *
 * @public
 */
export class Emitter implements IEmitter {
  private [evts]: EventHandlerMap = new Map();

  private [once] = new WeakMap<Handler, number>();

  /**
   * Returns `true` if this emmiter has a listener attached to the `key` event type
   */
  has(key: EventType): boolean {
    return this[evts].has(key);
  }

  /**
   * Adds the `handler` function to listen events of the `type` type.
   *
   * @returns a function to unsubscribe the handler invoking `this.off(type, handler)`
   */
  on<T = any>(type: EventType, handler: Handler<T>) : OffCallbackHandler {
    const handlers = this[evts].get(type) || [] as EventHandlerList;
    handlers.push(handler as any);
    this[evts].set(type, handlers);
    return () => this.off(type, handler);
  }

  /**
   * Adds a *one-time* `handler` function for the event of the `type` type.
   *
   * @returns a function to unsubscribe the handler invoking `this.off(type, handler)`
   */
  once<T = any>(type: EventType, handler: Handler<T>) : OffCallbackHandler {
    const counter = this[once].get(handler) || 0;
    this[once].set(handler, counter + 1);
    return this.on(type, handler);
  }

  /**
   * Removes the specified `handler` from the list of handlers of the event of the `type` type
   */
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

  /**
   * Calls each of the handlers registered for the event of `type` type, in the
   * order they were registered, passing the supplied argument `e` to each.
   */
  emit<T = any>(type: EventType, e: T) : void {
    [...this[evts].get(type) || [] as EventHandlerList].forEach((handler: Handler) => {
      handler(e);
      this[once].get(handler) && this.off(type, handler);
    });
  }
}
