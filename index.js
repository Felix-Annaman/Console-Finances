// This function takes an array of financial data and calculates various statistics
function calculateFinances(finances) {
    // Initialize variables to store the total number of months, total profit/loss, total change in profit/loss, 
    // greatest increase in profits, greatest decrease in losses, and the previous profit/loss value
    let totalMonths = 0;
    let totalProfitLoss = 0;
    let totalChange = 0;
    let greatestIncrease = 0;
    let greatestDecrease = 0;
    let greatestIncreaseDate = '';
    let greatestDecreaseDate = '';
    let previousProfitLoss = null;
  
    // Loop through each financial record in the input array
    for (let i = 0; i < finances.length; i++) {
      // Extract the date and profit/loss values from the current record
      let date = finances[i][0];
      let profitLoss = finances[i][1];
  
      // Increment the total number of months and total profit/loss values
      totalMonths++;
      totalProfitLoss += profitLoss;
  
      // If this is not the first record, calculate the change in profit/loss from the previous record
      if (previousProfitLoss !== null) {
        let change = profitLoss - previousProfitLoss;
        totalChange += change;
  
        // If the change is greater than the current greatest increase, update the greatest increase value and date
        if (change > greatestIncrease) {
          greatestIncrease = change;
          greatestIncreaseDate = date;
        // If the change is less than the current greatest decrease, update the greatest decrease value and date
        } else if (change < greatestDecrease) {
          greatestDecrease = change;
          greatestDecreaseDate = date;
        }
      }
  
      // Store the current profit/loss value as the previous value for the next iteration
      previousProfitLoss = profitLoss;
    }
  
    // Calculate the average change in profit/loss over the entire period
    let averageChange = totalChange / (totalMonths - 1);
  
    // Log the results to the console
    console.log(`Total Months: ${totalMonths}`);
    console.log(`Total Profit/Loss: ${totalProfitLoss}`);
    console.log(`Average Change: ${averageChange}`);
    console.log(`Greatest Increase in Prof