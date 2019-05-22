import React , { useState , useEffect } from 'react';
import firebase from'../../firebase';
import { withRouter , Redirect } from 'react-router-dom';



const store = firebase.firestore();

const PostsList = ( props ) => {

    window.his = props.history;
    
    const [ postListState , changePosts ] = useState({ postsLoaded : false , postsArray : [] });

    useEffect(() => {
        console.log('use effect');
        store.collection('posts').onSnapshot( ( values ) => {
            let array = [];
            array = values.docs.map((obj) => {

                return {
                    ...obj.data(),
                    id: obj.id
                }
            });
    
            changePosts({
                postsLoaded : true,
                postsArray : array
            });
    
        });
    }, []);

    
    return (
        <div className="postsData">
            {
                postListState.postsArray.length === 0 ? ( postListState.postsLoaded === true ? 'No Posts to display' : 'Loading posts....' ) :

                postListState.postsArray.map(( posts , index ) => {
                    return (
                        <div 
                        key={posts.id}
                        onClick={() => {
                            console.log(props.history);

                            // props.history.replace( `/posts/${posts.id}` )

                            if ( props.history.location.pathname == '/posts' ){
                                props.history.push(`posts/${posts.id}`);

                            } else {
                                props.history.push(`${posts.id}`);
                            }

                        }}
                        >{ posts.title }</div>
                    )
                })
            }
        </div>
    );

}

export default withRouter(PostsList);