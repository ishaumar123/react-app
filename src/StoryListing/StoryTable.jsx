import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom';
function StoryTable (props) {
  return (
    <>
      <div className='col-md-6 col-lg-3 p-3 mt-2'>
        <Card style={{ width: '18rem' }}>
          {
            props.storie.image && <Card.Img variant='top' height={300} width={300} src={props.storie.image.service_url} />
          }
          <Card.Body>
            <Card.Text>{props.storie.user.username}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default StoryTable
