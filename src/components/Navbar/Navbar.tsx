import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.css";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-container__left">
				<span className="navbar-container__left-logo">Rodgersocial</span>
			</div>
			<div className="navbar-container__center">
				<div className="navbar-container__center-search">
					<SearchIcon />
					<input
						type="text"
						className="navbar-container__center-search_input"
						placeholder="Search for friends, posts, or videos!"
					/>
				</div>
			</div>
			<div className="navbar-container__right">
				<div className="navbar_container__right-links">
					<span className="navbar_container__right-link">Home</span>
					<span className="navbar_container__right-link">Timeline</span>
				</div>
				<div className="navbar-container__right-icons">
					<div className="navbar-container__right-icon">
						<PersonIcon />
						<span className="navbar-container__right-icon_badge">1</span>
					</div>
					<div className="navbar-container__right-icon">
						<MessageIcon />
						<span className="navbar-container__right-icon_badge">2</span>
					</div>
					<div className="navbar-container__right-icon">
						<NotificationsIcon />
						<span className="navbar-container__right-icon_badge">1</span>
					</div>
				</div>
				<img
					src="src/assets/person/1.jpeg"
					alt="profile-image"
					className="navbar-container__right-image"
				/>
			</div>
		</div>
	);
};

export default Navbar;
