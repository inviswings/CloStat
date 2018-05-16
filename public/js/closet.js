function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(() =>{
	console.log("jQuery on");
 const database = firebase.database();



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

database.ref('users/').once('value', (snapshot) => {
	const data = snapshot.val();
	const top = data['Bob'].Clothes.Top;
	const bottom = data['Bob'].Clothes.Bottom;
	const keysT = Object.keys(top);
	const keysB = Object.keys(bottom);
	console.log(bottom);
for(const key of keysT) {
	if (top[key].clean) {
		$('#items').append(`<h4 class="list">${key}</h4>`);
	}
}
$('#CT').click(()=>{
   console.log("CT");
	 var myNode = document.getElementById("items");
	 myNode.innerHTML = '';
	 for(const key of keysT) {
	 	if (top[key].clean) {
	 		$('#items').append(`<h4 class="list">${key}</h4>`);
	 	}
	 }
});

$('#CB').click(()=>{
   console.log("CB");
	 var myNode = document.getElementById("items");
	 myNode.innerHTML = '';
	 for(const key of keysB) {
	 	if (bottom[key].clean) {
	 		$('#items').append(`<h4 class="list">${key}</h4>`);
	 	}
	 }
});

$('#DT').click(()=>{
   console.log("CT");
	 var myNode = document.getElementById("items");
	 myNode.innerHTML = '';
	 for(const key of keysT) {
	 	if (!top[key].clean) {
	 		$('#items').append(`<h4 class="list">${key}</h4>`);
	 	}
	 }
});

$('#DB').click(()=>{
   console.log("CT");
	 var myNode = document.getElementById("items");
	 myNode.innerHTML = '';
	 for(const key of keysB) {
	 	if (!bottom[key].clean) {
	 		$('#items').append(`<h4 class="list">${key}</h4>`);
	 	}
	 }
 });

 google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart);

       function drawChart() {

         var data = google.visualization.arrayToDataTable([
           ['Task', 'Hours per Day'],
           ['Clean Top',     7],
           ['Clean Bottom',      3],
           ['Dirty Top',  7],
           ['Dirty Bottom', 2],

         ]);

         var options = {
           legend:'none',

         };

         var chart = new google.visualization.PieChart(document.getElementById('piechart'));

         chart.draw(data, options);
       }

})



/*let clickTime=true;

	$.ajax({
		url: '/tops',
		type: 'GET',
		dataType: 'json',
		success: (data) =>{
			console.log('ajax success', data);


			$('.percentage').attr('src','/images/Stas.jpg');
						//$('#percentNumber').html('63%');
						//$('#items').html('{{#each data}} <h2 class="list">{{name}}</h2>{{/each}}');
						for(const item of data) {
							if (item.status=='clean') {
								$('#items').append(`<h4 class="list">${item.name}</h4>`);
							}
						}
					}

				})
	clickTime=false;

	$('#filter').click(() => {
		console.log('dirty');
		var myNode = document.getElementById("items");
		myNode.innerHTML = '';
		if (!clickTime) {

			$.ajax({
				url: '/tops',
				type: 'GET',
				dataType: 'json',
				success: (data) =>{
					console.log('ajax success', data);
					$('.percentage ').attr('src','/images/washing.jpg');
						//$('#percentNumber').html('37%');
						//$('#items').html('{{#each topsDirtty}} <h2 class="list">{{name}}</h2>{{/each}}');
						for(const item of data) {
							if (item.status=='dirty') {
								$('#items').append(`<h4 class="list">${item.name}</h4>`);
							}
						}
					}
				});
			clickTime=true;
		}
		else {
			$.ajax({
				url: '/tops',
				type: 'GET',
				dataType: 'json',
				success: (data) =>{
					console.log('ajax success', data);


					$('.percentage').attr('src','/images/Stas.jpg');
						//$('#percentNumber').html('63%');
						//$('#items').html('{{#each data}} <h2 class="list">{{name}}</h2>{{/each}}');
						for(const item of data) {
							if (item.status=='clean') {
								$('#items').append(`<h4 class="list">${item.name}</h4>`);
							}
						}
					}

				});
			clickTime=false;

		}
	});
	*/

});
