class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' ?
        document.querySelector(selector)
        : selector;
    }

    html(content) {
        if (typeof content === 'string') {
            this.$el.innerHTML = content;
            return this
        }
        return this.$el.outerHTML.trim();
    }

    append(node) {
        if (node instanceof Dom) {
            this.$el.append(node.$el)
        } else {
            this.$el.append(node);
        }

        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    clear() {
        this.html('');
        return this
    }
}
export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
};