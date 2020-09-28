import {range} from "@core/utils"

export function shouldResize(event) {
    if (event.target.dataset.resize) {
        return true
    }
}

export function isCell(event) {
    if (event.target.dataset.type === 'cell') {
        return true
    }
}

export function matrix($target, $current) {
    const target = $target.id(true);
    const current = $current.id(true);

    const cols = range(current.cell, target.cell);
    const rows = range(current.row, target.row);
    return cols.reduce((acc, col) => {
        rows.forEach( row => acc.push(`${row}:${col}`));
        return acc;
    }, []);
}

export function nextSelector(key, {row, cell}) {
    const MIN_VALUE = 0;

    switch (key) {
        case 'Enter':
        case 'ArrowDown':
            row++;
            break;
        case 'Tab':
        case 'ArrowRight':
            cell++;
            break;
        case 'ArrowUp':
            row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
            break;
        case 'ArrowLeft':
            cell = cell - 1 < MIN_VALUE ? MIN_VALUE : cell - 1;
            break;
    }

    return `[data-id="${row}:${cell}"]`
}