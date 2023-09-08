import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1 
        });
    }

    return(
        <div className={styles.comment}>

            <Avatar 
                hasBorder={false} 
                src='https://github.com/diego3g.png' 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong> 
                            <time  
                                title='29 de Agosto às 10:37h' 
                                dateTime='2023-08-29 10:37:30'
                            >
                                Cerca de uma 1h atrás
                            </time>
                        </div> 

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Curtidas <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>  
    );
}