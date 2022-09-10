import { useEffect, useState } from "react";
import "./team.scss";
function Team(props) {
    const [favorited, setFavorited] = useState(props.teamInfo.is_favorited);

    useEffect(() => {
        setFavorited(props.teamInfo.is_favorited)
    }, [props.teamInfo]);

    const changeFav = () => {
        setFavorited(!favorited)
        props.onUpdateFav(props.teamInfo.id, !favorited)
    }

    return (
        <div className={"team"}>
            <div className="row-1 flex-row">
                <div className="main">
                    <img src={props.teamInfo.image} alt=""></img>
                </div>
                <div className="middle">
                    <div>{props.teamInfo.name}</div>
                    <div className="created_at">{props.teamInfo.created_at}</div>
                </div>
                <div>{favorited ? <div className="icon-star"><img onClick={() => changeFav()} src={require('imgs/starFull.png')} alt=""></img></div> : <div className="icon-star"><img onClick={() => changeFav()} src={require('imgs/starEmpty.png')} alt=""></img></div>}</div>

            </div>
            <div className="row-2 flex-row">{props.teamInfo.description}</div>
            <div className="gap"></div>
            <div className="row-3 flex-row">
                <div className="icon-campaign"><img src={require('imgs/campaign.png')} alt=""></img></div>
                {props.teamInfo.campaigns_count} Campaigns
                <div className="icon-leads"><img src={require('imgs/leads.png')} alt=""></img></div>
                {props.teamInfo.leads_count} Leads
            </div>

        </div>
    );
}

export default Team;