import { Component } from 'react';
import Card from '../card-container/Card';
import './CardList.css';
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
