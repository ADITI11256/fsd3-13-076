 import{writeFile} from 'fs/promises'
const f1 =() =>{
    console.log("f1");
};
const f2 =() =>{
    console.log("f2");
};
const f3=() =>{
    console.log("f3");
};
const writeData = async() => {  
}
const main = () => {
    console.log("main");
    f1();
    
    setTimeout(f2,5000);
    setImmediate(f3);
    Process.nextTick(f1);
    writeData();
    console.log(end);

    console.log("end");
};
main();

