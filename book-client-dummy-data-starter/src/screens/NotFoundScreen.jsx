import { useLocation } from "react-router-dom";

const NotFoundScreen = () => {
  const location = useLocation();

  // List of not-found images
  const images = [
    "/not-found/not-found01-min.png",
    "/not-found/not-found02-min.png",
    "/not-found/not-found03-min.png",
    "/not-found/not-found04-min.png",
  ];

  // Randomly select one image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">404 - Not Found</h1>
      <p className="text-muted">Oops! The requested URL <strong>{location.pathname}</strong> was not found.</p>
      
      <img src={randomImage} alt="Not Found" className="img-fluid my-4" style={{ maxWidth: "400px" }} />
      
      <h2>Report Missing Page</h2>
      <form className="text-start mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Missing URL</label>
          <input type="text" className="form-control" value={location.pathname} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Comments</label>
          <textarea className="form-control" rows="3" placeholder="Describe the issue"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default NotFoundScreen;
