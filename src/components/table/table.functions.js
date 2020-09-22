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