import React , { useState , useEffect } from 'react';
import firebase from'../../firebase';
import { withRouter , Redirect } from 'react-router-dom';



const store = firebase.firestore();

const PostsList = ( props ) => {

    let postId = null;
    if ( props.history.location.pathname !== '/posts' ){
        postId = props.history.location.pathname.split('/posts/')[1];

    }
    
    const [ postListState , changePosts ] = useState({ postsLoaded : false , postsArray : [] , selItem : postId });

    useEffect(() => {
        console.log('use effect');
        store.collection('posts').onSnapshot( ( values ) => {
            let array = [];
            array = values.docs.map((obj) => {
                let defSelected = '';
                if ( postId != null && postId == obj.id ){
                    defSelected = 'selectedItem';
                }
                return {
                    ...obj.data(),
                    id: obj.id,
                    selectedCls:defSelected
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
                    const classSyle = `postItem ${posts.selectedCls}`;
                   

                    return (
                        <div 
                        className={classSyle}
                        key={posts.id}
                        onClick={(e) => {

                            // props.history.replace( `/posts/${posts.id}` )

                            if ( props.history.location.pathname == '/posts' ){
                                props.history.push(`posts/${posts.id}`);

                            } else {
                                props.history.push(`${posts.id}`);
                            }

                            const updatedArray = postListState.postsArray.map(( post ) => {
                                let selCls = "";
                                if ( post.id == posts.id ){
                                    selCls = 'selectedItem'
                                }
                    
                                return {
                                    ...post,
                                    selectedCls : selCls
                                }
                            });
                    
                            changePosts({
                                postsArray : updatedArray
                            });

                        }}
                        >{ posts.title }</div>
                    )
                })
            }
        </div>
    );

}

export default withRouter(PostsList);