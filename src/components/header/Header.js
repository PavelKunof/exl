import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent{
    static className = 'header';

    toHTML() {
        return `
        <div class="left-side">
            <input type="text" class="text-field" value="Новая таблица">
        </div>
        <div class="right-side">
            <div class="button"><i class="icon fas fa-trash"></i></div>
            <div class="button"><i class="icon far fa-times-circle"></i></div>
        </div>
        `;
    }
}