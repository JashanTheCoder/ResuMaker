// Update resume preview in localStorage and the same page
function updateResume() {
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const summary = document.getElementById('summary').value;

	// Store data in localStorage
	localStorage.setItem('firstName', firstName);
	localStorage.setItem('lastName', lastName);
	localStorage.setItem('email', email);
	localStorage.setItem('phone', phone);
	localStorage.setItem('summary', summary);

	// Update the preview section directly
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
		localStorage.setItem('profilePic', reader.result);
	};
	reader.readAsDataURL(event.target.files[0]);
}

// Initialize preview with existing data
window.onload = function () {
	const firstName = localStorage.getItem('firstName') || 'Your Name';
	const lastName = localStorage.getItem('lastName') || '';
	const email = localStorage.getItem('email') || 'your.email@example.com';
	const phone = localStorage.getItem('phone') || '000-000-0000';
	const summary =
		localStorage.getItem('summary') || 'A short bio will appear here...';
	const profilePic = localStorage.getItem('profilePic') || '';

	document.getElementById('name-preview').textContent =
		firstName + ' ' + lastName;
	document.getElementById('email-preview').textContent = 'Email: ' + email;
	document.getElementById('phone-preview').textContent = 'Phone: ' + phone;
	document.getElementById('summary-preview').textContent = summary;

	if (profilePic) {
		document.getElementById('profile-pic-preview').src = profilePic;
	}
};
