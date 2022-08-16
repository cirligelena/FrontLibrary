const CREDENTIALS = {
    credentials: "same-origin"
};


export class HttpService {
    static async post(url, requestParams) {
        try {
            return await request(url, "POST", requestParams);
        } catch (error) {

            console.log("Error on POST request : ", error);

            throw error;
        }
    }
    static async put(url, requestParams) {
        try {
            return await request(url, "PUT", requestParams);
        } catch (error) {

            console.log("Error on PUT request : ", error);

            throw error;
        }
    }
    static async get(url, requestParams) {
        try {
            return await request(url, "GET", requestParams);
        } catch (error) {

            console.log("Error on GET request : ", error);
            throw error;
        }
    }
    static async delete(url, requestParams) {
        try {
            return await request(url, "DELETE", requestParams);
        } catch (error) {

            console.log("Error on DELETE request : ", error);
            throw error;
        }
    }

}

async function request(url, method, requestParams) {

    const config = {
        body: undefined,
        headers: {},
        method,
        CREDENTIALS
    }

    let HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    config.headers = HEADERS;

    if (method === "POST" || method === "PUT") {
        config.body = JSON.stringify(requestParams);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
        return response.status;
    }

    return await response.json();
}