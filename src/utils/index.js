/**
 * 帮助函数
 * @param {Number} hours 
 * @returns {String}
 */

export function getTimeText(hours) {
  if (hours >= 2 && hours < 6) {
    return "现在是凌晨" + hours + "点！";
  } else if (hours >= 6 && hours < 10) {
    return "早上好！";  
  } else if (hours >= 10 && hours < 14) {
    return "中午好！";
  } else if (hours >= 14 && hours < 18) {
    return "下午好！";  
  } else if (hours >= 18 && hours < 22) {
    return "晚上好！";
  } else if (hours >= 22) {
    return "夜深了！";
  } else {
    return hours;
  }
}

const chinese = ['零','一','二','三','四','五','六','七','八','九'];

export function number2Chinese(num) {
  if (typeof num !== 'number') {
    console.error('number2Chinese: 参数必须为数字');
    return;
  }
  return chinese[num];
}
