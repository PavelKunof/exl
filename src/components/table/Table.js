import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/Dom";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize, isCell, matrix} from "@/components/table/table.functions";
import {TableSelection} from "@/components/table/TablSelection";

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
        } else if (isCell(e)) {
            if (e.shiftKey) {
                const $cells = matrix($(e.target), this.selection.$current)
                    .map(id => this.$root.find(`[data-id="${id}"]`));

                this.selection.selectGroup($cells);
            } else {
                this.selection.select($(e.target));
            }
        }
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        this.selection.select(this.$root.find('[data-id="0:0"]'));
    }

    toHTML() {
        return createTable(225);
    }
}