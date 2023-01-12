function dateFormat(date){
  var formatDate = new Date(date)
  return formatDate.getFullYear() + "-" 
    + ("00" + (formatDate.getMonth() + 1)).slice(-2) + "-" 
    + ("00" + formatDate.getDate()).slice(-2) + " " 
    + formatDate.getHours().toString().padStart(2, '0') + ":"
    + formatDate.getMinutes().toString().padStart(2, '0');
}

export default dateFormat;