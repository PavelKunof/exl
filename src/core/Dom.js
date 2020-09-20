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

    closest(selector) {
        return $(this.$el.closest(selector));
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    get data() {
        return this.$el.dataset;
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            this.$el.style[key] = styles[key];
        })
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