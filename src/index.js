module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    let stack = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        map.set(bracketsConfig[i][0],bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        if(map.has(str[i])) {
            // | -> |
            if(map.get(str[i]) == str[i]) {
                // can we close?
                if (str[i] == stack[stack.length - 1]) {
                    stack.pop();
                }
                else {
                    stack.push(str[i]);
                }
            }
            else {
                stack.push(str[i]);
            }
        }
        if(!map.has(str[i])) {
            if (stack.length == 0) {
                return false;
            }
            if (str[i] == map.get(stack[stack.length - 1])) {
                stack.pop();
            }
            else {
                return false;
            }
        
        }
    }
    if(stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
