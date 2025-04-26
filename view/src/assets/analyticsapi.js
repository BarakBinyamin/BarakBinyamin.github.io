const BASE_URL = "https://rockz.one/anaytics/"
const LOG_VIEW = BASE_URL + "logView/"

class API {
    static async logView(url){
        try {
            const response = await fetch(LOG_VIEW, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'query' : url }),
            })
            if (!response.ok) {throw new Error('Subscription failed')}
            return await response.json()
        } catch (error) {
            console.error('Error subscribing to blog:', error);
            throw error;
        }
    }
}

export default API