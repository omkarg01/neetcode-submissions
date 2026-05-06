class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        let l = 1;
        let r = Math.max(...piles);

        let minimumSpeed = r;

        while (l <= r) {

            let mid = Math.floor((l + r) / 2);

            if (isMinimumValid(piles, h, mid)) {

                minimumSpeed = mid;
                r = mid - 1;

            } else {

                l = mid + 1;

            }
        }

        return minimumSpeed;
    }
}

function isMinimumValid(piles, h, mid) {

    let totalHours = 0;

    for (let pile of piles) {
        totalHours += Math.ceil(pile / mid);
    }

    return totalHours <= h;
}