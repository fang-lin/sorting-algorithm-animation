export const name = 'Merge';

export const code = `
function merge(list: Array<number>, low: number, mid: number, high: number): void {

    const ordered = [];
    let i = low, j = mid,
        k = 0, length;

    while (i < mid && j < high) {
        if (list[i] <= list[j])
            ordered[k++] = list[i++];
        else
            ordered[k++] = list[j++];
    }

    while (i < mid)
        ordered[k++] = list[i++];

    while (j < high)
        ordered[k++] = list[j++];

    for (k = 0, length = ordered.length; k < length; k++) {
        list[k + low] = ordered[k];
    }
}

function mergePass(list: Array<number>, length: number, n: number): void {

    let i;

    for (i = 0; i < n - 2 * length; i += 2 * length) {
        merge(list, i, i + length, i + 2 * length);
    }

    if (i + length < n) {
        merge(list, i, i + length, n);
    }
}

function mergeSort(list: Array<number>): void {
    for (let length = 1, n = list.length; length < n; length = 2 * length) {
        mergePass(list, length, n);
    }
}
`;

