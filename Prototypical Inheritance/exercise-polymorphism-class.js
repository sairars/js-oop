class HtmlElement {
    constructor() {
        this.click = function() {
            console.log('clicked');
        };
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
            this.items.push(value);
        }
    
        this.removeItem = function(item) {
            this.items.splice(this.items.indexOf(value), 1);
        }

        this.render = function() {
            return `
<select>${this.items.map(item => `
    <option>${item}</option>`)}
</select>`;
        }
    }
}

class HtmlImageElement extends HtmlElement {
    constructor(src) {
        super();

        this.src = src;

        this.render = function() {
            return `<img src="${this.src}" />`;
        }
    }
}

const elements = [
    new HtmlSelectElement([1,2,3,4]), 
    new HtmlImageElement('http://')
];

for (let element of elements)
    console.log(element.render());