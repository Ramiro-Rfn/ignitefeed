import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/Ramiro-Rfn.png"/>
                
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} weight='fill'/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}