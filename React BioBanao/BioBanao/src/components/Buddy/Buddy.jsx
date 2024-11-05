import React, { useRef, useState } from 'react';
import { ArrowDown } from 'react-feather';

import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

import styles from './Buddy.module.css';

function Buddy() {
	const colors = ['#007bff', '#48bb78', '#bc0202', '#a0aec0', '#ed8936'];
	const sections = {
		basicInfo: 'Basic Info',
		workExp: 'Work Experience',
		project: 'Projects',
		education: 'Education',
		achievement: 'Achievements',
		summary: 'Summary',
		other: 'Other',
	};
	const resumeRef = useRef();

	const [activeColor, setActiveColor] = useState(colors[0]);
	const [resumeInformation, setResumeInformation] = useState({
		[sections.basicInfo]: {
			id: sections.basicInfo,
			sectionTitle: sections.basicInfo,
			detail: {},
		},
		[sections.workExp]: {
			id: sections.workExp,
			sectionTitle: sections.workExp,
			details: [],
		},
		[sections.project]: {
			id: sections.project,
			sectionTitle: sections.project,
			details: [],
		},
		[sections.education]: {
			id: sections.education,
			sectionTitle: sections.education,
			details: [],
		},
		[sections.achievement]: {
			id: sections.achievement,
			sectionTitle: sections.achievement,
			points: [],
		},
		[sections.summary]: {
			id: sections.summary,
			sectionTitle: sections.summary,
			detail: '',
		},
		[sections.other]: {
			id: sections.other,
			sectionTitle: sections.other,
			detail: '',
		},
	});

	// Function to handle printing
	const handlePrint = () => {
		const printContents = resumeRef.current.innerHTML;
		const originalContents = document.body.innerHTML;

		// Set the body to only display the print area content
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
		window.location.reload(); // reload to restore the original page content
	};

	return (
		<div className={styles.container}>
			<p className={styles.heading}>Resume Builder</p>
			<div className={styles.toolbar}>
				<div className={styles.colors}>
					{colors.map((item) => (
						<span
							key={item}
							style={{ backgroundColor: item }}
							className={`${styles.color} ${
								activeColor === item ? styles.active : ''
							}`}
							onClick={() => setActiveColor(item)}
						/>
					))}
				</div>
				<button onClick={handlePrint}>
					Download <ArrowDown />
				</button>
			</div>
			<div className={styles.main}>
				<Editor
					sections={sections}
					information={resumeInformation}
					setInformation={setResumeInformation}
				/>
				<div ref={resumeRef} className='print-area'>
					<Resume
						sections={sections}
						information={resumeInformation}
						activeColor={activeColor}
					/>
				</div>
			</div>
		</div>
	);
}

export default Buddy;
