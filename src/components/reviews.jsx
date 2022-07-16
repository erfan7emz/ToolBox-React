import axios from 'axios';
import React, { Component } from 'react'

class Review extends Component {
    state = { 
        reviews: []
    }

    async componentDidMount() { 
        const { data: reviews} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        this.setState({reviews})
     }

    render() { 
        return (
            <div>
                {this.state.reviews.map(review => (<p>{review.name}</p>))}
            </div>
        );
    }
}
 
export default Review;