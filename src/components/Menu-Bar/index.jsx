import React from 'react'
import styles from './App.module.scss'
import MenuUser from '../Menu-User'


export default function MenuBar() {
    return(
        <div className={styles.menuBar}>
            <header className={styles.menuHeader}>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Comidas e Drinks</a></li>
                    <li><a href="/">Mensagens</a></li>
                    <li><a href="/">Cardápio</a></li>
                    <li><a href="/">Configurações</a></li>
                </ul>
            </header>
            <MenuUser />
        </div>
    )
}