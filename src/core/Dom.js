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