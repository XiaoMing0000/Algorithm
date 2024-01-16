/**
 * 合并具有相同元素的列表
 * @param dataList [[2, 3, 5], [3, 8, 4], [9, 7]]
 * @returns [ [ 2, 3, 5, 8, 4 ], [ 9, 7 ] ]
 */
function crossIndex(dataList: Array<Array<number>>) {
  const mergeData: number[][] = [];

  for (const sublist of dataList) {
    let merged = false;
    for (const existingList of mergeData) {
      if (sublist.some((elem) => existingList.includes(elem))) {
        for (const elem of sublist) {
          if (!existingList.includes(elem)) {
            existingList.push(elem);
          }
        }

        merged = true;
        break;
      }
    }

    if (!merged) {
      mergeData.push(sublist);
    }
  }
  return mergeData;
}

const crossData = crossIndex([
  [2, 3, 5],
  [3, 8, 4],
  [9, 7],
]);
console.log(crossData);
