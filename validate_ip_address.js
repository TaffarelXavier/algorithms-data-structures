function validIPAddress(ip) {
  if (isIPv4(ip)) {
    return "IPv4";
  } else if (isIPv6(ip)) {
    return "IPv6";
  } else {
    return "Neither";
  }
}

function isIPv4(ip) {
  const ipArr = ip.split('.'); // O(n)
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) && ipArr.every(n => {
    let digits = parseInt(n, 10);
    return digits >= 0 && digits <= 255 && digits.toString() === n;
  })
}

function isIPv6(ip) {
  const ipArr = ip.split(':');
  return ipArr.length === 8 && ipArr.every(substr => {
    return isValidHexString(substr.toUpperCase());
  })
}

function isValidHexString(str) {
  return str.length >= 1 && str.length <= 4 && str.split('').every(n => {
    return parseInt(n, 16) || parseInt(n, 16) === 0;
  })
}

console.log(validIPAddress("1e1.4.5.6"));
// console.log(isIPv4("172.16.256.1"))
// console.log(isIPv4("172.16.256.1.100"))
// //
// console.log(isIPv6("2001:0db8:85a3:0:0:8A2E:0370:7334")) // true
// console.log(isIPv6("2001:0db8:85a3:0:0:8A2E:0370:7334:0123")) // false
// console.log(isIPv6("2001:0gb8:85a3:0:0:8A2E:0370:7334:0123")) // false
//
// console.log(validateIPAddress("172.16.254.1"))
// console.log(validateIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
// console.log(validateIPAddress("256.256.256.256"))
