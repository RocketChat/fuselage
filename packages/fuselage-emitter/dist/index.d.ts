export declare type EventType = string | symbol;
export declare type StopHandler = () => void;
export declare type Handler<T = any> = (event?: T) => void;
export declare type WildcardHandler = (type: EventType, event?: any) => void;
export declare type EventHandlerList = Array<Handler>;
export declare type WildCardEventHandlerList = Array<WildcardHandler>;
export declare type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>;
export interface Emitter {
    events: EventHandlerMap;
    on<T = any>(type: EventType, handler: Handler<T>): void;
    off<T = any>(type: EventType, handler: Handler<T>): void;
    emit<T = any>(type: EventType, event?: T): void;
}
/**
 * @name emitter
 * @returns {Emitter}
 */
export declare class Emitter implements Emitter {
    events: EventHandlerMap;
}
