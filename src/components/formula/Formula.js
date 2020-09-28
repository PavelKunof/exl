import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/Dom";

export class Formula extends ExcelComponent {
    static className = 'formula';

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }

    onKeydown(e) {
        const keys = ['Enter', 'Tab'];

        if (keys.includes(e.key)) {
            e.preventDefault();

            this.$emmit('formula.done');
        }
    }

    onInput(e) {
        this.$emmit('formula.input', $(e.target).text());
    }

    init() {
        super.init();
        this.$formula = this.$root.find('.text-field');

        this.$on('table:select', $cell => {
            this.$formula.text($cell.text());
        });

        this.$on('table:input', text => {
            this.$formula.text(text);
        })
    }

    toHTML() {
        return `
        <div class="icon">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="function" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-function fa-w-20 fa-3x"><path fill="currentColor" d="M224 48c0-8.84-7.16-16-16-16h-48c-48.6 0-88 39.4-88 88v48H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h56v144c0 22.09-17.91 40-40 40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16c48.6 0 88-39.4 88-88V216h56c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-48c0-22.09 17.91-40 40-40h48c8.84 0 16-7.16 16-16V48zm93.43 60.92l-12.8-9.63c-7.22-5.44-17.81-4.01-22.92 3.41C244.39 157 224 222.17 224 288c0 65.85 20.39 131.02 57.71 185.3 5.11 7.43 15.7 8.85 22.92 3.41l12.8-9.63c6.84-5.14 8.09-14.54 3.28-21.59C289.2 399.27 272 343.92 272 288c0-55.91 17.2-111.26 48.71-157.5 4.8-7.05 3.55-16.44-3.28-21.58zm264.86-6.22c-5.11-7.43-15.7-8.85-22.92-3.41l-12.8 9.63c-6.84 5.14-8.09 14.54-3.28 21.59C574.8 176.73 592 232.08 592 288c0 55.91-17.2 111.26-48.71 157.5-4.8 7.05-3.55 16.44 3.28 21.59l12.8 9.63c7.22 5.44 17.81 4.02 22.92-3.41C619.61 419 640 353.83 640 288c0-65.85-20.39-131.02-57.71-185.3zm-74.84 120.84l-10.99-10.99c-6.07-6.07-15.91-6.07-21.98 0L432 255.03l-42.47-42.47c-6.07-6.07-15.91-6.07-21.98 0l-10.99 10.99c-6.07 6.07-6.07 15.91 0 21.98L399.03 288l-42.47 42.47c-6.07 6.07-6.07 15.91 0 21.98l10.99 10.99c6.07 6.07 15.91 6.07 21.98 0L432 320.97l42.47 42.47c6.07 6.07 15.91 6.07 21.98 0l10.99-10.99c6.07-6.07 6.07-15.91 0-21.98L464.97 288l42.47-42.47c6.08-6.07 6.08-15.92.01-21.99z" class=""></path></svg>
        </div>
        <input type="text" class="text-field">
        `;
    }
}