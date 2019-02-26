// Code your solution here
let totalBatteries=0;
const batteryBatches=[20,2,5,4]
totalBatteries = batteryBatches.reduce((totalBatteries, battery)=> battery + totalBatteries)