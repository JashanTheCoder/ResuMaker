function updatePersonalDetails() {
	const name = document.getElementById('input-name').value;
	const title = document.getElementById('input-title').value;
	const contact = document.getElementById('input-contact').value;
	const email = document.getElementById('input-email').value;
	const linkedin = document.getElementById('input-linkedin').value;

	document.getElementById('name').innerText = name;
	document.getElementById('title').innerText = title;
	document.getElementById('contact-info-text').innerText = contact;
	document.getElementById('email-text').innerText = email;
	document.getElementById('linkedin-text').innerText = linkedin;
}

// function updateSummary() {
// 	const summary = document.getElementById('input-summary').value;
// 	document.getElementById('summary').querySelector('p').innerText = summary;
// }

function updateExperience() {
	const experience = document.getElementById('input-experience').innerHTML; // Get formatted content
	document.getElementById('experience').innerHTML = experience; // Update the experience display area
}

function updateEducation() {
	const education = document.getElementById('input-education').innerHTML; // Get formatted content
	document.getElementById('education').innerHTML = education; // Update the education display area
}

function updateSkills() {
	const skills = document.getElementById('input-skills').value;
	document.getElementById('skills').querySelector('p').innerText = skills;
}

function formatText(command) {
	document.execCommand(command, false, null);
}
function updateSummary() {
	const summary = document.getElementById('input-summary').innerHTML; // Use innerHTML to get the formatted content
	document.getElementById('summary').querySelector('p').innerHTML = summary; // Set innerHTML to allow formatting
}

function clearFormatting() {
	document.execCommand('removeFormat', false, null); // Clear formatting from the selected text
}

// ********************************extra button of preview and download*************************************

// function previewResume() {
// 	// Create a new window or tab for the resume preview
// 	const resumeWindow = window.open('', '_blank');

// 	// Add the resume HTML content to the new window
// 	resumeWindow.document.write(`
//         <html>
//             <head>
//                 <title>Resume Preview</title>
//                 <link rel="stylesheet" href="./softwared_resume.css">
//             </head>
//             <body>
//                 <div id="resume-container">
//                     <!-- Copy the resume HTML structure here, or dynamically generate it -->
//                     <div id="header">
//                         <h1>${document.getElementById('name').innerText}</h1>
//                         <h2>${document.getElementById('title').innerText}</h2>
//                         <div id="contact-info">${
// 													document.getElementById('contact-info').innerText
// 												}</div>
//                     </div>
//                     <div id="summary">
//                         <h3>SUMMARY</h3>
//                         <p>${
// 													document.getElementById('summary').querySelector('p')
// 														.innerText
// 												}</p>
//                     </div>
//                     <div id="experience">
//                         <h3>EXPERIENCE</h3>
//                         <p>${
// 													document.getElementById('experience').innerHTML
// 												}</p>
//                     </div>
//                     <div id="education">
//                         <h3>EDUCATION</h3>
//                         <p>${document.getElementById('education').innerHTML}</p>
//                     </div>
//                     <div id="skills">
//                         <h3>SKILLS</h3>
//                         <p>${
// 													document.getElementById('skills').querySelector('p')
// 														.innerText
// 												}</p>
//                     </div>
//                 </div>
//             </body>
//         </html>
//     `);

// 	resumeWindow.document.close(); // Close the document to render the content
// }

// function downloadResume() {
// 	const resumeContent = `
//         <h1>${document.getElementById('name').innerText}</h1>
//         <h2>${document.getElementById('title').innerText}</h2>
//         <div>${document.getElementById('contact-info').innerText}</div>
//         <h3>SUMMARY</h3>
//         <p>${
// 					document.getElementById('summary').querySelector('p').innerText
// 				}</p>
//         <h3>EXPERIENCE</h3>
//         <p>${document.getElementById('experience').innerHTML}</p>
//         <h3>EDUCATION</h3>
//         <p>${document.getElementById('education').innerHTML}</p>
//         <h3>SKILLS</h3>
//         <p>${document.getElementById('skills').querySelector('p').innerText}</p>
//     `;

// 	const blob = new Blob([resumeContent], { type: 'text/html' });
// 	const url = URL.createObjectURL(blob);
// 	const a = document.createElement('a');
// 	a.href = url;
// 	a.download = 'resume.html'; // You can change this to .pdf if you implement PDF generation
// 	a.click();
// 	URL.revokeObjectURL(url);
// }
