import logo from '../assets/company-logo.png';

function Header() {
	return (
		<div id="header" className="p-8 mb-4 drop-shadow-xl text-center text-white w-full">
			<div className="w-full md:w-4/6 flex mx-auto justify-center md:justify-start mb-10">
				<img src={logo} alt="Ship Sticks Company Logo" width="150" />
			</div>
			<h2 className="text-4xl lg:text-7xl font-bold mb-4 bg-gradient-to-b from-green-200 via-green-400 to-green-600 bg-clip-text text-transparent">Ship Your Golf Clubs Ahead</h2>
			<h3 className="text-xl lg:text-3xl font-semibold text-shadow-lg shadow-green-500">
				Safe, convenient, and hassle-free travel. Guaranteed.
			</h3>
		</div>
	);
}

export default Header;
