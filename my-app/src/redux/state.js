import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, messege: 'Hi, how are you', LikesCount: 12 },
            { id: 2, messege: 'How is you it', LikesCount: 13 },
            { id: 1, messege: 'Hi, how are you', LikesCount: 12 },
            { id: 2, messege: 'How is you it', LikesCount: 13 }

        ]
        
    },
    messegesPage: {
        messeges: [
            { id: 1, messege: 'Hi' },
            { id: 1, messege: 'Hellow' },
            { id: 3, messege: 'yo' },
            { id: 4, messege: 'yo' },
            { id: 5, messege: 'yo' }
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrei' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' }
        ]
    }
}

 export let addPost = (postMessege)=>{
     let newPost ={
         id:5,
         messege:postMessege,
         likesCount:0

     };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree();
}

export default state;