import React, { Component } from 'react';
import axios from 'axios';
import './App.less';

class App extends Component {

  state = {
    profile: [],
    profile_location: [],
    profile_groups: [],
    profile_interests: [],
    profile_banners: [],
    feed: [],
  };

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/162vrt`)
      .then(res => {
        const profile = res.data.profile;
        const profile_location = res.data.profile.location;
        const profile_groups = res.data.profile.groups;
        const profile_interests = res.data.profile.interests;
        const profile_banners = res.data.profile.banners;
        const feed = res.data.feed;
        this.setState({ profile });
        this.setState({ profile_location });
        this.setState({ profile_groups });
        this.setState({ profile_interests });
        this.setState({ profile_banners });
        this.setState({ feed });
        console.log(this.state.profile);
        console.log(this.state.feed);
        console.log(this.state.profile_location);
      })
  }

  render() {
    return (
      <div className={"facebook"}>
        <header className={"facebook-header"}>
        </header>
        <div className={"facebook-main"}>

          <div className={"facebook-main-header"}>
            <div className={"facebook-main-header-profile-image"}>
              <img src={this.state.profile.photo}></img>
              <div className={"facebook-main-header-username"}>
                <span>{this.state.profile.first_name} {this.state.profile.last_name}</span>
              </div>
            </div>
            <div className={"facebook-main-header-cover"}>
              <img src={"https://www.metapps.co.uk/images/generic_facebook_cover_by_djiceblue-d5nek9j.jpg"}></img>
            </div>
          </div>

          <div className={"facebook-main-base"}>

            <div className={"facebook-main-feed"}>

              <div className={"facebook-main-feed-addpost"}>
                <div className={"facebook-main-feed-title"}>Add Post:</div>
                <textarea name="" id="" rows="5" placeholder={"What are you thinking right now? Should Maayan pass?"}></textarea>
                <img src={this.state.profile.photo}></img>
              </div>

              <div className={"facebook-main-feed-title"}>Posts:</div>
              <ul>
                {this.state.feed.map(function(post, index){
                  const creator = post.creator;
                  return <li key={ index }>
                    <div className={"facebook-feed-post-wrapper"}>
                      <div>
                        <img src={creator.photo}></img>
                        <span className={"facebook-feed-post-creatorname"}>{creator.name}</span>
                      </div>
                      <div className={"facebook-feed-post-content"}>{post.text}</div>
                      <div className={"facebook-feed-post-likes"}>
                        <span>Likes: {post.likes} </span>
                        <span>Shares: {post.shares}</span>
                        <span className={"facebook-feed-post-commentscount"}>Comments: {post.comments}</span>
                      </div>
                    </div>
                  </li>;
                })}
              </ul>

            </div>

            <div className={"facebook-main-profile"}>

              <div className={"facebook-main-profile-section"}>
                <div className={"facebook-main-profile-section-inline"}>Location:</div>
                <span>{this.state.profile_location.city}, {this.state.profile_location.country}</span>
              </div>
              <div className={"facebook-main-profile-section"}>
                <div className={"facebook-main-profile-section-inline"}>Age:</div>
                <span>{this.state.profile.age}</span>
              </div>

              <div className={"facebook-main-profile-section"}>
                <div>Groups:</div>
                <ul>
                  {this.state.profile_groups.map(function(group, index){
                    return <li key={ index }>{group}</li>;
                  })}
                </ul>
              </div>

              <div className={"facebook-main-profile-section"}>
                <div>Interests:</div>
                <ul>
                  {this.state.profile_interests.map(function(interest, index){
                    return <li key={ index }>{interest}</li>;
                  })}
                </ul>
              </div>

            </div>

            <div className={"facebook-main-profile"}>

              <div className={"facebook-main-profile-section"}>
                <div className={"facebook-main-profile-section-banner"}>
                  <ul>
                    {this.state.profile_banners.map(function(banner, index){
                      return <li key={ index }>
                          <div>{banner.text}</div>
                          <img src={banner.photo}></img>
                        </li>;
                    })}
                  </ul>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
