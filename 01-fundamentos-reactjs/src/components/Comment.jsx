import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src='https://github.com/diego3g.png' />

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

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Jieff, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Curtidas <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}