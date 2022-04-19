function reverseString(str) {
    var o = [];
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
      o[j] = str[i];
    return o.join('');
  }

console.log(reverseString('hello')); 

function reverseString(str) {
    return str.split('').reverse().join('');
  }
 
console.log(reverseString('hello'));

function reverseString(str) {
    for (var i = str.length - 1, o = ''; i >= 0; o += str[i--]) { }
    return o;
  }
  
console.log(reverseString('hello'));

function reverseString(str) {
    function rev(str, len, o) {
      return (len === 0) ? o : rev(str, --len, (o += str[len]));
    };
    return rev(str, str.length, '');
  }

console.log(reverseString('hello'));

function reverseString(str) {
    if (str.length < 2)
      return s;
    var halfIndex = Math.ceil(str.length / 2);
    return reverseString(str.substr(halfIndex)) +
           reverseString(str.substr(0, halfIndex));
  }
  
console.log(reverseString('hello'));

function reverseString(str) {
    return [...str].reduce((accumulator, current) => {
      return current + accumulator;
    });
}

console.log(reverseString('hello'));

function reverseString(str) {
    var o = [];
    for (var i = 0, len = str.length; i <= len; i++)
        o.push(str.charAt(len - i));
    return o.join('');
}

console.log(reverseString('hello'));
