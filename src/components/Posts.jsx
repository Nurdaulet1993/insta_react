import React, {Component} from 'react';
import Post from './Post';
import User from '../components/User';
import InstaService from '../services/instaservice';
import ErrorMessage from '../components/ErrorMessage';
export default class Posts extends Component {

    InstaService = new InstaService();

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({ posts })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }
    renderItems(arr) {
        return arr.map((item) => {

            const {altname, name, photo, src, desc, alt} = item;

            return(
                <div className="post">

                    <User   src={photo}
                            alt={altname}
                            name={name}/>

                    <img src={src} alt={alt}/>

                    <div className="post__name">
                        {name}
                    </div>

                    <div className="post__desc">
                        {desc}
                    </div>

                </div>
            );
        });
    }
    render() {
        const {error, posts} = this.state;
        if (error) {
            return (<ErrorMessage/>);
        }
        const items = this.renderItems(posts);

        return(
            <div className="left">
                {items}
                {/* <Post alt="post" src="https://rupoint.cz/wp-content/uploads/2015/03/Saxony-Mountains-2.jpg"/>
                <Post alt="post" src="https://rupoint.cz/wp-content/uploads/2015/03/Saxony-Mountains-2.jpg"/> */}
            </div>
        );
    }
}