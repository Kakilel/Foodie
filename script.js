document.addEventListener("DOMContentLoaded", () => {

// INPUT_VARIABLES
const foodInp = document.querySelector(".food-inp input")
const caloriesInp = document.querySelector(".calories-inp input")
const amountInp = document.querySelector(".amount-inp input")
// BUTTON_VARIABLES
const aboutBtn = document.querySelector(".about-btn")
const submitBtn = document.querySelector(".submit-btn")
// VARIABLES
const show = document.querySelector(".show")
const foodTable = document.querySelector(".food-table")


    
aboutBtn.addEventListener("click",()=>{
    alert("Welcome to foodie lets get tracking!!")
})

submitBtn.addEventListener("click",()=>{
    const food = foodInp.value;
    const calories  = caloriesInp.value;
    const amount = (amountInp.value);

    
    if(!food || isNaN(calories)|| isNaN(amount)){
        alert("Please enter valid values");
        return;
    }
    if(!food){
        alert("Please enter type of food");
        return;
    }
 else if(!calories){
        alert("Please enter calories");
        return;
    }
 else if(!amount) {
        alert("Please enter amount");
        return;
    }
    // CREATE ROW table
    
    const row = document.createElement("tr");
    foodTable.classList.add("food-table");
    row.innerHTML=
    `<tr>
    <th>${food}</th>
    <th>${calories}</th>
    <th>${amount}</th>
    <th><button class="delete-btn">Delete</button></th>
    </tr>
    `;

    foodTable.appendChild(row);
    
    // if(food && calories && amount){
    //         const date = new Date().toLocaleString();
    //         const totalAmount = amounts.reduce((acc, curr) => acc + parseInt(curr),0)/1000;
    //         const totalCalories = (calories * amount) ;
    //         const totalCaloriesRow = document.createElement("tbody");
    //         totalCaloriesRow.classList.add("total-calories");
    //         totalCaloriesRow.innerHTML =
    //         `
    //         <td>${date}</td>;
    //         <td>${totalCalories}</td>;
    //         <td>${totalAmount}</td>;
    //         `;
    //       }
    // show.appendChild(totalCaloriesRow);
    
    // CLEAR INPUTS
    foodInp.value = "";
    caloriesInp.value = "";
    amountInp.value = "";
});
});

    