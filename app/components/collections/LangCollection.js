const LangCollection = Backbone.Collection.extend({
    model: LangModel,
    url: "../data/data.json"
});
