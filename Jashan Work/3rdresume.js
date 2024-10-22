function updateResume() {
	// Get form values
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const summary = document.getElementById('summary').value;

	// Update the preview
	document.getElementById('name-preview').textContent =
		firstName + ' ' + lastName;
	document.getElementById('email-preview').textContent = 'Email: ' + email;
	document.getElementById('phone-preview').textContent = 'Phone: ' + phone;
	document.getElementById('summary-preview').textContent = summary;
}

// Function to preview the uploaded image
function previewImage(event) {
	const reader = new FileReader();
	reader.onload = function () {
		const output = document.getElementById('profile-pic-preview');
		output.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
}

// Function to download the resume
function downloadResume() {
	const resume = document.getElementById('resume-template');
	const opt = {
		margin: 1,
		filename: 'resume.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
	};
	html2pdf().from(resume).set(opt).save();
}
