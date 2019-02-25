let batteryBatches = [10, 10, 10, 1]
let totalBatteries = batteryBatches.reduce(function (acc, curr){
  return acc + curr;
})
