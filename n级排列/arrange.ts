/**
 * @author wuxinqiu
 * @date  2022/05/08 00:00
 * @change 
 * @last
 * @description n 级排列
 */



/**
 * @descript 一阶插入
 * @param list 被插入的一维数组
 * @param num 插入元素
 * @returns 插入元素后的二维数组
 * @note  lis = [1, 2]  num = 3 
 *        因为 3 插入 [1, 2] 有三处位置分别是 前、中、后，
 *        所以返回的结果就是： [[3, 1, 2], [1, 3, 2], [1, 2, 3]}
 */
function firstOrderInsert(list: any[], num: any) {
  let resList: any[] = [];
  for(let i=0; i<=list.length; i++){
    let ins: number[] = list.slice();
    ins.splice(i, 0, num);
    resList.push(ins);
    // console.log(ins)
  }
  return resList;
}

// 二阶插入
/**
 * @description 二阶插入
 * @param list 被插入二维数组
 * @param num 插入元素
 * @returns 插入元素后的二列数组
 * @note list = [[1, 2], [2, 1]] num = 3
 *       将 3 插入 list 每个元素的一阶数组
 *       返回结果就是 [[3, 1, 2], [1, 3, 2], [1, 2, 3], [3, 2, 1], [2, 3, 1], [2, 1, 3]]
 */
function secondOrderInsert(list: any[], num: any) {
  let resList: any[] = [];
  for(let i=0; i<list.length; i++){
    let firstOrderInsertRes = firstOrderInsert(list[i], num);
    resList = resList.concat(firstOrderInsertRes);
  }
  return resList
}



// 递归 排列组合
/**
 * @description 递归排列组合
 * @param list 被排列的数组
 * @param num 最后一个插入元素
 * @returns 排列组合结果
 */
function arrange(list: any[], num?:any) {
  let newList = list.slice();
  if(newList.length == 1) {
    let res = firstOrderInsert(list, num);
    return res;
  }
  newList.splice(list.length-1, 1);
  let selfRes: any[] = arrange(newList, list[newList.length]);
  if (num == undefined) {
    return selfRes;
  }
  
  let secondOrderRes = secondOrderInsert(selfRes, num);
  return secondOrderRes;

}

let list = [1, 2, 3, 4];

let res = arrange(list)
console.log('res.length = ', res.length)
console.log(res)

/*  输出结果
  res.length =  24
  [
    [ 4, 3, 2, 1 ], [ 3, 4, 2, 1 ],
    [ 3, 2, 4, 1 ], [ 3, 2, 1, 4 ],
    [ 4, 2, 3, 1 ], [ 2, 4, 3, 1 ],
    [ 2, 3, 4, 1 ], [ 2, 3, 1, 4 ],
    [ 4, 2, 1, 3 ], [ 2, 4, 1, 3 ],
    [ 2, 1, 4, 3 ], [ 2, 1, 3, 4 ],
    [ 4, 3, 1, 2 ], [ 3, 4, 1, 2 ],
    [ 3, 1, 4, 2 ], [ 3, 1, 2, 4 ],
    [ 4, 1, 3, 2 ], [ 1, 4, 3, 2 ],
    [ 1, 3, 4, 2 ], [ 1, 3, 2, 4 ],
    [ 4, 1, 2, 3 ], [ 1, 4, 2, 3 ],
    [ 1, 2, 4, 3 ], [ 1, 2, 3, 4 ]
  ]

*/