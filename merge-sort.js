export const MergeSort = function (array, start = 0, end = array.length - 1) {
  if (start >= end) return [array[start]];
  const mid = Math.floor((start + end) / 2);
  let arrayLeft = MergeSort(array, start, mid);
  let arrayRight = MergeSort(array, mid + 1, end);
  let k = 0;
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arrayLeft.length && j < arrayRight.length) {
    if (arrayLeft[i] < arrayRight[j]) {
      mergedArray[k - 1] === arrayLeft[i]
        ? i++
        : (mergedArray[k++] = arrayLeft[i++]);
    } else {
      mergedArray[k - 1] === arrayRight[j]
        ? j++
        : (mergedArray[k++] = arrayRight[j++]);
    }
  }
  for (; i < arrayLeft.length; i++) {
    if (mergedArray[k - 1] !== arrayLeft[i]) mergedArray[k++] = arrayLeft[i];
  }
  for (; j < arrayRight.length; j++) {
    if (mergedArray[k - 1] !== arrayRight[j]) mergedArray[k++] = arrayRight[j];
  }
  return mergedArray;
};
