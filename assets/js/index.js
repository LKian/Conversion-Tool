var header =  $('h1');
$("#unitOutput").on('change',function() {
	event.preventDefault();
	var qtyInput = $('#qtyInput').val();
	var unitInput = $('#unitInput').val();
	var qtyOutput = $('#qtyOutput').val();
	var unitOutput = $('#unitOutput').val();

	switch(unitInput) {
		case "Cup":
			switch(unitOutput) {
				case "Teaspoon": 
					$('#qtyOutput').val(qtyInput*48);
					break;
				case "Tablespoon":
					$('#qtyOutput').val(qtyInput*16);
					break;
				case "Cup":
					$('#qtyOutput').val(qtyInput);
					break;
				case "Gallon":
					$('#qtyOutput').val(qtyInput/16);
					break; }
			break;
		case "Gallon":
			switch(unitOutput) {
				case "Teaspoon":
					$('#qtyOutput').val(qtyInput*768);
					break;
				case "Tablespoon":
					$('#qtyOutput').val(qtyInput*256);
					break;
				case "Cup":
					$('#qtyOutput').val(qtyInput*16);
					break;
				case "Gallon":
					$('#qtyOutput').val(qtyInput);
					break;	}
			break;

		case "Teaspoon":
			switch(unitOutput) {
				case "Teaspoon":
					$('#qtyOutput').val(qtyInput);
					break;
				case "Tablespoon":
					$('#qtyOutput').val(qtyInput/3);
					break;
				case "Cup":
					$('#qtyOutput').val(qtyInput*0.0205372);
					break;
				case "Gallon":
					$('#qtyOutput').val(qtyInput*0.001302085025680837); }
			break;

		case "Tablespoon":
			switch(unitOutput) {
				case "Teaspoon":
					$('#qtyOutput').val(qtyInput*3);
					break;
				case "Tablespoon":
					$('#qtyOutput').val(qtyInput);
					break;
				case "Cup":
					$('#qtyOutput').val(qtyInput/16.23);
					break;
				case "Gallon":
					$('#qtyOutput').val(qtyInput/256); }
			}
		}) ;