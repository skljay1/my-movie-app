const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4da9f0ca1c77c90f18a818a09b6432ea',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;