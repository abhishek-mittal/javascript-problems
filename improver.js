/**
 * @author Abhishek Mittal <abhishekmittaloffice@gmail.com>
 * @description function can deal with both any types followed in a consecutive manner in ASCII Chart.
 * @param {string} str 
 */
function improvise(str) {
    // Backup for original input.
    const bck = str || '';
    const bckArr = bck.split('').map( e => e.charCodeAt(0)); // converting the alphabets into its ASCII for simplicity and reducing the mayhem.
    
    let result = bckArr.reduce( (acc, n) => {
            // Setting up flag
            let flag1 = n - acc.rand[acc.rand.length - 1];
            let flag2 = n - acc.temp;

            if(flag1 === 1 || flag2 === 1) {
                (flag2 !== NaN && flag2 !== 1) ? acc.rand.pop() : null; // update the latest value with according to the case.
                acc.temp = n
            }else{
                acc.rand.push(n); // updating the random to latest state.
                acc.temp = null;
            }

        return acc;

    }, {rand: [], temp: null} /* setting up accumulative situation of the desired result */) 

    result = result.rand.map(e => String.fromCharCode(e)).join('')
    return result ? result : '' ;
}

const code = char => char
? char.charCodeAt(0)
: -2; // will not be === to any other codes after addition or subtraction
  
function improvise2(str) {
  return [...str]
    .filter((char, i) => {
      const thisCode = code(char);
      return (
        thisCode !== code(str[i - 1]) + 1
        && thisCode !== code(str[i + 1]) - 1
      );
    })
    .join('');
}

function init() {
    const str = "ishakmitalaacccjq";
    const final = improvise(str);
    console.log(final)
}


init();