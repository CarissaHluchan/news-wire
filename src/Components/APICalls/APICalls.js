const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
        if (!response.ok) {
            const err = new Error(response.statusText);
            err.statusCode = response.status;
            throw err;
        }
        const data = await response.json();
        console.log('API Response:', data);
        return data;
    } catch (error) {
        console.error('ERROR FETCHING DATA:', error.message);
    }
}