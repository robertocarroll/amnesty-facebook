class LangCollection extends Collection {
    constructor(options) {
        super(options);
        this.model = LangModel;
        url: "../data/data.json";
    }
}


