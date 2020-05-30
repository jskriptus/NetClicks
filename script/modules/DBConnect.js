const DBConnect = class {
    constructor() {
        this.API_KEY = 'b277a762e6d75673a56e8611ca28354f';
        this.SERVER = 'https://api.themoviedb.org/3';
        this.temp = `${this.SERVER}/search/tv?api_key=${this.API_KEY}`;
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
        this.temp + '&query=' + query + '&language=ru-RU'
    )


    getNextPage = (query, page) => this.getData(
        this.temp + '&query=' + query + '&page=' + page
    )


    getTvShow = id => this.getData(
        `${this.SERVER}/tv/${id}?api_key=${this.API_KEY}&language=ru-RU`
    )

    getTopRated = () => this.getData(
        `${this.SERVER}/tv/top_rated?api_key=${this.API_KEY}&language=ru-RU`
    )

    getPopular = () => this.getData(
        `${this.SERVER}/tv/popular?api_key=${this.API_KEY}&language=ru-RU`
    )

    getAiringToday = () => this.getData(
        `${this.SERVER}/tv/airing_today?api_key=${this.API_KEY}&language=ru-RU`
    )

    getOnTheAir = () => this.getData(
        `${this.SERVER}/tv/on_the_air?api_key=${this.API_KEY}&language=ru-RU`
    )

};

export default DBConnect;