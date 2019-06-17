import React from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import api from "../services/api";

class Feed extends React.Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("posts");
    this.setState({ feed: response.data });
    console.log("dataApi: ", this.state.feed);
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
                <img src={like} alt="curtir" />
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