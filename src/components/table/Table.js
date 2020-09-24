import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/Dom";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize, isCell, matrix, nextSelector} from "@/components/table/table.functions";
import {TableSelection} from "@/components/table/TablSelection";

export class Table extends ExcelComponent {
    static className = 'table';

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keyup'],
            ...options
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

    onKeyup(e) {
        const {key} = e;

        const keys = [
            'Tab',
            'Enter',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft'
        ];

        if (keys.includes(key) && !e.shiftKey) {
            e.preventDefault();

            const id = this.selection.$current.id(true);
            const nextCell = this.$root.find(nextSelector(key, id));

            this.selection.select(nextCell);
        }
    };

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        const $cell = this.$root.find('[data-id="0:0"]');
        this.selection.select($cell);

        this.$on('formula.input', text => {
            this.selection.$current.text(text);
        })
    }

    toHTML() {
        return createTable(225);
    }
}