/* Stage- Bootstrap one page Event ticket booking theme 
Created by pixpalette.com - online design magazine */

$(window).load(function() {
	// Animate loader off screen
	$(".loader").fadeOut("slow");;
});

//Ticket count and price minus and plus
$('.btn-number').click(function(e){
    e.preventDefault();
    /* ticket count */
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
	/* ticket price */
	var ticketPrice = $(this).parents('.ticketBox').attr('data-ticket-price');
	/* ticket type */
	var ticketType = $(this).parents('.ticketBox').find('.ticket-name').html();
	var total;
	
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
				
				console.log(input.val());
				total = ticketPrice * input.val();
				console.log(ticketPrice);
				activeTicket(this, input.val(), ticketPrice, total, ticketType);
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
				
				console.log(input.val());
				total = ticketPrice * input.val();
				console.log(ticketPrice);
				activeTicket(this, input.val(), ticketPrice, total, ticketType);
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change();

function activeTicket(target, inputValue, ticketPrice, total, ticketType) {
	if(inputValue > 0) {
		$('#buyTicket .ticketBox').addClass('inActiveTicket');
		$(target).parents('.ticketBox').removeClass('inActiveTicket').addClass('activeTicket');
		$('.cart .btn').removeClass('disabled');
		$('.ticket-type').html(ticketType);
		$('.ticket-count').html(inputValue);
		$('.ticket-amount').html(ticketPrice);
		$('.total-amount').html(total);
	} else {
		$('#buyTicket .ticketBox').removeClass('inActiveTicket');
		$(target).parents('.ticketBox').removeClass('activeTicket inActiveTicket');
		$('.cart .btn').addClass('disabled');
		$('.ticket-type').html('');
		$('.ticket-count').html(inputValue);
		$('.ticket-amount').html(ticketPrice);
		$('.total-amount').html(total);
	}
}