//Ticket Price Logic


function TicketPrice() {
  this.tickets = [];
  this.currentId = 0;
  const newRelease = "Tenet";
}
  
TicketPrice.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketPrice.prototype.assignId = function() {
  this.currentId+= 1;
  return this.currentId;
}

TicketPrice.prototype.findTicket = function(id) {
  for (let i=0; i< this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        
        return this.tickets[i];
      }
    }
  };
  return false;
}



function Ticket(movieName, movieTime, attendeeAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.attendeeAge = attendeeAge;
}

// Ticket.prototype.movieNameIdentifier = function() {
//   for(let i = 0; i <=movieName.length; i ++) {
//     if(this.movieName[i] == "Step Brothers")
//     console.log("Hi");
//   }
// }




//UI Logic
let newTicketPrice = new TicketPrice();

$(document).ready(function(event) {
  $("button#submit").click(function() {
    let inputtedMovie = $("select#movie-title").val();
    let inputtedTime = $("select#movie-time").val();
    let inputtedAge = $("input#age").val();   
    
    let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    newTicketPrice.addTicket(newTicket);
    console.log(newTicketPrice);
    
    let selectedMovie = newTicketPrice.findTicket(0);
    if(selectedMovie.newRelease === true) {
      totalCost += 5;
    }
    
  });
});