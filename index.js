// Code your solution here
const batteryBatches = [10, 9, 3, 4, 5]
const reducer = (total, element) => total + element;
let totalBatteries = batteryBatches.reduce(reducer);
