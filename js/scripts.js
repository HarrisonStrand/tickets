//Ticket Price Logic


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
// let MovieName = new MovieName
// function MovieName(newRelease, oldRelease) {
//   this.newRelease = newRelease;
//   this.oldRelease = oldRelease;
// }
function Ticket(movieName, movieTime, attendeeAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.attendeeAge = attendeeAge;
}

// Ticket.prototype.description = function() {
//   return this.movieName + this.movieTime + this.attendeeAge;
// }


//UI Logic
let newTicketPrice = new TicketPrice();
$(document).ready(function(event) {
  $("button#submit").click(function() {
    let inputtedAge = $("input#age").val();   
    let inputtedMovie = $("select#movie-title").val();
    let inputtedTime = $("select#movie-time").val();
    
    let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    newTicketPrice.addTicket(newTicket);
    console.log(newTicketPrice);
    
    
    
  });
});