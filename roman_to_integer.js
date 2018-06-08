var romanToInt = function(s) {
  // input s guaranteed to be between 1 - 3999
  const romanHash = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return s.toUpperCase().match(/(IV|IX|XL|XC|CD|CM|[IVXLCDM])/g).reduce((total, roman) => {
    return total + romanHash[roman];
  }, 0);
};

romanToInt("MCMXCIVIII"); // 1997
