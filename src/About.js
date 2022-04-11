import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css';

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div className='developers'>
        <Card className='developersCard'>
          <Card.Body className='developersBody'>
            <Card.Img className='img' src='https://res.cloudinary.com/dxg5jg10h/image/upload/v1629765279/profile_wdlyay.svg' alt='' />
            <Card.Title>Erich Hartnauer</Card.Title>
            <Card.Text>
              I'm Erich Hartnauer. I am a boot Full-Stack developer who thoroughly enjoys making new and exciting practical applications. I am new to the tech field and looking to learn and grow with a company to sharpen my skills.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='developersCard'>
          <Card.Body className='developersBody'>
            <Card.Img className='img' src='https://res.cloudinary.com/dxg5jg10h/image/upload/v1629765279/profile_wdlyay.svg' alt='' />
            <Card.Title>JJ Escandor</Card.Title>
            <Card.Text>
              B Dope af
            </Card.Text>
          </Card.Body>
        </Card>
      </div>)
  }
};

export default Profile;
