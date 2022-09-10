import { useState } from 'react';
import './funcBar.scss'

function FuncBar(props) {
    const [activeTag, tabIndexChange] = useState(1);
    const handleTabChange = (index) => {
        tabIndexChange(index)
        props.onIndexChange(index) 
    }
    const handleContentChange = (event)=>{
        console.log(event.target.value)
        props.onSearchChange(event.target.value)
    }
    return (
        <div className="func-bar flex-row">
            <div className='left flex-col'>
                <div className='row-1 flex-row'>
                    <div className='icon-company'>
                        <img src={require('imgs/companies.png')} alt=''></img>
                    </div>
                    <div className='text'>Teams</div>
                </div>
                <div className='row-2 flex-row'>
                    <div onClick={() => handleTabChange(1)} className={'tag tag-1 ' + (activeTag === 1 ? 'active' : '')}>All</div>
                    <div onClick={() => handleTabChange(2)} className={'tag tag-2 ' + (activeTag === 2 ? 'active' : '')} >Favorites</div>
                    <div onClick={() => handleTabChange(3)} className={'tag tag-3 ' + (activeTag === 3 ? 'active' : '')}>Archived</div>
                </div>
            </div>
            <div className='right'>
                <div className='row-1'>
                    <button className='flex-row btn-add'><div className='icon-plus'><img src={require('imgs/plus.png')} alt=''></img></div> CREATE NEW TEAM</button>
                </div>
                <div className='row-2 flex-row'>
                    <div className='icon-search'>
                        <img src={require('imgs/search.png')} alt=''></img>
                    </div>
                    <input placeholder='search team name...'  onChange={handleContentChange}></input>
                </div>
            </div>
        </div>
    );
}

export default FuncBar;