import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import User from './User';
import ErrorMessage from '../components/ErrorMessage';

export default class Users extends Component {

        InstaService = new InstaService();

        state = {
                users: [],
                error: false
        }

        componentDidMount() {
                this.InstaService.getAllUsers()
                .then( users => {
                        this.setState({ users })
                })
                .catch((err) => {
                        this.setState({ error: true })
                });
        }

        renderItems(arr) {
                return  arr.map((item) => {
                        const { name, photo, alt} = item;

                        return(
                                <a href="#" className='user min'>
                                        <img src={ photo } alt={ alt }/>
                                        <div>{ name }</div>
                                </a>
                        );
                });
        };

        render() {

                const {error, users} = this.state;

                if (error) {
                    return (<ErrorMessage/>);
                }
                const items = this.renderItems(users);


                return(
                        <div className="right">
                                <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                                        alt="prince" 
                                        name="Harry Prince"/>
                                <div className="users__block">
                                        {items}
                                        {/* <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                                                alt="prince" 
                                                name="Harry Prince" min/>
                                        <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                                                alt="prince" 
                                                name="Harry Prince" min/>
                                        <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                                                alt="prince" 
                                                name="Harry Prince" min/>
                                        <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                                                alt="prince" 
                                                name="Harry Prince" min/> */}
                                </div>
                        </div>
                );
        }
        
}

