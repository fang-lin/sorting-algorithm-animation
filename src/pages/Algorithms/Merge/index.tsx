import React, {FunctionComponent} from 'react';
import CodeArea from '../../../components/CodeArea';

const code = `
function merge(list, low, mid, high) {

    var ordered = [],
        i = low, j = mid,
        k = 0, len;

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

    for (k = 0, len = ordered.length; k < len; k++) {
        list[k + low] = ordered[k];
    }
}

function mergePass(list, len, n) {

    var i;

    for (i = 0; i < n - 2 * len; i += 2 * len) {
        merge(list, i, i + len, i + 2 * len);
    }

    if (i + len < n) {
        merge(list, i, i + len, n);
    }
}

function mergeSort(list) {
    for (var len = 1, n = list.length; len < n; len = 2 * len) {
        mergePass(list, len, n);
    }
}
`;
const Merge: FunctionComponent = () => {
    return <CodeArea code={code}/>;
};

export const name = 'Merge';

export default Merge;