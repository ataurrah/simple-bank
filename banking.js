
    // <!-- <script src="banking.js"></script> -->
    document.getElementById('deposit-button').addEventListener('click',function (){

        // get amount deposited
        const depositInput =document.getElementById('deposit-input');
        const newDepositAmountText =depositInput.value ;
        const newDepositAmount =parseFloat(newDepositAmountText);
       const depositTotal=document.getElementById('deposit-total');
       const previousDepositText=depositTotal.innerText;
       const previousDepositAmount=parseFloat(previousDepositText);
       console.log(previousDepositAmount);
    
       const newDepositTotal = previousDepositAmount + newDepositAmount ;
       
       depositTotal.innerText =newDepositTotal;
    // update account balance
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal= previousBalanceTotal +newDepositAmount;
    balanceTotal.innerText =newBalanceTotal;
    //clear depositInput field;
    depositInput.value="";
    })
    
    
    // withdraw calculation
    
    document.getElementById('withdraw-button').addEventListener('click',function (){
    
        // get amount withdraw
        const withdrawInput =document.getElementById('withdraw-input');
        const newWithdrawAmountText =withdrawInput.value ;
        
        const newWithdrawAmount =parseFloat(newWithdrawAmountText);
        const withdrawTotal=document.getElementById('withdraw-total');
        const previouswithdrawText=withdrawTotal.innerText;
        const previouswithdrawTotal=parseFloat(previouswithdrawText);
       
        
        const newWithdrawTotal = previouswithdrawTotal + newWithdrawAmount ;
        
        withdrawTotal.innerText =newWithdrawTotal;
        // update account balance
        const balanceTotal =document.getElementById('balance-total');
        const balanceTotalText =balanceTotal.innerText;
        const previousBalanceTotal =parseFloat(balanceTotalText);
        const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText =newBalanceTotal;
        //clear withdrawInput field;
        withdrawInput.value="";
        })
     





