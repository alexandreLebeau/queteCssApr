import "./index.scss";

function App() {
  return (
    <article className="profile">
      <div className="profileImage">
        <img src="https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-paysage-ete-campagne-colline.jpeg" />
      </div>
      <h2 className="profileUsername">King Sheep</h2>
      <small className="profileUserHandle">@template_sheep_placeholder</small>
      <div className="profileActions">
        <button className="btn btn--primary">Follow</button>
        <button className="btn btn--icon">
          <i className="fa fa-share" />
        </button>
        <button className="btn btn--icon">
          <i className="fa-regular fa-star" />
        </button>
      </div>
      <div className="profileLinks">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
      </div>
    </article>
  );
}

export default App;
