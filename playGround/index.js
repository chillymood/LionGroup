let arrSamples = [2, 8, 9, 7, 1];

// 执行结果：
// 解答错误
// 显示详情
// 输入：
// [2,7,11,15]
// 9
// 输出：
// [2,7]
// 预期结果：
// [0,1]

//* 二數之和
function twoNum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

// publicPreWord(["aaa", "abc", "add"]);
// twoNum([1, 6, 2], 3);

// module.exports = twoNum;

const deleteThebottomN = (stringArr, n) => {
  for (let i = 0; i < stringArr.length; i++) {
    if (i === stringArr.length - n) {
      stringArr.splice(i, 1);
    }
  }
  return stringArr;
};

// deleteThebottomN([4, 9, 1], 2);
// console.log(
//   "deleteThebottomN([4, 9, 1], 2) : ",
//   deleteThebottomN([4, 9, 1], 2)
// );

const twoNumChange = (num1, num2) => {
  let tempNum = num1;
  num1 = num2;
  num2 = tempNum;
};

const mergeArrays = (stringArr1, stringArr2) => {
  //合併
  let mergeArr = [...stringArr1, ...stringArr2];

  氣泡排序;
  for (let i = 1; i < mergeArr.length; i++) {
    for (let j = 0; j < mergeArr.length - i; j++) {
      if (mergeArr[i] > mergeArr[j]) {
        //互換
        twoNumChange(mergeArr[i], mergeArr[j]);
      }
    }
  }
  // mergeArr.sort();
  return mergeArr;
};

// mergeArrays([1, 9, 0], [8, 4, 0, 3]);
// console.log(
//   "mergeArr([1,9,0],[8,4,0,3]): ",
//   mergeArrays([1, 9, 0], [8, 4, 0, 3])
// );

//!字符串
//*反轉字符串
const reversal = (stringArr) => {
  for (let i = 0; i < stringArr.length / 2; i++) {
    [stringArr[i], stringArr[stringArr.length - 1 - i]] = [
      stringArr[stringArr.length - 1 - i],
      stringArr[i],
    ];
  }
  return stringArr;
};

// reversal(["a", "b", "c", "d", "e"]);
// console.log(
//   'reversal(["a", "b", "c", "d", "e"]): ',
//   reversal(["a", "b", "c", "d", "e"])
// );
//*字符串中的第一个唯一字符 */
const firstNoRepeatChar = (string) => {
  //遍歷每個char看是否重覆
  for (let i = 0; i < string.length; i++) {
    // 第幾個字符
    for (let j = i + 1; j < string.length; j++) {
      // 1-4, 2-4
      if (string[i] === string[j]) {
        if (i === 0) break;
        return i - 1;
      }
    }
  }
  return 0;
};

//

//!!不會
const publicPreWord = (stringArr) => {
  // let arr = [];
  let maxStrLength = 0;
  let temp;

  for (let i = 0; i < stringArr.length; i++) {
    // arr[i] = []; //宣告二維陣列

    if (stringArr[i] > maxStrLength) maxStrLength = stringArr[i];

    for (let j = 0; j < stringArr[i].length; j++) {
      // arr[i][j] = stringArr[i][j];
      let temp = stringArr[i][j];
    }
  }

  // for (let i = 0; i < maxStrLength; i++) {

  // }
};

const findRepeatNum = (numArr) => {
  for (let i = 1; i < numArr.length; i++) {
    for (let j = i; j < numArr.length + 1; j++) {
      if (numArr[i - 1] === numArr[j]) return numArr[i - 1];
    }
  }
  return -1;
};

//

const twoNumArrInterSection = (numArr1, numArr2) => {
  let interSectionArr = [];
  // 陣列1的第i個字和陣列2的全部比較，若有相同放入交集陣列
  for (let i = 0; i < numArr1.length; i++) {
    for (let j = 0; j < numArr2.length; j++) {
      if (
        numArr1[i] === numArr2[j] &&
        interSectionArr.indexOf(numArr1[i]) === -1
      ) {
        interSectionArr.push(numArr1[i]);
        break;
      }
    }
  }
  return interSectionArr;
};
// console.log(
//   " twoNumArrInterSection: ",
//   twoNumArrInterSection([8, 9, 0], [4, 8, 9])
// );

//括號
const isValidBrackets = (bracketsStr) => {
  //數組為空則為合法
  let arr = [];
  for (let i = 0; i < bracketsStr.length; i++) {
    //如果陣列中最後一個值相等
    if (arr[arr.length - 1] === "{" && bracketsStr[i] === "}") {
      arr.pop();
    } else if (arr[arr.length - 1] === "[" && bracketsStr[i] === "]") {
      arr.pop();
    } else if (arr[arr.length - 1] === "(" && bracketsStr[i] === "}") {
      arr.pop();
    } else {
      //不相等 推入
      arr.push(bracketsStr[i]);
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};
//



// 對url的query拆解
const url = "https://www.liontravel.com/category/zh-tw/index?a=1&b=2&c=3";

const urlParseParameters = (url) => {
  let parameters = url.split("?");
  let keyAndValue = parameters[1].split("&");
  let obj = {};

  for (let i = 0; i < keyAndValue.length; i++) {
    let keyValue = keyAndValue[i].split("=");
    obj[keyValue[0]] = keyValue[1];
  }
  return obj;
};

// urlParseParameters(url);

//陣列或物件
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj == null) return obj;

  let newObj;

  if (obj instanceof Array) {
    newObj = [];
  } else {
    newObj = {};
  }

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newObj[k] = deepClone(obj[k]);
    }
  }

  return newObj;
};

