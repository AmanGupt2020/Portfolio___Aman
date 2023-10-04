import React from 'react';
import './projects.css';
import study from './food_app.png';
import img1 from './medical.png';

const Projects = () => {
  const data = [
    { id: 1, img: study, title: 'Yumplatter', details: 'Food delivery app in which we can add food items to cart and can do payments.',visit:'' },
    { id: 2, img: img1, title: 'Krishee Mitra', details: 'Users can easily access animal disease with its symptoms and solution and it provides location through Google maps',visit:'' },
  ]
  return (
    <div className='project_container' id='Projects'>
      <div className='project_head'>
        <h1>Projects</h1>
      </div>
      <div className='project_wrap' style={{position:'relative'}}>
        {data.map((value, i) => (
          <div className='project_cards'>
            <div>
              <img src={value.img} alt="study" />
            </div>
            <div>
              <span>{value.title}</span>
              <hr style={{ width: '50px', height: '3px', background: 'rgb(208, 187, 87)', border: 'none' }} />
              <span>{value.details}</span>
            </div>
            <a href={value.visit} target='_blank'>visit</a>
          </div>
        ))}
      </div>
      <hr style={{ width: '10%', height: '5px',background:'linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)',borderRadius:'50px',border:'none',position:'absolute',bottom:'-32rem'}} />
    </div>
  )
}

export default Projects