// Given an absolute path for a file (Unix-style), simplify it.
//
// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"
//
// Corner Cases:
//
// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

function simplifyPath(path) {
  const pathArr = path.split('/');
  let pathStack = [];
  // console.log(pathArr);
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '' || pathArr[i] === '.') {
      continue;
    } else if (pathArr[i] === '..') {
      pathStack.pop()
    } else {
      pathStack.push(pathArr[i]);
    }
    // console.log(pathStack);

  }
  return '/' + pathStack.join('/');
}

console.log(simplifyPath("/home"))
console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///"))
