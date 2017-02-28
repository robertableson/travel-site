import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll{
  constructor(elements, offset){
    this.itemsToReveal = elements;

    this.hideInitially();
    this.createWaypoints(offset);
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(_offset){
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: _offset
      });
    });
  }
}

export default RevealOnScroll;
