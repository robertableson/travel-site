import $ from 'jquery';

class MobileMenu{
  constructor(){
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");

    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    console.log(this);
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    console.log("done");

  }

}

export default MobileMenu;
