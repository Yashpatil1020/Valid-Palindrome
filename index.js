var isPalindrome = function(s) {
    let left=0,right=s.length-1;
    while(left<=right){
        let l=s.charAt(left);
        let r=s.charAt(right);
        if(!isAlphaNum(l)){
            left++;
        } else if(!isAlphaNum(r)){
            right--;
        } else{
            if(l.toLowerCase()!=r.toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};
var isAlphaNum=function(c){
    return (c>='a' && c<= 'z') || (c>='A' && c<='Z') || (c>='0' && c<='9');
}