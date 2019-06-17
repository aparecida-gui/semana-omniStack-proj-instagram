import React from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import api from "../services/api";
import io from "socket.io-client";

class Feed extends React.Component {
  state = {
    feed: []
  };

  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", newPost => {
      this.setState({feed: [newPost, ...this.state.feed]})
    })

    socket.on("like", likePost => {
      this.setState({
        feed: this.state.feed.map(post => (
          post._id === likePost._id ? likePost: post
        ))
      })
    })
  }

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("posts");
    this.setState({ feed: response.data });
    console.log("dataApi: ", this.state.feed);
  }

  handleLike = (id) => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    const { feed } = this.state;
    return (
      <section id="post-list">
        {feed.map(dataPost => (
          <article key={dataPost._id}>
            <header>
              <div className="user-info">
                <span>{dataPost.author}</span>
                <span className="place">{dataPost.place}</span>
              </div>
              <img src={more} alt="mais" />
            </header>
            <img
              src={`http://localhost:3333/files/${dataPost.image}`}
              alt="imagem do redux"
            />
            <footer>
              <div className="actions">
              <button type="button" onClick={()=> this.handleLike(dataPost._id)}>
                <img src={like} alt="curtir" />
              </button>
                <img src={comment} alt="comentário" />
                <img src={send} alt="testes" />
              </div>
              <strong>{dataPost.likes} curtidas</strong>
              <p>
                {dataPost.description}
                <strong>{dataPost.hashtags}</strong>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;