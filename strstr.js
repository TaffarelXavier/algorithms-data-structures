var strStr = function(haystack, needle) {
  if (needle.length === 0) { return 0 }
  if (haystack.length === 0) { return -1 }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle === haystack.slice(i, i + needle.length)) {
        return i;
      };
    }
  }

  return -1;
};
