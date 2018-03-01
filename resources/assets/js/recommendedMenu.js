/**
 * Created by Administrator on 2018/1/15 0015.
 */
/**
 * Created by Administrator on 2018/1/8 0008.
 */
import {getKeyCodes,getEvent,getKey,getCodes} from "./toodo/_keycodes";


var keyCode = getKeyCodes();
var preCodes = getCodes();


function RecommendedMenu() {

    this.layoutLogo = document.createElement("div");
    this.layout = document.createElement("div");

    document.body.appendChild(this.layoutLogo);
    document.body.appendChild(this.layout);

    this.layoutLogo.className = 'index-logo';
    this.layoutLogo.id = 'index-logo';

    this.layout.className = 'index-menu';
    this.layout.id = 'index-menu';


    this.layoutLogo.innerHTML = '<img src="images/index_LOGO.png" />';
    this.layout.innerHTML =
        '<div id="menu-btn0" class="menu-btn"><img src="" /><p>话费充值</p></div>'+
        '<div id="menu-btn1" class="menu-btn"><img src="" /><p>个人中心</p></div>';

    this.items = [];
    for (let i=0;i<2;i++){
        let node = this.layout.querySelector("#menu-btn" + i);
        this.items.push(node);

        let img = node.querySelector('img');
        img.src = 'images/icon/nav_'+ i +'_0.png';
    }

}

RecommendedMenu.prototype = {

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
        node.className = focus ? 'menu-btn-focus' : 'menu-btn';

        let img = node.querySelector('img');
        let p = node.querySelector('p');

        if (focus){
            img.src = 'images/icon/nav_' + current + '_1.png';
            p.style.color = '#fff';
            p.style.fontWeight = 'bold';
        } else {
            img.src = 'images/icon/nav_' + current + '_0.png';
            p.style.fontWeight = 'normal';
            p.style.color = '#fff';
        }

    },
    setSelected: function (current) {
        for (let i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },

    handleKey: function (e) {//顶部菜单
        let owner = this;
        e = getEvent(e);
        let curKey = getKey(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                if (owner.current > 0) {
                    owner.current--;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.right:
                if (owner.current < 1) {
                    owner.current++;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.ok:
                if (owner.current == 0) {
                }
                if (owner.current == 1) {
                }
                break;
            case keyCode.esc:
                break;
        }

        if (typeof(owner.onKeyDown) === 'function') owner.onKeyDown(curKey);
    }

};

export {RecommendedMenu}