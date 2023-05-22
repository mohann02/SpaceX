import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    
      <div className="col-sm-6">
                <div className="card  "key={props.rocket.id}>
                  <img src={props.rocket.flickr_images[1]} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{props.rocket.name}</h2>
                    <div className='row rocket-info'>
                        <div className='col-sm-4'>
                        <h4>Height</h4>
                        <p>{props.rocket.height.feet}</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Diameter</h4>
                            <p>{props.rocket.diameter.feet}</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Mass</h4>
                            <p>{props.rocket.mass.kg/1000}Tonne</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>First Flight</h4>
                            <p>{props.rocket.first_flight}</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Active</h4>
                            <p>{props.rocket.active ? `Yes` : `No`}</p>
                        </div>
                        <div className='col-sm-4'>
                            <h4>Cost/Launch</h4>
                            <p>{props.rocket.cost_per_launch/1000000}Million</p>
                        </div>
                    </div>
                    <p>{props.rocket.description}</p>
                    <a href={props.rocket.wikipedia} className='btn btn-info btn-block'>Learn More</a>
                  </div>
                </div>
                </div>
    
  )
}

export default Card
