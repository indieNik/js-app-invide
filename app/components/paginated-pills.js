import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        
        let pages = Math.ceil(this.itemsToPaginate.length / this.offset);
        let pagesArr = [];
        for(let i=1; i <= pages; i++) {
            pagesArr.push(i);
        }
        this.set("pagesArr", pagesArr); // Dummy array for Ember to loop on
        
        this.set("paginatedItems", this.itemsToPaginate.slice(0, this.offset)); // Initial Slice of the Albums
    },

    didInsertElement() {
        document.getElementsByClassName("page-link")[0].classList.add("active"); //Show the first page as active on initial render
    },

    actions: {
        changePageTo(pageNo) {
            // Remove the Active state of any previous pages
            let elementsWithActiveClass = document.getElementsByClassName("active");
            [].forEach.call(elementsWithActiveClass, function(el) {
                el.classList.remove("active");
            });
            // Add an active class to the current page
            let targetElem = document.getElementById(pageNo);
            targetElem.classList.add("active");

            let page = pageNo -1;
            let start = (page * this.offset);
            let end = start + this.offset;
            this.set("page", pageNo);
            this.set("paginatedItems", this.itemsToPaginate.slice(start, end));
        }
    }
});
