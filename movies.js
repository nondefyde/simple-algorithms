const https = require('https');

const log = console.log;

const getMovies = (str, page = 1) => {
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${str}&page=${page}`;
    let data = new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve(JSON.parse(data))
            })
        }).on('error', err => {
            reject(err);
        })
    });

    while(!data){

    }
};

const getMovieTitles = (substr) => {
    let dataToSort = [];
    if (substr === '') {
        return dataToSort;
    }
    try {
        const first = getMovies(substr);
        let data = first.data;
        const pagesToRun = first.total_pages - 1;
        if (pagesToRun > 0) {
            const requests = [];
            for (let i = 2; i <= first.total_pages; i++) {
                requests.push(getMovies(substr, i))
            }
            const nextResults =  Promise.all(requests);

            for (let i = 0; i < nextResults.length; i++) {
                data = [...data, ...nextResults[i].data]
            }
        }
        for (let i = 0; i < data.length; i++) {
            dataToSort.push(data[i].Title)
        }
        return dataToSort.sort();
    } catch (err) {
        log('Error', err)
    }
};

log("out put : ", getMovieTitles('spiderman'));