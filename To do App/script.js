let thelist = document.querySelector("#thelist");
let form = document.querySelector("form");
let item = document.querySelector("#item");
let counter = 0;

// console.log(item.value);

form.addEventListener("submit", function(e){
    e.preventDefault();
    thelist.innerHTML += "<li>" + item.value + "</li>"; // add element, append element
    // store(item.value);
    // store2(thelist.innerHTML);
    store3(thelist.innerHTML);
    counter++;
});

function store(itemValue) {
    window.localStorage.setItem("item" + counter,itemValue);
}

function store2(itemsValues) {
    window.localStorage.myItemsList = itemsValues;
}

function store3(itemsValues) {
    console.log(JSON.stringify(new Object({list:itemsValues})));
    window.localStorage.myItemsListObject = JSON.stringify(new Object({list:itemsValues}));
    // console.log(window.localStorage.myItemsListObject.list);
    var restoredSession = JSON.parse(window.localStorage.getItem('myItemsListObject'));
    console.log(restoredSession);

}

