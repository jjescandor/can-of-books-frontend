import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    this.props.changeResult();
  };

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div>
        <h1>About Us</h1>
        <div className='developers'>
          <Card className='developersCard'>
            <Card.Body className='developersBody'>
              <Card.Img className='img' src='https://res.cloudinary.com/dxg5jg10h/image/upload/v1629765279/profile_wdlyay.svg' alt='' />
              <Card.Title>Erich Hartnauer</Card.Title>
              <Card.Text>
                I am a Full-Stack developer who thoroughly enjoys making new and exciting practical applications. <br />I am new to the tech field and looking to learn and grow with a company to sharpen my skills.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='developersCard'>
            <Card.Body className='developersBody'>
              <Card.Img className='img' src='https://res.cloudinary.com/dxg5jg10h/image/upload/v1629765279/profile_wdlyay.svg' alt='' />
              <Card.Title>JJ Escandor</Card.Title>
              <Card.Text>
                I'm a Data Scientist with background in software engineering and defense consulting leveraging over a decade of technical and consulting experience. Passionate about using code to optimize efficiency while developing creative, customer-focused solutions. Veteran of the United States Navy, with active Secret clearance.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>)
  }
};

export default Profile;
