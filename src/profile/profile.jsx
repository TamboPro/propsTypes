import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';

const Profile = (props) => {   
    
   const profileCard   = {transition: "0.5s"};  
   const profilePhoto  = {width: "100px", height: "100px", margin: "0 auto", borderRadius: "100%", overflow: "hidden" };
  
  return (
    <div>  
        
        <div className="text-center shadow bg-light p-4 my-5 rounded-3" style={profileCard}>        
            <div className="shadow" style={profilePhoto}>
              <img src={props.children} alt="profile Photo" className="img-fluid" />
            </div>
            <h3 className="pt-3 text-dark">{props.fullName}</h3>
            <p className="text-secondary">{props.bio}</p>
            <p className="text-secondary">{props.profession}</p>
            <div className="social-links">
                <ul>
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin" onClick = {props.handleName(props.fullName)}></i></a></li>                            
                </ul>
            </div>
        </div>        
    </div>
  )
}

Profile.propTypes = {
    fullName: PropTypes.string, 
    bio: PropTypes.string, 
    profession: PropTypes.string,
}

Profile.defaultProps = {
     fullName : "Nom manquant",
     bio : "Biographie manquante",
     profession : "Profession manquante"
}
export default Profile
