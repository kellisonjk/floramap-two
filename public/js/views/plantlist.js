window.PlantListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var plants = this.model.models;
        var len = plants.length;
        var startPos = (this.options.page - 1) * 8;
        var endPos = Math.min(startPos + 8, len);

        $(this.el).html('<ul style="padding:5px 0px 120px 0px;"></ul>');

        for (var i = startPos; i < endPos; i++) {
            $('ul', this.el).append(new PlantListItemView({model: plants[i]}).render().el);            
        }

       // Activate the paginator (the line "plants/page/:page"	 : "list" need to be 
       // uncommented on "main.js"
       // $(this.el).append(new Paginator({model: this.model, page: this.options.page}).render().el);

        return this;
    }
});

window.PlantListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});