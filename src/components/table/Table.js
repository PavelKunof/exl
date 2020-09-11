import {ExcelComponent} from "@core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = 'table';

    toHTML() {
        return ` <div class="row">
            <div class="row-info">&nbsp;</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
        </div>
        <div class="row">
            <div class="row-info">1</div>
            <div class="row-data">
                <div class="cell selected" contenteditable="true"></div>
                <div class="cell" contenteditable="true"></div>
                <div class="cell" contenteditable="true"></div>
            </div>
        </div>`
    }
}