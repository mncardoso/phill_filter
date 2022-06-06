import styles from "../../styles/layout/footer.module.css";

let Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__newsletter}>
				<h1>
					Join our<br></br>newsletter
				</h1>
				<form>
					<input type="email" placeholder="Your e-mail"></input>
					<button>Subscribe</button>
				</form>
			</div>
			<div className={styles.footer__menu}>
				<div className={styles.footer__menu__items}>
					<h2>Company</h2>
					<ul>
						<li>
							<a>About us</a>
						</li>
						<li>
							<a>Stockist</a>
						</li>
						<li>
							<a>Careers</a>
						</li>
						<li>
							<a>Press</a>
						</li>
						<li>
							<a>CSR</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
						<li>
							<a>Site map</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__menu__items}>
					<h2>Find a store</h2>
					<ul>
						<li>
							<a>London</a>
						</li>
						<li>
							<a>Paris</a>
						</li>
						<li>
							<a>Barcelona</a>
						</li>
						<li>
							<a>New York</a>
						</li>
						<li>
							<a>Copenhagen</a>
						</li>
						<li>
							<a>By Studio Appointment</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__menu__items}>
					<h2>Customer Service</h2>
					<ul>
						<li>
							<a>Shipping info</a>
						</li>
						<li>
							<a>Terms and conditions</a>
						</li>
						<li>
							<a>Returns</a>
						</li>
						<li>
							<a>Ordering</a>
						</li>
						<li>
							<a>Order status</a>
						</li>
						<li>
							<a>Shoe Care</a>
						</li>
						<li>
							<a>Size guide</a>
						</li>
						<li>
							<a>FAQ´s</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__menu__items}>
					<h2>Assistance</h2>
					<ul>
						<li>
							<a>Call</a>
						</li>
						<li>
							<a>Email</a>
						</li>
						<li>
							<a>Live chat</a>
						</li>
					</ul>
					<h2>Legal & Cookies</h2>
					<ul>
						<li>
							<a>Privacy policy</a>
						</li>
						<li>
							<a>Cookies Policy</a>
						</li>
						<li>
							<a>Terms and conditions</a>
						</li>
						<li>
							<a>Transparency in the supply chain</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footer__bot}>
				<div className={styles.footer__logo}>
					<img src="/miista_logo_black.svg"></img>
				</div>
				<div className={styles.footer__copy}>
					<h3>All right reserved</h3>
				</div>
				<div className={styles.footer__social}>
					<h3>social</h3>
					<ul>
						<li>
							<a>
								<img src="./icons/instagram.svg"></img>
							</a>
						</li>
						<li>
							<a>
								<img src="./icons/pintrest.svg"></img>
							</a>
						</li>
						<li>
							<a>
								<img src="./icons/facebook.svg"></img>
							</a>
						</li>
						<li>
							<a>
								<img src="./icons/twitter.svg"></img>
							</a>
						</li>
						<li>
							<a>
								<img src="./icons/youtube.svg"></img>
							</a>
						</li>
						<li>
							<a>
								<img src="./icons/wechat.svg"></img>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
