import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends  Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push('/' + id);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link key={post.id} to={'/' + post.id}>
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                    );
            });
        }

        return (
            <section className="Posts">
                {posts}
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </section>
        );
    }
}

export default Posts;