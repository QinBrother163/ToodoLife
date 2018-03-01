/**
 * Created by Administrator on 2018/1/8 0008.
 */
import {getKeyCodes, getEvent, getKey, getCodes} from "./toodo/_keycodes";

import {getNavPage} from './recommended';
import {hidePage} from './recommended';

let keyCode = getKeyCodes();
let preCodes = getCodes();


function RecommendedNav() {

    this.layout = document.createElement("div");

    document.body.appendChild(this.layout);

    this.layout.className = 'index-nav';
    this.layout.id = 'index-nav';

    this.layout.innerHTML =
        '<ul>' +
        '<li id="nav-0" class="nav-01 nav-activity">推荐</li>' +
        '<li id="nav-1" class="nav-02">会员专享</li>' +
        '<li id="nav-2" class="nav-03">美食</li>' +
        '<li id="nav-3" class="nav-04">娱乐</li>' +
        '<li id="nav-4" class="nav-05">游玩</li>' +
        '<li id="nav-5" class="nav-06">亲子</li>' +
        '<li id="nav-6" class="nav-07">丽人</li>' +
        '<li id="nav-7" class="nav-08">运动</li>' +
        '<li id="nav-8" class="nav-09">教育</li>' +
        '<li id="nav-9" class="nav-10">购物</li>' +
        '<li id="nav-10" class="nav-11">票务</li>' +
        '<li id="nav-11" class="nav-12">魅力广东</li>' +
        '<li id="nav-12" class="nav-13">更多</li>' +
        '</ul>';

    this.items = [];
    for (let i = 0; i < 13; ++i) {
        let node = this.layout.querySelector('#nav-' + i);
        this.items.push(node);
    }
}

RecommendedNav.prototype = {

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
    hidePage: function (current, focus) {

    },
    _setFocus: function (current, focus) {

        let node = this.items[current];
        node.className = focus ? 'nav-activity' : 'nav-nofocus';

        if (focus) {
            node.className = "nav-activity";
        } else {
            node.className = "nav-nofocus";
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
                    getNavPage(owner.current);
                    hidePage(owner.current);
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.right:
                if (owner.current < 12) {
                    owner.current++;
                    getNavPage(owner.current);
                    hidePage(owner.current);
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


export {RecommendedNav}