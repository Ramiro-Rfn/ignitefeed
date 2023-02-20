import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likecount, setLikeCount] =useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((prevState)=>{
            return prevState + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Ramiro-Rfn.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ramiro Nzau</strong>
                            <time title='11 de Maio às 00:13h' dateTime='2022-05-11 00:13:36'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir 
                        <span>{likecount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}