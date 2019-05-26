import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        const {src, alt, name} = this.props;
        
        return(
            <div className="post">

                <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                        alt="prince" 
                        name="Harry Prince"/>

                <img src={src} alt={alt}/>

                <div className="post__name">
                    some account
                </div>

                <div className="post__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut quisquam corporis rerum fugit, 
                    similique optio aperiam distinctio consectetur 
                    quos nulla excepturi quae aut neque hic eum odit et maxime dicta.
                </div>

            </div>
        );
    }
}