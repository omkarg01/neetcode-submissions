class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push({
            value: value,
            timestamp: timestamp
        });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        const values = this.keyStore.get(key);
        if (!values) {
            return "";
        }

        return binarySearch(values, timestamp);

    }
}

function binarySearch(values, timestamp) {

    let l = 0;
    let r = values.length - 1;

    let closestObject = null;

    while (l <= r) {

        let mid = l + Math.floor((r - l) / 2);

        if (values[mid].timestamp === timestamp) {

            return values[mid].value;

        } else if (timestamp > values[mid].timestamp) {

            closestObject = values[mid];
            l = mid + 1;

        } else {

            r = mid - 1;

        }
    }

    return closestObject ? closestObject.value : "";
}