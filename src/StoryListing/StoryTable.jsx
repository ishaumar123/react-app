import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
function StoryTable(props) {
  const showStory = ()=>{
   console.log(props.storie)
  }
  return (
    <>
      <div className="col-md-6 col-lg-3 p-3 mt-2 shadow">
        <Card style={{ width: "18rem" }}>
          {props.storie.image && (
            <Card.Img
              variant="top"
              height={300}
              width={300}
              src={props.storie.image.service_url}
            />
          )}
          <Card.Body>
            <Card.Text>{props.storie.user.username}</Card.Text>
            <Link
          to={`/users/${props.storie.user.id}/stories/${props.storie.id}`}
          className='btn btn-md rounded-pill btn-outline-warning mt-2 shadow'
        >
          Show
        </Link>
            {/* <Card.Text>{props.storie.user.username}</Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default StoryTable;
