import {$} from "@core/Dom";

export function resizeHandler(e, $root) {
    const $target = $(e.target);
    const $parent = $target.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $target.$el.dataset.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    const sidePropValue = type === 'col' ? '-100vh' : '-100vw';

    let value = 0;

    $target.css({
        opacity: 1,
        [sideProp]: sidePropValue
    });

    document.onmousemove = e => {
        if (type === 'col') {
            const delta = e.pageX - coords.right;
            value = coords.width + delta;

            $target.css({transform: 'translate(' + delta + 'px, 0)'})
        } else {
            const delta = e.pageY - coords.bottom;
            value = coords.height + delta;

            $target.css({transform: 'translate(0, ' + delta + 'px)'})
        }
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        $target.css({
            opacity: 0,
            transform: ''
        });
        $parent.css({zIndex: ''});

        if (type === 'col') {
            const index = $parent.data.index;
            $root.findAll('[data-index="' + index + '"]')
                .forEach(el => {
                    el.style.width = value + 'px'
                });
        } else {
            $parent.$el.style.height = value + 'px';
            $parent.css({height: value + 'px'});
        }
    }
}