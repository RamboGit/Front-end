import {MyDiv} from "./myDiv.js"
import {myCreate} from "./myCreate.js"

const ATTRIBUTE_SYMBOL = Symbol("attribute");
const PROPERTY_SYMBOL = Symbol("property");
const EVENT_SYMBOL= Symbol("event");

export class MyListView {
    constructor() {
        this[ATTRIBUTE_SYMBOL] = Object.create(null);
        this[PROPERTY_SYMBOL] = Object.create(null);
        this[EVENT_SYMBOL] = Object.create(null);

        this[PROPERTY_SYMBOL].children = [];
        this[PROPERTY_SYMBOL].headers = [];

        this.created();
    }

    getAttribute(name) {
        if(name === "style") {
            return this._container.getAttribute("style");
        }
        return this[ATTRIBUTE_SYMBOL][name];
    }

    setAttribute(name, value) {
        if(name === "style") {
            this._container.setAttribute("style", value);
        }

        return this[ATTRIBUTE_SYMBOL][name] = value;
    }

    addEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type]) {
            this[EVENT_SYMBOL][type] = new Set;
        }

        this[EVENT_SYMBOL][type].add(listener);
    }

    removeEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type]) {
            return
        }

        this[EVENT_SYMBOL][type].delete(listener);
    }

    triggerEvent(type) {
        for (let event of this[EVENT_SYMBOL][type]) {
            event.call(this);
        }
    }


    appendTo(element) {
        element.appendChild(this._container);
        this.mounted();
    }

    appendChild(child) {
        
        this[PROPERTY_SYMBOL].children.push(child);

        child.appendTo(this._container);

        // 每次在最后都追加 placeHolder, 对于存在的元素，需要先摘下来，再追加到末尾
        // 利用这个特性，保证placeHolder永远在最后
        this._container.append(this.placeHolder);

    }

    get children() {
        return this[PROPERTY_SYMBOL].children;
    }

    get style() {
        return this._container.style;
    }



    created() {
        this._container = document.createElement("div");

        //let element = <MyDiv><MyDiv>abc</MyDiv> xyz </MyDiv>;
        let element = <div><img style="width:200px;height:200px"></img>123 <div>456</div></div>
        element.appendTo(this._container);

   }


    mounted() {
      
    }



    unmounted() {

    }

    update() {

    }

}
