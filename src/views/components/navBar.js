import './navBar.scss'
function navBar() {
    return (
        <div className="nav-bar">
            <div className='logo'>
                <div className='img-wrap'><img src={require('imgs/whale.png')} alt=''></img></div>
            </div>
            <div className='btn'>
                <div className='img-wrap'><img src={require('imgs/campaign.png')} alt=''></img></div>
            </div>
            <div className='btn'>
                <div className='img-wrap'><img src={require('imgs/teams.png')} alt=''></img></div>
            </div>
            <div className='btn'>
                <div className='img-wrap'><img src={require('imgs/leads.png')} alt=''></img></div>
            </div>
            <div className='btn'>
                <div className='img-wrap'><img src={require('imgs/reports.png')} alt=''></img></div>
            </div>
        </div>
    )
}

export default navBar