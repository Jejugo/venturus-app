export default function(weekDays){
  if(typeof weekDays !== 'string' || weekDays instanceof String){
    let arrayFiltered = weekDays.filter(days => {
      return days.checked === true;
    }).map(item => {
      return item.label;
    });
  
    return arrayFiltered.join(", ");
  }
  else{
    return weekDays;
  }
}
