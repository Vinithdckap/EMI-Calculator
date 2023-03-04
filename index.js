const button = document.querySelector(".calculate");
const amount = document.querySelector(".amount");
const interest = document.querySelector(".interest");
const months = document.querySelector(".months");
const total = document.querySelector(".total");
const totalInterest = document.querySelector(".totalInterest");
let btns = document.querySelectorAll("#ss")
const mm = document.querySelector(".mm");
const yy = document.querySelector(".yy");
const loan = document.querySelector(".loan");
const results = document.querySelector(".results")


// Adding listener to mm , yy and button

mm.addEventListener("click", () => {
  mm.classList.toggle("touch");
  yy.classList.remove("touch")
  button.addEventListener("click", () => {

    // validation
    if (!amount.value == "" && !interest.value == "" && !months.value == "") {
      let amount_ave = amount.value;
      let interest_ave = interest.value / 1200;
      let months_ave = months.value

      // calculator formulae for month
      principle = Math.round((amount_ave * interest_ave * (1 + interest_ave) ** months_ave) / (((1 + interest_ave) ** months_ave) - 1));
      loan.innerText = principle
      let totalPayment = Math.round(principle * months_ave);
      let total_interest = Math.round(totalPayment - amount_ave);

      total.innerText = +`${totalPayment}`;
      totalInterest.innerText = +`${total_interest}`;
      loan.innerText = + `${principle}`;
      results.classList.remove("results")
    }
    
  })
})

button.addEventListener("click", () => {

  
//validation to month,year and button
  if (amount.value == "" || interest.value == "" || months.value == "") {
    alert("Fill all the input fields")

  } else if (btns[0].classList.contains("touch") == false && btns[1].classList.contains("touch") == false) {
    alert("Choose any format month or year")
  }

})


yy.addEventListener("click", () => {
  yy.classList.toggle("touch");
  mm.classList.remove("touch");
  button.addEventListener("click", () => {
    if (!amount.value == "" && !interest.value == "" && !months.value == "") {


      let amount_ave = amount.value;
      let interest_ave = interest.value / 1200;
      let months_ave = months.value * 12


      principle = (amount_ave * interest_ave * (1 + interest_ave) ** months_ave) / (((1 + interest_ave) ** months_ave) - 1);
      loan.innerText = Math.round(principle)
      // console.log(loan)
      let totalPayment = principle * months_ave;
      let total_interest = totalPayment - amount_ave;

      total.innerText = +`${Math.round(totalPayment)}`;
      totalInterest.innerText = +`${Math.round(total_interest)}`;
      loan.innerText = + `${Math.round(principle)}`;

      results.classList.remove("results")

    }

  })

})
