function string_check(str1){
        if(str1 === null || str1 === undefined || 
        str1.substring( 0 , 2 ) === 'py'){
        return str1; 
    }

    return "py" + str1;
    }
    

    console.log(string_check("python"));

    document.writeln(string_check("thon"));