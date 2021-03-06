window.Paginator = Backbone.View.extend({

   // className: "pagination",

    initialize:function () {
        this.model.bind("reset", this.render, this);
        this.render();
    },

    render:function () {

        var items = this.model.models;
        var len = items.length;
        var pageCount = Math.ceil(len / 8);

        $(this.el).html('<ul class="pagination pagination-centered">');

        for (var i=0; i < pageCount; i++) {
            $('ul', this.el).append("<li" + ((i + 1) === this.options.page ? " class='active'" : "") + "><a href='#plants/page/"+(i+1)+"'>" + (i+1) + "</a></li>");
        }

        return this;
    }
});