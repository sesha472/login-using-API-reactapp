import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedpost:{},
        
    }

    componentDidUpdate () {
        if(this.props.id){
     if(!this.state.loadedpost ||(this.state.loadedpost && this.state.loadedpost.id !== this.props.id)){ 
           let dataaxious= axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);
            dataaxious.then((response)=>{
                this.setState({loadedpost:response.data});
            });
        }
        }
        }
        
      deletposthandler=()=>{ 
         
           axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
           .then(response=>{
               console.log(response.data.id);
           })
        
          }

    render () {
        let post =  <p style={{textAlign:'center'}}>Please select a Post!</p>;
       
        if(this.props.id){
         post =  <p style={{textAlign:'center'}}>Loading.....</p>;
        }
        if(this.state.loadedpost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedpost.author}</h1>
                <h2 style={{backgroundColor: "blue",borderRadius:"10px",boxShadow:"10px 20px 30px black"}}>{this.state.loadedpost.title}</h2>
                <p>{this.state.loadedpost.body}</p>

                <div className="Edit">
                    <button className="Delete" onClick={this.deletposthandler}>Delete</button>
                </div>
            </div>

        );
       }
        
        return post;
    }
}

export default FullPost;

// import React, { Component } from 'react';
// import axios from 'axios';

// import './FullPost.css';

// class FullPost extends Component {
// //     state = {
// //         loadedPost: null
// //     }

//     componentDidUpdate () {
//         if ( this.props.id ) {
//             // if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
//                 axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
//                     .then( response => {
//                         console.log(response);
//                         // this.setState( { loadedPost: response.data } );
//                     } );
//             // }
//         }
//     }

//     render () {
//                 let post =  <p style={{textAlign:'center'}}>Please select a Post!</p>;
//                if(this.props.id){
//                 post = (
//                     <div className="FullPost">
//                         <h1>Title</h1>
//                         <p>Content</p>
//                         <div className="Edit">
//                             <button className="Delete">Delete</button>
//                         </div>
//                     </div>
        
//                 );
//                }
                
//                 return post;
//             }
        
// }

// export default FullPost;