//

//手寫bind

//

Function.prototype.bind1 = (...args) => {
  let t = args.shift();
  const self = this;
  return () => {
    return self.apply(t, args);
  };
};

const testFu = (...args) => {
  //
};

testFu(1, 2, 3);

const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  } else {
    var left = [];
    var right = [];
    var pivot = Math.floor(nums.length / 2); // Math.floor 向下取整
    var base = nums.splice(pivot, 1)[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < base) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
  }
  return quickSort(left).concat([base], quickSort(right));
};

// * 实现一个方法，把 HTTP 文本形式(字符串)的 header 转换成 JS 对象。
//  *
//  * --- 测试用例 ---
//  *
//  * 输入：

//  * 输出：
//  * {
//  *   "Accept-Ranges": "bytes",
//  *   "Cache-Control": "max-age=6000, public",
//  *   Connection: "keep-alive",
//  *   "Content-Type": "application/javascript"
//  * }

const httpHeaderStr = `Accept-Ranges: bytes
Cache-Control: max-age=6000, public
Connection: keep-alive
Content-Type: application/javascript`;

const strToObj = (httpHeaderStr) => {
  let item = httpHeaderStr.split("\n");
  let obj = {};

  for (let i = 0; i < item.length; i++) {
    let tmp = item[i].split(":");
    obj[tmp[0]] = tmp[1];
  }
  return obj;
};

// strToObj(httpHeaderStr);
//

const menu_list = [
  {
    id: "1",
    menu_name: "设置",
    menu_url: "setting",
    parent_id: 0,
  },
  {
    id: "1-1",
    menu_name: "权限设置",
    menu_url: "setting.permission",
    parent_id: "1",
  },
  {
    id: "1-1-1",
    menu_name: "用户管理列表",
    menu_url: "setting.permission.user_list",
    parent_id: "1-1",
  },
  {
    id: "1-1-2",
    menu_name: "用户管理新增",
    menu_url: "setting.permission.user_add",
    parent_id: "1-1",
  },
  {
    id: "1-1-3",
    menu_name: "角色管理列表",
    menu_url: "setting.permission.role_list",
    parent_id: "1-1",
  },
  {
    id: "1-2",
    menu_name: "菜单设置",
    menu_url: "setting.menu",
    parent_id: "1",
  },
  {
    id: "1-2-1",
    menu_name: "菜单列表",
    menu_url: "setting.menu.menu_list",
    parent_id: "1-2",
  },
  {
    id: "1-2-2",
    menu_name: "菜单添加",
    menu_url: "setting.menu.menu_add",
    parent_id: "1-2",
  },
  {
    id: "2",
    menu_name: "订单",
    menu_url: "order",
    parent_id: 0,
  },
  {
    id: "2-1",
    menu_name: "报单审核",
    menu_url: "order.orderreview",
    parent_id: "2",
  },
  {
    id: "2-2",
    menu_name: "退款管理",
    menu_url: "order.refundmanagement",
    parent_id: "2",
  },
];

const convertTreeData = (data) => {
  //處理數據 id: {id...menu_name...menu_url...parent_id}
  let tmp = {};
  for (let i = 0; i < data.length; i++) {
    tmp[data[i].id] = data[i];
  }
  //處理樹狀結構
  let result = {};
  // for (let i = 0; i < data.length; i++) {
  //   if (tmp[i].id.indexOf("-") === -1) {
  //     result[[tmp[i].id]] = tmp[i];
  //   }
  // }

  for (let k in tmp) {
    if (tmp[k].id.indexOf("-") === -1) {
      result[[tmp[k].id]] = tmp[k];
    }
  }
};

convertTreeData(menu_list);

const buildTree = (arr) => {
  tmp = {};
  res = {};
  for (let i in arr) {
    tmp[arr[i].id] = arr[i];
  }

  //物件不須排序，直接扔進對應位置中就可以。
  for (let i in tmp) {
    if (tmp[i].parent_id) {
      //parent_id!=0
      if (!tmp[tmp[i].parent_id].children) {
        //如果沒有childrent創建一個{}
        tmp[tmp[i].parent_id].children = new Object();
      }
      tmp[tmp[i].parent_id].children[tmp[i].id] = tmp[i];
    } else {
      //parent_id=0
      res[tmp[i].id] = tmp[i];
    }
  }
  return res;
};

//测试代码，menu_list 为前面的数据。

var s = [1, [2, [3, 4]]];

// function flatten(arr) {
//   var result = [];
//   for (var i = 0, len = arr.length; i < len; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

