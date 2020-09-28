export class TableSelection {
    static selectedClassName = 'selected';

    constructor() {
        this.group = [];
        this.$current = null;
    }

    select($el) {
        this.clear();
        this.group.push($el);
        this.$current = $el;
        $el.addClass(TableSelection.selectedClassName).focus();
    }

    clear() {
        this.group.forEach($cell => $cell.removeClass(TableSelection.selectedClassName));
        this.group = [];
    }

    selectGroup($group = []) {
        this.clear();
        this.group = $group;
        $group.forEach($el => {
            $el.addClass(TableSelection.selectedClassName)
        });
    }
}