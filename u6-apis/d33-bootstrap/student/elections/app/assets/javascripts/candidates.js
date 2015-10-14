// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// Write AJAX call based on the following criteria
// 1. url is /candidates/vote
// 2. method is POST
// 3. data is an id
// 4. when the ajax callback is successful log Very Nice!
// 5. if the ajax callback is not sucessful log Yikes!

$(function() {

	$('button').click(function(event) {
		var candidateId = event.currentTarget.dataset.id;

		$.ajax({
			url: '/candidates/vote',
			method: 'POST',
			data: { id: candidateId },
			success: function(data, status, xhr) {
				console.log("Very Nice!", data);
				$('.votes').text(data.votes)
			},
			error: function(xhr, status, error) {
				console.log("Yikes!", error);
			}
		});
	});

<<<<<<< HEAD

	$('input[name="commit"]').click(function() {
=======
	$('input[name="commit"]').click(function(event) {
>>>>>>> 2898c00c72f0e53e94b3cc50e85788dc8db5a0bb
		event.preventDefault();
		var candidateAttr = {
			first_name: $('#candidate_first_name').val(),
			last_name: $('#candidate_last_name').val(),
<<<<<<< HEAD
			bio: $("#candidate_bio"),
			party: $("#candidate_party"),
			campaign: $("#candidate_campaign")
		}
=======
			bio: $('#candidate_bio').val(),
			party: $('#candidate_party').val(),
			campaign: $('#candidate_campaign').val()
		};

>>>>>>> 2898c00c72f0e53e94b3cc50e85788dc8db5a0bb
		$.ajax({
			url: '/candidates',
			method: 'POST',
			data: {candidate: candidateAttr},
			success: function(result, status) {
<<<<<<< HEAD
				console.log("result", result)
			},
			error: function(xhr, status, error) {
				console.log('error', error)
			}
		})
	})
});
=======
				console.log('result', result);
			},
			error: function(a, v, c) {
				console.log('error', c);
			}
		})
	});
});










>>>>>>> 2898c00c72f0e53e94b3cc50e85788dc8db5a0bb
