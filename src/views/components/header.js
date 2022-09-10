import './header.scss'
function header(prop) {
    return (
        <div className="header flex-row">
            <div className='left flex-row'><div className='col-1'>NARWHAL</div>
                <div className='col-2'>Teams</div></div>

            <div className='right flex-row'>
                <div className='msg-box'>
                    <div> <img src={require('imgs/mail.png')} alt=''></img></div>
                    <div className='dot'>{prop.data.notifications_count}</div>
                </div>
                <div className='info'>Hello, {prop.data.name}</div>
                <div className='avatar'>
                    <div> <img src={prop.data.avatar} alt=''></img></div>
                    
                </div>
                <div className='icon-down'>
                    <div> <img src={require('imgs/caretDown.png')} alt=''></img></div>
                </div>
            </div>

        </div>
    )
}

export default header