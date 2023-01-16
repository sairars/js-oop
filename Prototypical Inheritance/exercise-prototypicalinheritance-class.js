class HtmlElement {
    constructor() {
        this.click = function() {
            console.log('clicked');
        }
    }

    focus() {
        console.log('focused');
    }
}

class HtmlSelectElement extends HtmlElement {
    constructor(items = []) {
        super();
        this.items = items;
        
        this.addItem = function(item) {
            this.items.push(item);
        }

        this.removeItem = function(item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    }
}