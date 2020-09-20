import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className = 'table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    onMousedown(e) {
        if (shouldResize(e)) {
            resizeHandler(e, this.$root);
        }

    }

    toHTML() {
        return createTable(225);
    }
}