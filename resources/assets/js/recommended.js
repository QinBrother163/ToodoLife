/**
 * Created by Administrator on 2018/1/8 0008.
 */

import {getKeyCodes} from './toodo/_keycodes';

import {RecommendedMenu} from './recommendedMenu';
import {RecommendedNav} from './recommendedNav';
import {RecommendedPage} from './recommendedPage';
import {MembersPage} from './membersPage';
import {FoodPage} from './foodPage';
import {RecreationPage} from './recreationPage';
import {AttractionsPage} from './attractionsPage';
import {ChildrenPage} from './childrenPage';
import {GirlPage} from './girlPage';
import {SportsPage} from './sportsPage';
import {EduPage} from './eduPage';
import {ShopPage} from './shopPage';
import {TicketPage} from './ticketPage';
import {CharmGDPage} from './charmGDPage';
import {MorePage} from './morePage';

let keyCode = getKeyCodes();

function getNavPage(current) {//切换new Page

    switch (current) {
        case 0:
            if (recommendedPage == null) {
                recommendedPage = new RecommendedPage();
            }
            currentIndex = recommendedPage.current;
            break;
        case 1:
            if (membersPage == null) {
                membersPage = new MembersPage();
            }
            MembersCurrentIndex = membersPage.current;
            break;
        case 2:
            if (foodPage == null) {
                foodPage = new FoodPage();
            }
            FoodCurrentIndex = foodPage.current;
            break;
        case 3:
            if (recreationPage == null) {
                recreationPage = new RecreationPage();
            }
            RecreationCurrentIndex = recreationPage.current;
            break;
        case 4:
            if (attractionsPage == null) {
                attractionsPage = new AttractionsPage();
            }
            AttractionsCurrentIndex = attractionsPage.current;
            break;
        case 5:
            if (childrenPage == null) {
                childrenPage = new ChildrenPage();
            }
            ChildrenCurrentIndex = childrenPage.current;
            break;
        case 6:
            if (girlPage == null) {
                girlPage = new GirlPage();
            }
            GirlPageCurrentIndex = girlPage.current;
            break;
        case 7:
            if (sportsPage == null) {
                sportsPage = new SportsPage();
            }
            SportsCurrentIndex = sportsPage.current;
            break;
        case 8:
            if (eduPage == null) {
                eduPage = new EduPage();
            }
            EduCurrentIndex = eduPage.current;
            break;
        case 9:
            if (shopPage == null) {
                shopPage = new ShopPage();
            }
            ShopCurrentIndex = shopPage.current;
            break;
        case 10:
            if (ticketPage == null) {
                ticketPage = new TicketPage();
            }
            TicketCurrentIndex = ticketPage.current;
            break;
        case 11:
            if (charmGDPage == null) {
                charmGDPage = new CharmGDPage();
            }
            CharmGDCurrentIndex = charmGDPage.current;
            break;
        case 12:
            if (morePage == null) {
                morePage = new MorePage();
            }
            MoreCurrentIndex = morePage.current;
            break;
    }

}

function hidePage(NavCurrentIndex) {
    navIndex = NavCurrentIndex;
    let node = document.body.querySelectorAll(".contain-div");

    for (let i = 0; i < node.length; i++) {
        if (NavCurrentIndex == i) {
            node[i].style.display = "block";
        } else {
            node[i].style.display = "none";
        }
    }
}

function hideNavBorder() {
    let items = [];
    let nav = document.getElementById("index-nav");
    if (items.length > 1){

    }else{
        for (let i = 0; i < 13; ++i) {
            let node = nav.querySelector('#nav-' + i);
            items.push(node);
        }
    }
    let node = items[navIndex];
    node.className = "nav-toggle";
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            recommendedMenu.hide();
            recommendedNav.show(recommendedNav.current, onNavKey);
            break;
    }
}

