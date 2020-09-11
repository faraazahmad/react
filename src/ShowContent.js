import React from 'react';
import Axios from 'axios';
import { Card } from 'antd';

export class ShowContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
    }

    componentDidMount() {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response.data);
      })
      .catch((error) => { alert(error) });
    }

    render() {
      let {posts} = this.state;
      return (
        <div className="container">
          <ul>
              {posts.map( post => (
                <>
                  <Card className="card" title={post.title} key={post.id}>
                    { post.body }
                  </Card>
                </>
              ))}
          </ul>
        </div>
        );
    }
}

export default ShowContent;  