import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.prepare();
        this.emitter = options.emitter;
        this.unsubscribers = [];
    }

    toHTML() {
        return '<h1>Title</h1>';
    }

    prepare() {

    }

    $emmit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    $on(event, callback) {
        const unsubscribe = this.emitter.subscribe(event, callback);
        this.unsubscribers.push(unsubscribe);
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}