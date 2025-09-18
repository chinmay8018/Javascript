
    function outer(){
        var count =0;
        function inner(){
            count++;
            console.log(count);

        }
        return inner;

    }
    const fn1 =outer();
    const fn2 =outer();

    fn1();
    fn2();
    fn2();