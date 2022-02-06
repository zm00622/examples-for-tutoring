/* JavaScript */

var Usrdata = document.querySelector('.box');

var userDetail = [
{name:"sunil",age:"24",place:"delhi",avatar:"./image/abc.jpg",country:"India"},
{name:"sujan",age:"22",place:"assam,",avatar:"./image/abc.jpg",country:"India"},
{name:"abishek",age:"26",place:"kolkata",avatar:"./image/abc.jpg",country:"India"},
{name:"chiranjeev",age:"20",place:"bangalore",avatar:"./image/abc.jpg",country:"India"},
]

document.getElementById('test1').innerHTML = userDetail.map(user => 
`<div class="individualCard">
<div>Name: ${user.name}</div>
<div>Age: ${user.age}</div>
<div>Place: ${user.place}</div>
<div>Country: ${user.country}</div>
<div>Avatar: ${user.avatar}</div>
</div>`
).join('')

// ${} this syntax (used above) is using what's called string interpolation

// // An example of string interpolation
var name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
// Right click, click inspect and then click console to see the console.log above.