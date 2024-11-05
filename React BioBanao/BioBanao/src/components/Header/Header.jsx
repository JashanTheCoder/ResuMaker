import React from 'react';
import resumeSvg from '../../assets/resume.svg';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h1 className={styles.headingPrimary}>
					Let's <span>start your resume</span> journey!
				</h1>
				<p className={styles.subheading}>
					With our intuitive editor, create a resume that’s not only
					professional but uniquely you.
				</p>
				<div className={styles.instructions}>
					<div className={styles.step}>
						<span className={styles.stepNumber}>1</span>
						<p>
							Fill in each section with your details, from{' '}
							<strong>Basic Info</strong> to <strong>Achievements</strong>.
						</p>
					</div>
					<div className={styles.step}>
						<span className={styles.stepNumber}>2</span>
						<p>
							Select a color theme to reflect your style and give your resume a
							polished look.
						</p>
					</div>
					<div className={styles.step}>
						<span className={styles.stepNumber}>3</span>
						<p>
							Preview and download your personalized resume, ready to impress.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<img
					src={resumeSvg}
					alt='Resume illustration'
					className={styles.image}
				/>
			</div>
		</div>
	);
}

export default Header;
