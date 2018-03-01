/**
 * Created by Administrator on 2018/1/16 0016.
 */
import {getKeyCodes, getEvent, getKey, getCodes} from "./toodo/_keycodes";

let keyCode = getKeyCodes();
let preCodes = getCodes();

let itemSize = [
    [449, 307],
    [213, 307],
    [213, 307],
    [213, 143],
    [213, 143],
    [213, 143],
    [213, 143],
    [213, 143],
    [213, 143],
    [213, 143]
];

function FoodPage() {
    let nodeID = document.getElementById("food-0");

    if (nodeID){

    }else{
        this.layout = document.createElement("div");

        document.body.appendChild(this.layout);

        this.layout.className = 'contain-div ';
        this.layout.id = 'contain-div';

        this.layout.innerHTML =
            '<div id="food-0" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-1" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-2" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-3" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-4" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-5" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-6" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-7" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-8" class="contain">'+
            '<img src="" />'+
            '</div>'+
            '<div id="food-9" class="contain">'+
            '<img src="" />'+
            '</div>';

        this.items = [];
        for (let i = 0; i < 10; ++i) {
            let node = this.layout.querySelector('#food-'+ i);
            this.items.push(node);

            let img = node.querySelector('img');
            img.src = 'images/food/'+ i +'.jpg';
        }
    }
}
FoodPage.prototype = {

    current: 0,
    onKeyDown: null,

    show: function (current, onKeyDown) {
        let owner = this;

        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        }
    },
    hide: function () {
        this._setFocus(this.current, false);
    },
    _setFocus: function (current, focus) {
        let node = this.items[current];

        node.style.zIndex = focus ? '1' : '0';
        let size = itemSize[current];
        let img = node.querySelector('img');
        if (focus) {
            node.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.03 + 'px';
            img.style.top = -size[1] * 0.03 + 'px';
            img.className = "img-focus";
        } else {
            //node.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
            img.className = "";
        }
    },
    setSelected: function (current) {
        this.current = current;
        for (let i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function (e) {
        let owner = this;
        e = getEvent(e);
        let curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch(owner.current){
                    case 0:
                        break;
                    case 1:
                        owner.current=0;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current=1;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        break;
                    case 4:
                        owner.current=3;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current=4;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current=5;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current=6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch(owner.current){
                    case 0:
                        owner.current=1;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current=9;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current=4;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current=5;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current=6;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current=7;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch(owner.current){
                    case 3:
                        owner.current=0;
                        owner.setSelected(owner.current);
                        break;
                    case 4:
                        owner.current=0;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current=1;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current=2;
                        owner.setSelected(owner.current);
                        break;
                    case 7:
                        owner.current=8;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current=9;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch(owner.current){
                    case 0:
                        owner.current=3;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                        owner.current=5;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current=6;
                        owner.setSelected(owner.current);
                        break;
                    case 8:
                        owner.current=7;
                        owner.setSelected(owner.current);
                        break;
                    case 9:
                        owner.current=8;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }
        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }
};
export {FoodPage}