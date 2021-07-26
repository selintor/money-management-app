sum();
    document.querySelector(".expssubmit").addEventListener("click", function(event) {
    document.getElementsByClassName("test").innerHTML += "Sorry!";
    event.preventDefault();
    var date = document.getElementById("dateName").value;
    var name = document.getElementById("exName").value
    var amount = document.getElementById("amountName").value;

    if ( date === '' ){
        const dateSpan = document.querySelector(".dateClass2");
        dateSpan.innerHTML = "<br>(You have to add at least one data.)"
    }
        else{

            const dateSpan = document.querySelector(".dateClass2");
            dateSpan.innerHTML = ""
        }
    if ( name === '' ){
        const nameSpan = document.querySelector(".nameClass2");
        nameSpan.innerHTML = "<br>(You have to add at least one data.)"
    }
        else{

            const nameSpan = document.querySelector(".nameClass2");
            nameSpan.innerHTML = ""
        }
    if ( amount === '' ){
        const amountSpan = document.querySelector(".amountClass2");
        amountSpan.innerHTML = "<br>(You have to add at least one data.)"
    }
        else{
    
            const amountSpan = document.querySelector(".amountClass2");
            amountSpan.innerHTML = ""
        }
    if ( date !== "" && name !== "" &&  amount!== "" ){
        myFunction();
    }    
}, false);


function myFunction() {
    var date = document.getElementById("dateName").value;
    var name = document.getElementById("exName").value
    var amount = document.getElementById("amountName").value;
 
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    if (expenses === null) expenses = {};

    if (expenses[date]){
        const temp = [...expenses[date]];
        temp.push({
            
            name: name,
            amount: parseFloat(amount)
        });
        expenses[date] = temp;
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
        else{
            expenses[date] = [
                {
                    
                    name: name,
                    amount: parseFloat(amount)
                }
            ];
            localStorage.setItem("expenses", JSON.stringify(expenses));
        }
    append();
    sum();
    document.getElementById('exName').value = '' ;
    document.getElementById('amountName').value = '' ;
}

function clearAll() {
    localStorage.removeItem("expenses");
    append();
    sum();
}
    
var timestamp = Date.now();
var currentDate = new Date(timestamp);

date2 = new Date(timestamp);
year = date2.getFullYear();
month = date2.getMonth()+1;
dt = date2.getDate();

if (dt < 10) {
dt = '0' + dt;
}
if (month < 10) {
month = '0' + month;
}

var maxDate = document.getElementById("dateName"); 
var max = document.createAttribute("max"); 
var value2 = document.createAttribute("value");
max.value = (year+'-' + month + '-'+dt);  
maxDate.setAttributeNode(max);
maxDate.setAttributeNode(value2);
value2.value = max.value;
append();

function append(){
    document.querySelector('.datas').innerHTML = '';
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    for(dateString in expenses){
        const datas = document.querySelector(".datas");
        var test=document.createElement("div"); test.classList.add("test");
        var colll=document.createElement("div"); colll.classList.add("colll"); test.appendChild(colll);
        var dateClass = document.createElement("div"); dateClass.classList.add("dateClass"); colll.appendChild(dateClass);
        var p1 = document.createElement("p"); p1.classList.add("p1"); dateClass.appendChild(p1);
        p1.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"  id= "svg" class="bi bi-calendar" viewBox="0 0 16 16">
        <path class="path" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg> <span class="dateSpan" id="dateTest">${ dateString }</span>
        `;
        datas.appendChild(test);
        for (var i = 0; i < expenses[dateString].length; i++) {
            let tempHTML = document.createElement('div');
            tempHTML.innerHTML = `
                <div class="containerr" id="test2"> 
                <div class="row">
                <div class="col">
                    <div class="nameClass">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg> <span class="nameSpan" id="nameTest">${ expenses[dateString][i].name }</span>
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="amountClass">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                        </svg> <span class="amountSpan" id="amountTest">${ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(  expenses[dateString][i].amount ) }</span>
                        </p>
                    </div>
                </div> 
                </div>
            </div> 
            `;
            test.appendChild(tempHTML);
            var usd =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format( expenses[dateString][i].amount );
            expenses[dateString][i].amount.innerHTML = usd;
        }
    }
}

function sum(){
var toplam = 0;
let expenses = JSON.parse(localStorage.getItem('expenses'));
    for (amount in expenses){
        for(var i = 0; i < expenses[amount].length; i++){
            toplam = toplam + expenses[amount][i].amount;
        }
    }
   
    var number = document.querySelector(".lead").value = 2250.00
    var salarySpan = document.querySelector(".salary");
    var decrease = parseFloat(parseFloat(number) - toplam);
    var usd =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(decrease);
    salarySpan.innerHTML =  usd;
    if  (decrease <= 0){
        document.getElementById("salary").style.color = "rgb(80, 0, 0)";
    }
        else{
            document.getElementById("salary").style.color = "white";
        }
}