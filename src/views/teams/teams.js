import "./teams.scss";
import NavBar from "../../views/components/navBar.js";
import Header from "../../views/components/header.js";
import FuncBar from "./components/funcBar.js";
import Team from "./components/team.js";
import Activity from './components/activity.js'
import { useEffect, useState } from "react";

function Teams() {
  const [data] = useState({
    "teams": [
      {
        "id": 1,
        "name": "Axa",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
        "description": "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
        "campaigns_count": 20,
        "leads_count": 1500,
        "is_favorited": true,
        "is_archived": false,
        "created_at": "28 July 2018"
      },
      {
        "id": 2,
        "name": "Indeed - US",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
        "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
        "campaigns_count": 15,
        "leads_count": 7130,
        "is_favorited": false,
        "is_archived": false,
        "created_at": "15 October 2018"
      },
      {
        "id": 3,
        "name": "Indeed - EU",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
        "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
        "campaigns_count": 18,
        "leads_count": 3500,
        "is_favorited": false,
        "is_archived": false,
        "created_at": "1 October 2018"
      },
      {
        "id": 4,
        "name": "Workday - US",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
        "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
        "campaigns_count": 16,
        "leads_count": 2000,
        "is_favorited": false,
        "is_archived": false
      },
      {
        "id": 5,
        "name": "Workday - AU",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
        "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
        "campaigns_count": 12,
        "leads_count": 1500,
        "is_favorited": false,
        "is_archived": false
      },
      {
        "id": 6,
        "name": "Time",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143",
        "description": "Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff",
        "campaigns_count": 13,
        "leads_count": 10000,
        "is_favorited": true,
        "is_archived": false
      },
      {
        "id": 7,
        "name": "Zendesk",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352",
        "description": "Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess",
        "campaigns_count": 17,
        "leads_count": 1200,
        "is_favorited": true,
        "is_archived": false
      },
      {
        "id": 8,
        "name": "Uber",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240",
        "description": "Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess",
        "campaigns_count": 10,
        "leads_count": 3200,
        "is_favorited": false,
        "is_archived": true
      },
      {
        "id": 9,
        "name": "Grab",
        "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
        "description": "GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people",
        "campaigns_count": 23,
        "leads_count": 2000,
        "is_favorited": false,
        "is_archived": true
      }
    ],
    "activities": [
      {
        "id": 1,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "increased_quota",
        "target": "Indeed - US",
        "created_at": "2 hours ago"
      },
      {
        "id": 2,
        "person": {
          "id": 2,
          "name": "Emily",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
        },
        "action": "added_leads",
        "target": "Linkedin",
        "created_at": "4 hours ago"
      },
      {
        "id": 3,
        "person": {
          "id": 2,
          "name": "Emily",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
        },
        "action": "archived_team",
        "target": "Uber"
      },
      {
        "id": 4,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "archived_team",
        "target": "Grab",
        "created_at": "6 hours ago"
      },
      {
        "id": 5,
        "person": {
          "id": 1,
          "name": "Julie",
          "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
        },
        "action": "added_leads",
        "target": "Workday - AU",
        "created_at": "2 hours ago"
      }
    ],
    "current_user": {
      "id": 4,
      "name": "John",
      "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040",
      "notifications_count": 5
    }
  })
  const [teamsData, setTeamsData] = useState(data)
  const [allData, setAllData] = useState(data)
  const [index, setIndex] = useState(1)
  const [searchContent, setSearchContent] = useState('')

  // It seems that the response data has a typo
  /* fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T135311Z&X-Amz-Expires=86400&X-Amz-Signature=b5170b3e27f0e9464cc1b966f0531acffaf3adcfd0ed48998fbb3f6d0973a905&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject')
  .then(response => response.json())      
  .then((data)=>{
          console.log(data)
          setData(data)
  }) */


  const updateFav = (id, fav) => {
    let newData;
    newData = allData.teams.map(item => {
      if (item.id === id) {
        return { ...item, is_favorited: fav }
      }
      return item
    })

    setAllData({ ...allData, 'teams': newData })


  }



  const teamList = teamsData.teams.map((item, index) =>
    <div key={index} className={(index + 1) % 3 === 0 ? 'last' : 'notLast'}>
      <Team onUpdateFav={updateFav} teamInfo={item}  ></Team>
    </div>

  );

  const indexChange = (index) => {
    setIndex(index)
    if (index === 1) {
      setTeamsData({ ...teamsData, 'teams': allData.teams })
    } else if (index === 2) {
      setTeamsData({
        ...teamsData, 'teams': allData.teams.filter((item) =>
          item.is_favorited === true
        )
      })
    } else {
      setTeamsData({
        ...teamsData, 'teams': allData.teams.filter((item) =>
          item.is_archived === true
        )
      })
    }
  }

  const searchChange = (content) => {
    console.log(content)
    setSearchContent(content)
  }

  useEffect(() => {
    if (index === 1) {
      setTeamsData(t => {
        return {
          ...t, 'teams': allData.teams.filter((item) =>
             item.name.toUpperCase().includes(searchContent.toUpperCase())
          )
        }
      })
    } else if (index === 2) {
      setTeamsData(t => {
        return {
          ...t, 'teams': allData.teams.filter((item) =>
            item.is_favorited === true && item.name.toUpperCase().includes(searchContent.toUpperCase())
          )
        }
      })
    } else if (index === 3) {
      setTeamsData(t => {
        return {
          ...t, 'teams': allData.teams.filter((item) =>
            item.is_archived === true && item.name.toUpperCase().includes(searchContent.toUpperCase())
          )
        }
      })
    }

  }, [allData, index, searchContent])


  return (
    <div className={"teams flex-row"}>
      <NavBar></NavBar>
      <div className="content-wrap">
        <Header data={data.current_user}></Header>
        <FuncBar onIndexChange={indexChange} onSearchChange={searchChange}></FuncBar>
        <div className="flex-row">
          <div className="content">
            <div className="all-teams">
              <div className="title flex-row">
                <div className="left">All Teams</div>
                <div className="right">Showing {teamsData.teams.length || 0} out of {teamsData.teams.length || 0} teams</div>
              </div>
              <div className="teams-wrap">
                {teamList}
              </div>

            </div>
            <Activity data={data.activities}></Activity>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Teams;
