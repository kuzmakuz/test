'use strict'
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height; 
        this.width = width; 
        this.bg = bg; 
        this.fontSize = fontSize; 
        this.textAlign = textAlign;
    }
    newDiv() {
        let elDiv = document.createElement('div');
        elDiv.innerHTML = 'Lyuboy text';
        elDiv.style.cssText = `height: ${this.height}px; 
                                width: ${this.width}px; 
                                background: ${this.bg}; 
                                font-size: ${this.fontSize}px; 
                                text-align: ${this.textAlign};`;
        document.body.appendChild(elDiv);
    }
}

const divTest = new Options(200, 300, 'red', 14, 'center');

divTest.newDiv();
    