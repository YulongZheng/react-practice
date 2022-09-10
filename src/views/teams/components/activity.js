import "./activity.scss";

function activity(props) {

    const activityInfo = (item) => {
        if (item.action === 'increased_quota') {
            return <div > <span className="name">{item.person.name}</span>  increased <span className="name">{item.target}</span>'s  quota</div>
        } else if (item.action === 'archived_team') {
            return <div > <span className="name">{item.person.name}</span>  archived the team <span className="name">{item.target}</span> </div>
        } else {
            return <div > <span className="name">{item.person.name}</span>  added new leads to <span className="name">{item.target}</span> </div>
        }
    }


    const activityList = props.data.map((item, index) =>
        <div className="activity-detail flex-row" key={index}>
            <div className="left"><div className="avatar-wrap"> <img src={item.person.avatar} alt=""></img></div></div>
            <div className="right">
                {activityInfo(item)}
                <div className="created-at">{item.created_at}</div>
            </div>

        </div>
    )
    return (
        <div className={"activity"}>
            <div className="title">
                Activity
            </div>
            <div className="activity-list">
                {activityList}
            </div>

        </div>

    );
}

export default activity;