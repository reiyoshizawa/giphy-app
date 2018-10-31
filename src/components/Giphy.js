import React, { Component } from 'react';

class Giphy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      giphy_array: ""
    }
  }
  componentDidMount() {
    this.getApi();
  }
  getApi = async (e) => {
    const api_key = "GMn5DyhINWapdOlqjorRx7HhEBXj4qCZ";
    // const artist_count = 100;
    // const search = "japan";
    // const data = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${artist_count}`);
    const data = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=50`);
    if(data.status === 200) {
      const json = await data.json();
      console.log(json.data);
      const giphys = [];
      json.data.sort((a, b) => {
        return (a.title > b.title ? 1 : -1);
      });
      json.data.forEach(giphy => {
        console.log(json.data);
        giphys.push(
            <li key={giphy.id} className="giphy__item">
              <p>@{giphy.username}</p>
              <p>{giphy.title}</p>
              <img src={giphy.images.original.url} alt="" className="" />
            </li>
        );
      });
      this.setState({
        giphy_array: giphys
      })
    } else {
      console.log(e);
    }
  }

  render () {
    return (
      <main>
        <ul className="giphy__list">
         {this.state.giphy_array}
        </ul>
      </main>
    );
  }

}

export default Giphy;