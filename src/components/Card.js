import React, {Component} from 'react';
import { formatDate } from '../helpers/formatDate';

export default class Card extends React.Component {
  render() {
    const {title, date, description, color} = this.props.node
    let cardClass = 'card'
      switch(color){
        case 'green':
        cardClass = 'card color--green'
        break;
        case 'red':
        cardClass = 'card color--red'
        break;
        case 'blue':
        cardClass = 'card color--blue'
        break;
        case 'yellow':
        cardClass = 'card color--yellow'
        break;
      }
    return (
      <div className={cardClass}>
        <h3>{title}</h3>
        <h6 className='date'>Date: {formatDate(date)}</h6>
        <p>
          {description}
        </p>
      </div>
    )
  }
}
