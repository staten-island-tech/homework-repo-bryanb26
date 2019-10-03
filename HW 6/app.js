const list = document.querySelectorAll('li');
const listArray = Array.from(list);
//console.log(listArray);

const flexboxList = listArray.filter(item => {
    item = item.textContent;
    return item.includes('Flexbox') == true;
});
//console.log(flexboxList);

const filtered = flexboxList.map(item => {
    const time = item.dataset.time;
    return time;
});
//console.log(filtered);

const secondsTotal = filtered.map(timeCode => {
    const parts = timeCode.split(':');
    //console.log(parts); 
    return ((parts[0] * 60) + (parts[1]));
})

//idk how to do the rest you go too fast for me im sorry please go over this stuff in class

//Q2


const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const bigNumbers = numbers.filter(function(number){
    return number > 70;
});
console.log(bigNumbers);
