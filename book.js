document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const location = document.getElementById('location').value;
    const service = document.getElementById('service').value;
    const stylist = document.getElementById('stylist').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    console.log('Location:', location);
    console.log('Service:', service);
    console.log('Stylist:', stylist);
    console.log('Date:', date);
    console.log('Time:', time);
  
    alert('Thank you for booking an appointment with us. We will be in touch shortly.');
  
    document.getElementById('booking-form').reset();
  });