const arrFlatten = (arr) => {
  // 遍歷，如果遇到陣列就拆出來放進陣列
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arrFlatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const loadingImg = (src) => {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      const err = new Error("圖片加載失敗");
      reject(err);
    };
  });

  return p;
};

// loadingImg(url).then(img)=>

// lc高頻

const splitStrGroup = (str) => {
  let result = [];
  for (let val of str) {
  }

  return result;
};

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。

const strConformDist = (str, wordDict) => {
  for (let i = 0; i < wordDict.length; i++) {
    if (str.indexOf(wordDict[i]) !== -1) {
    }
  }
};

// ### **实现 Trie (前缀树)**

// 实现一个 Trie (前缀树)，包含 `insert`, `search`, 和 `startsWith` 这三个操作。

// **示例:**

// ```
// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app");     // 返回 true
// ```

// **说明:**

// - 你可以假设所有的输入都是由小写字母 `a-z` 构成的。
// - 保证所有输入均为非空字符串。

class Trie {
  constructor() {
    // if (str == null) throw new Error
    this.trie = [];
  }

  insert(str) {
    if (!str) throw new Error("please key str");
    this.trie.push(str);
  }

  search(str) {
    if (!str) throw new Error("please key str");
    this.trie.forEach((item) => {
      if (item === str) return true;

      return false;
    });
  }

  startsWith(str) {
    if (!str) throw new Error("please key str");
    this.trie.forEach((item) => {
      if (item.indexOf(str) === 0) return true;
      return false;
    });
  }
}

let trie = new Trie();

trie.insert("apple");
trie.search("apple"); // 返回 true
//
trie.search("app"); // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app"); // 返回 true

//

imgLoad = (src) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      const err = new Error(`imgload failed: ${src}`);
      reject(err);
    };
    img.src = src;
  });
};

imgLoad("file:///E:/data/clairechu/Desktop/LionGroup/playGround/travel.png")
  .then((img) => {
    return img;
  })
  .then((img) => {})
  .catch((err) => {});

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

[1, 2, 3, 0, 0, 0];
(3)[(2, 5, 6)];
(3)[(1, 2, 3, 0, 0, 0)];
[1, 2, 2, 3, 5, 6];

var merge = function (nums1, m, nums2, n) {
  let newNum1 = nums1.filter((item) => item !== 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n + m; j++) {
      if (nums2[i] <= newNum1[j]) {
        newNum1.splice(j, 0, nums2[i]);
        break;
      }
      //比到最後一個都沒有推入
      if (j + 1 === n + m) {
        newNum1.push(nums2[i]);
      }
    }
  }
  nums1 = newNum1;
};
//

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let max = 0;
//   let minPrice = prices[0];
//   //每日和後面全部日相減 取最大值
//   //和前面的所有價格相减没有必要，只需要和前部分中的最小價格相减
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) minPrice = prices[i];
//     if (prices[i] - minPrice > max) max = prices[i] - minPrice;
//   }
//   return max;
// };

//
//超出時間限制

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

//

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// "0P"
// 输出：
// true
// 预期结果：
// false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //切割成陣列
  let strArr = [];
  let ans = false;
  let sTolowerCase = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (
      (sTolowerCase[i].charCodeAt() >= 97 &&
        sTolowerCase[i].charCodeAt() <= 122) ||
      (sTolowerCase[i].charCodeAt() >= 48 && sTolowerCase[i].charCodeAt() <= 57)
    ) {
      strArr.push(sTolowerCase[i]);
    }
  }
  //最後項等於最前項就繼續比較
  for (let i = 0; i < strArr.length / 2; i++) {
    if (strArr[i] !== strArr[strArr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// isPalindrome("A man, a plan, a canal: Panama");

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let num1ToString;
  let num2ToString;
  let sum;

  for (let i = 0; i < 10; i++) {
    if (num1 == i) {
      num1ToString = i;
    }
    if (num2 == i) {
      num2ToString = i;
    }
  }
  sum = num1ToString + num2ToString;
  return sum.toString();
};

// "0"
// "0"
// 输出：
// 0
// 预期结果：
// "0"

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return length === 0;
  }

  // getNode(index) {
  //   for (let i = 0; i < length; i++) {
  //     if(index > length )
  //   }
  // }
  // append(data) {
  //   let newNode = new Node(data);
  //   if (isEmpty()) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //     this.length++;
  //   } else {
  //   }
  // }
}
// //展開...
// arr = [1, 2, 3];

// //其餘...
// a = 10;

// const numbers = [];
// let i = 0;
// while (i < 100) {
//   numbers.push(i);
//   i++;
// }
// console.log("numbers :>> ", numbers);

//!字串
// // 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy
// function replaceSpace(str) {
//   let strArr = str.split(" ");

//   return strArr.join("%20");
// }
// console.log("replaceSpace: ", replaceSpace("we are happy"));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //0 1 2 3 次
    for (let j = 0; j < arr.length - i - 1; j++) { j = 
      // 排 4 3 2 1次
      if (arr[j] > arr[j + 1]) { 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log("bubbleSort: ", bubbleSort([1, 234, -5, 78, -182, 45]));