function onNavKey(key) {//添加显示模块
    switch (key) {
        case keyCode.up:
            recommendedNav.hide();
            recommendedMenu.show(recommendedMenu.current, onMenuKey);
            hideNavBorder();
            break;
        case keyCode.down:
            switch (NavCurrentIndex) {
                case 0:
                    recommendedNav.hide();
                    recommendedPage.show(recommendedPage.current, onPageKey);
                    hideNavBorder();
                    break;
                case 1:
                    recommendedNav.hide();
                    membersPage.show(membersPage.current, onMembersPageKey);
                    hideNavBorder();
                    break;
                case 2:
                    recommendedNav.hide();
                    foodPage.show(foodPage.current, onFoodPageKey);
                    hideNavBorder();
                    break;
                case 3:
                    recommendedNav.hide();
                    recreationPage.show(recreationPage.current, onRecreationPageKey);
                    hideNavBorder();
                    break;
                case 4:
                    recommendedNav.hide();
                    attractionsPage.show(attractionsPage.current, onAttractionsPageKey);
                    hideNavBorder();
                    break;
                case 5:
                    recommendedNav.hide();
                    childrenPage.show(childrenPage.current, onChildrenPageKey);
                    hideNavBorder();
                    break;
                case 6:
                    recommendedNav.hide();
                    girlPage.show(girlPage.current, onGirlPageKey);
                    hideNavBorder();
                    break;
                case 7:
                    recommendedNav.hide();
                    sportsPage.show(sportsPage.current, onSportsPageKey);
                    hideNavBorder();
                    break;
                case 8:
                    recommendedNav.hide();
                    eduPage.show(eduPage.current, onEduPageKey);
                    hideNavBorder();
                    break;
                case 9:
                    recommendedNav.hide();
                    shopPage.show(shopPage.current, onShopPageKey);
                    hideNavBorder();
                    break;
                case 10:
                    recommendedNav.hide();
                    ticketPage.show(ticketPage.current, onTicketPageKey);
                    hideNavBorder();
                    break;
                case 11:
                    recommendedNav.hide();
                    charmGDPage.show(charmGDPage.current, onCharmGDPageKey);
                    hideNavBorder();
                    break;
                case 12:
                    recommendedNav.hide();
                    morePage.show(morePage.current, onMorePageKey);
                    hideNavBorder();
                    break;
            }
            break;
    }
    NavCurrentIndex = recommendedNav.current;
}

function onPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (currentIndex) {
                case 0:
                case 1:
                case 6:
                    recommendedPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    currentIndex = recommendedPage.current;
}

function onMembersPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (MembersCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    membersPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    MembersCurrentIndex = membersPage.current;
}

function onFoodPageKey(key) {

    switch (key) {
        case keyCode.up:
            switch (FoodCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 9:
                    foodPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    FoodCurrentIndex = foodPage.current;
}

function onRecreationPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (RecreationCurrentIndex) {
                case 0:
                case 1:
                case 8:
                    recreationPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    RecreationCurrentIndex = recreationPage.current;
}

function onAttractionsPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (AttractionsCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    attractionsPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    AttractionsCurrentIndex = attractionsPage.current;
}

function onChildrenPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (ChildrenCurrentIndex) {
                case 0:
                case 1:
                case 8:
                    childrenPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    ChildrenCurrentIndex = childrenPage.current;
}

function onGirlPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (GirlPageCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    girlPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    GirlPageCurrentIndex = girlPage.current;
}

function onSportsPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (SportsCurrentIndex) {
                case 0:
                case 1:
                case 6:
                case 7:
                    sportsPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    SportsCurrentIndex = sportsPage.current;
}

function onEduPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (EduCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    eduPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    EduCurrentIndex = eduPage.current;
}

function onShopPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (ShopCurrentIndex) {
                case 0:
                case 1:
                case 6:
                    shopPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    ShopCurrentIndex = shopPage.current;
}

function onTicketPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (TicketCurrentIndex) {
                case 0:
                case 1:
                case 6:
                    ticketPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    TicketCurrentIndex = ticketPage.current;
}

function onCharmGDPageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (CharmGDCurrentIndex) {
                case 0:
                case 1:
                case 2:
                    charmGDPage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
            }
            break;
    }
    CharmGDCurrentIndex = charmGDPage.current;
}

function onMorePageKey(key) {
    switch (key) {
        case keyCode.up:
            switch (MoreCurrentIndex) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    morePage.hide();
                    recommendedNav.show(recommendedNav.current, onNavKey);
                    break;
                default:
                    break;
            }
            break;
    }
    MoreCurrentIndex = morePage.current;
}

let recommendedMenu;
let recommendedNav;
let recommendedPage;
let membersPage;
let foodPage;
let recreationPage;
let attractionsPage;
let childrenPage;
let girlPage;
let sportsPage;
let eduPage;
let shopPage;
let ticketPage;
let charmGDPage;
let morePage;

let currentIndex;
let NavCurrentIndex;
let MembersCurrentIndex;
let FoodCurrentIndex;
let RecreationCurrentIndex;
let AttractionsCurrentIndex;
let ChildrenCurrentIndex;
let GirlPageCurrentIndex;
let SportsCurrentIndex;
let EduCurrentIndex;
let ShopCurrentIndex;
let TicketCurrentIndex;
let CharmGDCurrentIndex;
let MoreCurrentIndex;
let navIndex = 0;

window.onload = function () {

    recommendedMenu = new RecommendedMenu();
    recommendedNav = new RecommendedNav();
    recommendedPage = new RecommendedPage();
    recommendedNav.show(recommendedNav.current, onNavKey);

    currentIndex = recommendedPage.current;
    NavCurrentIndex = recommendedNav.current;

};


export {getNavPage, hidePage}