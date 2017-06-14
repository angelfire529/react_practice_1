import React from 'react';
import CardList from './CardList';
import Form from './Form';

class App extends React.Component {
    state = {
        cards: [
            {
                name: 'Paul O\'Shannessy',
                company: "Facebook",
                avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
                id: 0
            },
            {
                name: 'Ben Alpert',
                company: "Facebook",
                avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
                id: 1
            }
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards} />
            </div>
        );
    };
}



export default App;