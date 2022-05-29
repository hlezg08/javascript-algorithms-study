import Comparator from '../../../utils/comparator/Comparator';

/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

export default function binarySearch(sortedArray, seekElement, comparatorCallback) {
  let start = 0;
  let end = sortedArray.length - 1;
  const comparator = new Comparator(comparatorCallback);

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (comparator.lessThan(sortedArray[mid], seekElement)) start = mid + 1;
    else if (comparator.greaterThan(sortedArray[mid], seekElement)) end = mid-1;
    else return mid;
  }
  return -1;
}
