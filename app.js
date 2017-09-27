let input = "hamburgers";
let salt = "banana";
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function encrypt(str) {
  let encryptedStr = ''
  for (var i = 0; i < str.length; i++) {
    // encryptedStr += String.fromCharCode(str.charCodeAt(i) + (salt.length % 5 + 1) * Math.pow(-1, i) * Math.pow(2, i % 2));
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + (salt.length % 2 + 1) * Math.pow(-1, i) * (i % 13));


    // let pad = 0;
    // while (encryptedStr.length < 20) {
    //   if (encryptedStr.length === 19) {
    //     encryptedStr += pad;
    //   } else {
    //     encryptedStr += alphabet[Math.floor(Math.random()*52)];
    //   }
    //   pad += 1;
    // }
  }
  encryptedStr = encryptedStr.split('').reverse().join('');
  return encryptedStr;
}

function decrypt(str) {
  let decryptedStr = '';
  // console.log(str);
  str = str.split('').reverse().join('');
  // if (str.length < )
  for (var i = 0; i < str.length; i++) {
    decryptedStr += String.fromCharCode(str.charCodeAt(i) - (salt.length % 2 + 1) * Math.pow(-1, i) * (i % 13));
    // console.log(parseInt(i));
    // if (parseInt(str[i])) {
    //   decryptedStr = '';
    // }
  }
  return decryptedStr;
}

// console.log(encrypt(input));
// console.log(encrypt(input));
// console.log(decrypt(encrypt(input)));
// console.log(decrypt('niiroa'));

// export {encrypt, decrypt};
module.exports = { encrypt, decrypt}
