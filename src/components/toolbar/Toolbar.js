import {ExcelComponent} from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'toolbar';

    toHTML() {
        return `
        <div class="button"><i class="icon fas fa-align-left"></i></div>
        <div class="button"><i class="icon fas fa-align-center"></i></div>
        <div class="button"><i class="icon fas fa-align-right"></i></div>
        <div class="button"><i class="icon fas fa-bold"></i></div>
        <div class="button"><i class="icon fas fa-italic"></i></div>
        <div class="button"><i class="icon fas fa-underline"></i></div>
        `;
    }
}