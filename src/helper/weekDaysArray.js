export default function(weekDays){
  let arrayFiltered = weekDays.filter(days => {
    return days.checked === true;
  }).map(item => {
    return item.label;
  });

  return arrayFiltered.join();
}
