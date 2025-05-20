

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
const totalCaloriesBody = document.querySelector(".total-calories")

let foodData = JSON.parse(localStorage.getItem("foodData")) || [];

// load saved items from storage
foodData.forEach(item => addFoodRow(item));

aboutBtn.addEventListener("click",()=>{
    alert("Welcome to foodie lets get tracking!!")
})

submitBtn.addEventListener("click",()=>{
    const food = foodInp.value;
    const calories  = caloriesInp.value;
    const amount = amountInp.value;
    const foodTotalCalories =parseFloat( calories) * parseFloat( amount);
    
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

    const foodItem = {food, calories:foodTotalCalories ,amount};
    // save to storage
    foodData.push(foodItem);
    localStorage.setItem("foodData",JSON.stringify(foodData));

    // CREATE ROW table
    addFoodRow(foodItem)
    // CLEAR INPUTS
    foodInp.value = "";
    caloriesInp.value = "";
    amountInp.value = "";
    
     // UPDATE TOTALS
     updateTotals();
    });

    function addFoodRow(item){
    const row = document.createElement("tr");
    foodTable.classList.add("food-table");
    row.innerHTML=
    `<tr>
    <td>${item.food}</td>
    <td>${item.calories}</td>
    <td>${item.amount}</td>
    <td><button class="delete-btn">Delete</button></td>
    </tr>
    `;
    // DELETE BUTTON
    const deleteBtn = row.querySelector(" .delete-btn");
    deleteBtn.addEventListener("click", () =>{
        foodTable.removeChild(row);

        foodItems = foodItems.filter(
            f =>!(f.food === item.food && f.calories === item.calories && f.amount === item.amount)
        );
        localStorage.setItem("foodData",JSON.stringify(foodData));
        updateTotals();
    });

    foodTable.appendChild(row);

    }
    

// FUNCTION TO UPDATE TOTALS
function updateTotals() {

  let totalCalories = 0;
  let totalAmount = 0;

  foodData.forEach(item =>{
    totalCalories += parseFloat(item.calories);
    totalAmount +=parseFloat(item.amount);
  });


    
    // SHOW_TOTAL EVERYTHING
    const date = new Date().toLocaleDateString();
    const body = document.querySelector(".total-calories");
    body.innerHTML = ` 
    Total:
    <tr>
    <td>${date}</td>
                <td>${totalCalories}</td>
                <td>${totalAmount}</td>
                </tr>
                `;
              
             updateTotals();   
                
        }

        

    