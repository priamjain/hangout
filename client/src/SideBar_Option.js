import React from 'react'
import "./SideBar_Option.css"
function SideBar_Option({Icon,text,active}) {
	return (
		<div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
		{Icon}
		<h2>{text}</h2>
		</div>
	)
}

export default SideBar_Option