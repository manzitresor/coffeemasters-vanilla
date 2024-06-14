const Api = {
    url: './data/menu.json',
    fetchMenu: async() => {
        let result = await fetch(Api.url);
        return await result.json();
    }
}

export default Api;