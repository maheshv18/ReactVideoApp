import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
      
    };
  }
  handleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    
    });
  };
  render() {
    return (
      <div>
        <h2> Mahesh's React App </h2>
        {this.state.showVideo == false && (
          <div
            onClick={this.handleVideo}
            style={{
              backgroundColor: "gray",
              alignText: "Center",
              display: "inline-block",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10
            }}
          >
            BTS (방탄소년단) 'Butter' Official MV
          </div>
        )}
        {this.state.showVideo == false && (
          <div
            onClick={this.handleVideo}
            style={{
              backgroundColor: "gray",
              alignText: "Center",
              display: "inline-block",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10
            }}
          >
            BTS (방탄소년단) 'Butter' Official MV
          </div>
        )}
        {this.state.showVideo == false && (
          <div
            onClick={this.handleVideo}
            style={{
              backgroundColor: "gray",
              alignText: "Center",
              display: "inline-block",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10
            }}
          >
            BTS (방탄소년단) 'Butter' Official MV
          </div>
        )}
        {this.state.showVideo == false && (
          <div
            onClick={this.handleVideo}
            style={{
              backgroundColor: "gray",
              alignText: "Center",
              display: "inline-block",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10
            }}
          >
            BTS (방탄소년단) 'Butter' Official MV
          </div>
        )}
        {this.state.showVideo == true && (
          <span>
          <iframe
            // width="560"
            // height="315"
            style={{
              width: "100%",
              height: "100vh",
              zIndex:0

            }}
            src="https://www.youtube.com/embed/WMweEpGlu_U?autoplay=True"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button
          onClick={this.handleVideo}
          style={{
            position: "absolute",
            left: 10,
            top: 100,
            zIndex:10
          }}>
            Back
            </button>
            </span>
        )}
        
      </div>
    );
  }
}
