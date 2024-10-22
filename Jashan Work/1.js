// script.js

function updateResume() {
	const firstName = document.getElementById('firstName').value;
	const middleName = document.getElementById('middleName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const address = document.getElementById('address').value;
	const degree = document.getElementById('degree').value;
	const university = document.getElementById('university').value;
	const year = document.getElementById('year').value;

	const resumeOutput = `
        <h3>${firstName} ${middleName ? middleName + ' ' : ''}${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h4 style="margin-top: 20px;">Education</h4>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Year of Graduation:</strong> ${year}</p>
    `;

	document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
