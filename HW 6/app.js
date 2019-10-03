const LIs = Array.from(document.querySelectorAll('li'));
//console.log(listArray);

const LIsFiltered = LIs.filter(LI => LI.textContent == "Flexbox Video");
//console.log(flexboxList);

const mappedLIs = LIsFiltered.map(obj =>{
    return obj.dataset.time;
})
//console.log(filtered);

const mappedSeconds = mappedLIs.map()


const filteredChained = Array.from(document.querySelectorAll('ul>li'))
.filter(LI => LI.textContent == "Flexbx Video")
.map(obj =>{return obj.dataset.time;}) 
.map(timeCode => {
    const parts = timeCode.split(':');
    return (parseInt(parts[0] * 60)) + parseInt(parts[1]);
}).reduce((acc, val) => {
    return acc + val;
})

console.log(filteredChained);

//idk how to do the rest you go too fast for me im sorry please go over this stuff in class

//Q2


const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const bigNumbers = numbers.filter(function(number){
    return number > 70;
});
console.log(bigNumbers);
