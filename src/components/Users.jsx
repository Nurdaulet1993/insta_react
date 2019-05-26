import React from 'react';
import User from './User';

const Users = () => {
    return(
        <div className="right">
            <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
                    alt="prince" 
                    name="Harry Prince"/>
            <div className="users__block">
                <User   src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205229/40-something-man-2-1.jpg" 
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
                        name="Harry Prince" min/>
            </div>
        </div>
    );
}

export default Users;