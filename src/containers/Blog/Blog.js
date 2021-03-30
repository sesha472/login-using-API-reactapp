import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    
    state={
        posts : [],
        selectpostid:null,
        errormsg:false,
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts=response.data.slice(0,4);
                const updatedposts=posts.map(post=>{
                    return{
                    ...post,
                        author:"sesha",
                    };
                })
                this.setState({ posts : updatedposts});
            })
            .catch(()=>{
              this.setState({errormsg:true})
           })
        };
        postselectedhandler=(id)=>{
            this.setState({selectpostid:id})
        }
        

    
    render () {

        let posts=<p style={{ padding:"20px", borderRadius:"10px" ,boxShadow:"10px 20px 30px black"}}>something went wrong..</p>
        if(!this.state.errormsg){
         posts= this.state.posts.map( post=>{
            return  (<Post
                 title1={post.title}
                  key={post.id} 
                  author={post.author}
                  clicked={()=>this.postselectedhandler(post.id)}
                  />);
                });
        }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectpostid} />
                </section>
                <section>
                    <NewPost />
                </section>
               
            </div>
        );
    }
}

export default Blog;

