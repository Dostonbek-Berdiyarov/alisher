var userCapital = +prompt("Brat qancha polingiz bor??"),
  userUseMoney = +prompt("O'zingizga qancha  ishlatasiz??"),
  ticket = 500,
  hotel = 250,
  museum = 120,
  dollarInSum = +prompt("Dollar narxi qancha??"),
  ticketInSum = ticket * dollarInSum,
  hotelInSum = hotel * dollarInSum,
  yevroInSum = +prompt("Yevro narxi qancha??"),
  museumInSum = museum * yevroInSum,
  allInSum = ticketInSum + hotelInSum + museumInSum,
  howMuch = allInSum + userUseMoney;
if (userCapital >= howMuch) {
  console.log("Oq yo’l, Alisher!");
} else if (userCapital >= allInSum && userCapital < howMuch) {
  console.log("Oq yo’l, Alisher! Faqat o'zingizga pul yo'q ekan");
} else if (userCapital < allInSum) {
  console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}
