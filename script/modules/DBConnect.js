const DBConnect = class {
    constructor() {
        this.API_KEY = 'b277a762e6d75673a56e8611ca28354f';
        this.SERVER = 'https://api.themoviedb.org/3';
    }

    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`);
        }
    }

    // getTestData = () => {
    //     return this.getData('test.json');
    // }

    // getTestCard = () => {
    //     return this.getData('card.json');
    // }

    getSearchResult = (query) => this.getData(
        `${this.SERVER}/search/tv?api_key=${this.API_KEY}&query=${query}&language=ru-RU`
    );


    getTvShow = id => this.getData(
        `${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`
    );
};

export default DBConnect;