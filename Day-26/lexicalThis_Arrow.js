// const person={
//     name:"chinmay",
//     greet:function(){
//         const arrwfn=()=>{
//             console.log(this.name);
//         };
//         arrwfn();
//     }
// };
// person.greet();

const person={
    name:"chinmay",
    greet:function (){
        const  arrowfn=()=>{
            console.log(this.name);

        };
        arrowfn();
    }
};
person.greet();