import React from 'react'
import SideBarOption from './SideBar_Option'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHashtag,faBell,faEnvelope,faBookmark,faListUl,faUserAlt,faEllipsisH,faHome } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
	return (
		<div className="sidebar">
			<SideBarOption 
				active
				text="Hangout"
				Icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Option"
				Icon={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>} >
			</SideBarOption>
		</div>
	)
}

export default SideBar