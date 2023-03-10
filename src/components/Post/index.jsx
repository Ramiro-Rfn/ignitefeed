import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import ptBr from 'date-fns/locale/pt-BR';

import { useState } from 'react';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Post legal mano!'])
    const [newCommentText, setNewCommentText] = useState('')
     const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function hendleCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter((coment)=>{
            return coment !== commentToDelete;
        })

        setComments(commentWithoutDeletedOne);
    }

    function handleCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line)=>{
                    if(line.type === 'paragraph'){
                        return <p key={line.contet}>{line.content}</p>
                    }else if(line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentText}
                    onChange={hendleCommentChange}
                    placeholder='Deixe um comentário'
                    required
                    onInvalid={handleCommentInvalid}
                />
                
                <footer>
                    <button 
                        type='submit'
                        disabled={newCommentText.length === 0}
                    >
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment)=>{
                    return <Comment key={comment} onDeleteComment={deleteComment} content={comment}/>
                })}
            </div>
        </article>
    )
} 