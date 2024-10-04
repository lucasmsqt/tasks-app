"use client";

import { useState } from 'react';
import styles from '../../styles/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');       
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Usuário:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Usuário: ${username} \nEmail: ${email} \nPassword: ${password}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
            placeholder="Digite seu usuário"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            placeholder="Digite seu email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
