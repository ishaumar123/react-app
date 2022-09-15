import "./story.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const StoryTable = (props) => {
  const showStory = () => {
  };

  return (
    <>
      <div className="col-md-6 col-lg-3 p-3 mt-2 shadow">
        <Card style={{ width: "18rem" }}>
          {props.storie.image && (
            <Card.Img
              className="storytable"
              variant="top"
              src={props.storie.image.service_url}
            />
          )}
          <Card.Body>
            <Card.Text>{props.storie.user.username}</Card.Text>
            <Link
              to={`/stories/${props.storie.id}`}
              className="btn btn-md rounded-pill btn-outline-warning mt-2 shadow"
            >
              Show
            </Link>
            {}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default StoryTable;
