export class HttpClient {
    constructor(url) {
        this.url = url;
    }
    async Get() {
        try {
            const response = await fetch(this.url);
            console.log(response);
            if (response.ok) {
                return await response.json();
            }
            else {
                throw new Error(`GET misslyckades ${response.status} - ${response.statusText}`);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async post(body) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return await response.json();
        }
    }
}
