export class Ajax {
    static get(url, responseCallback) {
        const xhr = new XMLHttpRequest;
        xhr.open('GET', url)
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    responseCallback(JSON.parse(xhr.response));
                } else {
                    throw Error(xhr.responseText);
                }
            }
        }
    }
    static post(url, data, callbackFunction) {
        const xhr = new XMLHttpRequest;
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/JSON')
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callbackFunction(JSON.parse(xhr.response));
                } else {
                    throw Error(xhr.responseText);
                }
            }
        }
    }
    static put(url, data, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(JSON.parse(xhr.response));
                } else {
                    if (errorCallback) {
                        errorCallback(xhr)
                    } else {
                        throw Error(xhr.responseText);
                    }
                }
            }
        }
    }
    static delete(url, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('DELETE', url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    successCallback(JSON.parse(xhr.response));
                } else {
                    if (errorCallback) {
                        errorCallback(xhr)
                    } else {
                        throw Error(xhr.responseText);
                    }
                }
            }
        }
    }

}