import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUndoAlt, faLock } from '@fortawesome/free-solid-svg-icons';
function Features() {
  const features = [
    {
      title: 'Free delivery',
      description: 'Free delivery on all orders above Rs. 1499',
      icon: faTruck,
    },
    {
      title: 'Return within 35 days*',
      description: 'No questions asked returns and refunds',
      icon: faUndoAlt,
    },
    {
      title: 'Secure payment',
      description: 'Safe and hassle-free shopping with secure payment gateways',
      icon: faLock,
    },
  ];

  return (
    <div className="container m-6">
      <div className="grid grid-cols-3">
        {features.map((item , index)=>(
            <div key={item.title}>
            <FontAwesomeIcon icon={item.icon}/>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Features;