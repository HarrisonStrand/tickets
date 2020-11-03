//Ticket Price Logic
let newTicketPrice = new TicketPrice;

function TicketPrice() {
  this.tickets = [];
  this.currentId = 0;
}
  
TicketPrice.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketPrice.prototype.assignId = function() {
  this.currentId+= 1;
  return this.currentId;
}

//Ticket logic
function Ticket(movieName, movieTime, attendeeAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.attendeeAge = attendeeAge;
}

// Ticket.prototype.description = function() {
//   return this.movieName + this.movieTime + this.attendeeAge;
// }


//UI Logic