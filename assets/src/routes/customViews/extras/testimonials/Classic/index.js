import React from "react";
// import StarRatingComponent from "react-star-rating-component";
import {Avatar,Col} from "antd";

// const Classic = ({testimonial}) => {
//   const {content, avatar, name, title} = testimonial;
//   return (
//     <div className="gx-classic-testimonial gx-slide-item">
//       <Avatar src={avatar} alt="..."/>
//       <h3 className="gx-title">{name}</h3>
//       <small className="gx-post-designation">{title}</small>

//       <div className="gx-star-rating">
//         <StarRatingComponent name={name} starCount={5} value={4.5}/>
//       </div>
//       <p className="gx-description">{content}</p>
//     </div>
//   )
// };
const Classic = (props) => {
  const {title, description, logo} = props.features;
  return (
    <div >
      {
        props.features.map((eachFeature)=>{
          return(
            <Col span={6} key={eachFeature.id}
              className="gx-classic-testimonial"
              style={{display:'inline-block'}}>
              {<Avatar src={eachFeature.logo} alt="feature logo"/>}
              <h3 className="gx-title">{eachFeature.title}</h3>
              <p className="gx-description">{eachFeature.description}</p>
            </Col>
          )
        })
      }
      
    </div>
  )
};
export default Classic;

