import React from 'react'
import "./SideBar_Option.css"
import Row from 'react-bootstrap/Row'
function SideBar_Option({Icon,text,active}) {
	return (
		<Row className={`d-flex align-items-center p-2 sidebarOption ${active && 'sidebarOption--active'}`}>
			<div className='mr-2'>
				{Icon}
			</div>
			<h3>{text}</h3>
		</Row>
	)
}

export default SideBar_Option