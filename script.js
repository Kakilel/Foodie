document.addEventListener("DOMContentLoaded", () => {
  // 
// INPUT_VARIABLES
const foodInp = document.querySelector(".food-inp input")
const caloriesInp = document.querySelector(".calories-inp input")
const amountInp = document.querySelector(".amount-inp input")
// BUTTON_VARIABLES
const aboutBtn = document.querySelector(".about-btn")
const submitBtn = document.querySelector(".submit-btn")
// VARIABLES
const show = document.querySelector(".show")

let amounts =[];
    
aboutBtn.addEventListener("click",()=>{})

submitBtn.addEventListener("submit",()=>{
    const food = foodInp.value;
    const calories  = caloriesInp.value;
    const amount = amountInp.value;
    amounts.push(amount);


    if(!food){
        alert("Please enter type of food");
        return;
    }
    if(!calories){
        alert("Please enter calories");
        return;
    }
    if(!amount){
        alert("Please enter amount");
        return;
    }
    // CREATE ROW table
    
    const row = document.createElement("tbody [class='food-table']");
    `<tr>
    <td>${food}</td>
    <td>${calories}</td>
    <td>${amount}</td>
    </tr>
    <button class="delete-btn">Delete</button>
    `;

    show.appendChild(row);
    // CLEAR INPUTS
    foodInp.value = "";
    caloriesInp.value = "";
    amountInp.value = "";
    
    if(food && calories && amount){
            const date = new Date().toLocaleString();
            const totalAmount = amounts.reduce((acc, curr) => acc + parseInt(curr),0)/1000;
            const totalCalories = (calories * amount) ;
            const totalCaloriesRow = document.createElement("tbody [class='total-calories']");
            totalCaloriesRow.innerHTML =
            `<tr>
                <td>${date}</td>;
                <td>${totalCalories}</td>;
                <td>${totalAmount}</td>;
            </tr>
            `;
            // CLEAR INPUTS  
            foodInp.value = "";
            caloriesInp.value = "";
            amountInp.value = "";
        }
    show.appendChild(totalCaloriesRow);

})
})

    