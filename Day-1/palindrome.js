function ispalindrome(str){
        const len = str.length;
        
        for (let i = 0; i < len/2; i++){
            if (str[i]!== str[len -1 -i]){
                return false;
            }
        }
        return true;

    }

    const str1 = 'madam';

    const str2 = 'nursesrun';

    const str3 = 'fox';

    console.log(ispalindrome(str1));
    console.log(ispalindrome(str2));
    console.log(ispalindrome(str3));