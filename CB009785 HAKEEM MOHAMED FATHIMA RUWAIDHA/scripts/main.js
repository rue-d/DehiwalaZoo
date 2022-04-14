const adultP=[1000,500,5000];
const childP=[500,250,2500];


    
function calculateCost(){

    var cost=0;
    var Price;

    var visitorType=document.getElementById("visitor").value;
    var ticketType=document.getElementById("ticket").value;
    var durationType=document.getElementById("duration").value;
    var ticketAmount=document.getElementById("noOfTickets").value;
    //var ServiceType=document.getElementById("addServices").value;


    if (visitorType=="1") {
        Price=adultP;
    }
    else {
        Price=childP;
    }
    

    ticketType=parseInt(ticketType);
    Finalprice = Price[ticketType];
    //console.log("The Price for selected ticket "+Finalprice);

    durationType=parseInt(durationType);
    // converted the array to a number so i can use this as an if 
    //condition for the combinations mentioned in assignment

    //console.log("array value of duration "+durationType);

    if(ticketAmount == "")
        {ticketAmount = 0;}
    else{
        ticketAmount = parseInt(ticketAmount);}

        cost = parseFloat(ticketAmount * Finalprice);
        document.getElementById("Cost").innerHTML = cost.toFixed(2);
}

function AddOrder() {
    var cost = parseFloat(document.getElementById("Cost").innerHTML)
    if(cost == 0){
        alert("Please select your product and no of units");
        return;
    }
 
    var tAmount=document.getElementById("noOfTickets").value;

    //get this amount from above function

    document.getElementById("table").style="display:block";

    var fTotal= parseFloat(document.getElementById("finalTotal"))

    var vType=document.getElementById("visitor");
    var vName=vType.options[vType.selectedIndex].text;

    var tType=document.getElementById("ticket");
    var tName=tType.options[tType.selectedIndex].text;

    var dType=document.getElementById("duration");
    var dName=dType.options[dType.selectedIndex].text;

    var tbody = document.getElementById("tableBody");
    var trow = tbody.insertRow(-1);
    
    //Visitor Category
    td1 = trow.insertCell(0);
    td1.innerHTML = vName;

    //Ticket Type
    td2 = trow.insertCell(1);
    td2.innerHTML = tName;

    //Duration
    td3 = trow.insertCell(2);
    td3.innerHTML = dName;

    //No of Tickets
    td4 = trow.insertCell(3);
    td4.innerHTML = document.getElementById("noOfTickets").value;

    //total
    var Total=parseFloat(document.getElementById("Cost").innerHTML);
    fTotal=fTotal + Total;

    td5 = trow.insertCell(4);
    td5.innerHTML = Total.toFixed(2);

    // remove order
    td6 = trow.insertCell(5);
    td6.innerHTML = "<a href='javascript:void(0)' style='color:red;font-weight:bold' onclick='removeItem(this.parentElement);'>Remove Item</a>";

    //final total
    document.getElementById("finalTotal").innerHTML= fTotal.toFixed(2);

    resetForm();

}

function resetForm(){
    document.getElementById("TicketPurchaseForm").reset();
    document.getElementById("Cost").innerHTML = "0.00";
}

function removeItem(item){
    var result = confirm("Are you sure you want to remove Item?");

    if (result == true){
        var table = document.getElementById("tableOrder");
        var GrandTotal = parseFloat(document.getElementById("finalTotal").innerHTML);
        var total = parseFloat(item.parentElement.cells[4].innerHTML);

        GrandTotal = GrandTotal - total;
        document.getElementById("finalTotal").innerHTML=GrandTotal.toFixed(2) 
        table.deleteRow(item.parentElement.rowIndex);
    }
}

function CostCalc(){
    var halfDay=250;
    var fullDay=500;
    var twoDay=1000;

    

}

//Function fro the donate page
function donate(){

        //NAME Validation
    var name=document.getElementById("name").value;
    if (name == "") {
    alert("Please fill out Name")        
    }

    //to make sure no numbers are input in name field
    name=parseInt(name);
    if (isNaN(name)) {
        name=document.getElementById("name").value;
    }
    else{
        alert("Please make sure there are no numbers in the NAME field")
    }


        //NIC Validation
    var nic=document.getElementById("nic").value;
    if (nic == "") {
    alert("Please fill out NIC")        
    }

    if (nic.length <10 || nic.length >10 ) {
        alert("Make sure NIC number is correct")
    }


        //Card Validation
    //Card No
    var cardNo=document.getElementById("CardNo").value;
    if (cardNo.length < 16 || cardNo.length > 16) {
        alert("Please check Card Number")
    }
    cardNo=parseInt(cardNo);
    if (isNaN(cardNo)) {
       alert ("Make sure no letters are present in the Card Number")
    }

    //CVV
    var cvv=document.getElementById("cvv").value
    if (cvv.length<3 ) {
        alert ("Please check your CVV and enter right value")
    }
    cardNo=parseInt(cardNo);
    if (isNaN(cardNo)) {
       alert ("Make sure no letters are present in the Card Number")
    }

    //Phone Number
    var pNo=document.getElementById("pNumber").value;
    if (pNo.length<10 ||pNo.length>10 ) {
        alert("Please input the correct phone number")
    }
    pNo=parseInt(pNo);
    if (isNaN(pNo)) {
       alert ("Make sure no letters are present in the Phone Number")
    }

        // final validation/Confirmation
    var amount= document.getElementById("amount").value;
    var title=document.getElementById("title").value;
    
    var finalize=confirm(title+" "+name+ " "+"Are you sure you want to donate LKR " + amount);

    if (finalize == true) {
        alert("Thank you for your Donation, We will call/email you shortly")
        document.getElementById("dForm").reset();
    }

}