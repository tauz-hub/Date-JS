Date.prototype.subDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date;
}

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const date = new Date();
const dataBaixa = date.subDays(Math.floor(Math.random() * 365 * 5))
const modeloAno = dataBaixa.getYear() + 1900 //adding minimum date

const diffTime = Math.abs(dataBaixa - new Date()); //difference between dates
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const dataFabricacao = dataBaixa.addDays(Math.floor(Math.random() * diffDays))

console.log(modeloAno);
console.log(dataFabricacao)
