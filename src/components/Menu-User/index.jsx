import React from 'react'
import styles from './App.module.scss'

export default function MenuUser() {
    return(
        <div className={styles.menuUser}>
            <img src="https://conexao.segurosunimed.com.br/wp-content/uploads/2018/11/mes-homem-1.jpg" />
            <h2>Roberto Carlos</h2>
            <h3>Logado - 4h 56m</h3>
        </div>
    )
}