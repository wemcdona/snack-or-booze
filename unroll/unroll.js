function unroll(squareArray) {

    const result = [];
    if (squareArray.length === 0) return result;

    let top = 0;
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            result.push(squareArray[top][i]);
        }
        top++;

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            result.push(squareArray[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Traverse from right to left along the bottom row
            for (let i = right; i >= left; i--) {
                result.push(squareArray[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top along the left column
            for (let i = bottom; i >= top; i--) {
                result.push(squareArray[i][left]);
            }
            left++;
        }
    }

    return result;
}

module.exports = unroll;
