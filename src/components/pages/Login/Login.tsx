import { authService } from '../../../api/services/authService';
import { AppButton } from '../../ui/AppButton/AppButton';
import { AppInput } from '../../ui/AppInput/AppInput';
import { Divider } from '../../ui/Divider/Divider';
import React, { useState } from 'react';

import styles from './styles.module.scss';
import config from '../../../../package.json';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Пук");
        const response = await authService.login(email, password);
        console.log(response);
    }

    return (
        <section className={styles.loginRoot}>

            <header className={styles.loginHeader}>

                <h1>
                    Войти в MedTools Web v{config.version}
                </h1>

            </header>

            <form
                onSubmit={handleLogin}
                className={styles.loginForm}>

                <header className={styles.loginFormHeader}>

                    <h2>
                        Войдите в свой аккаунт
                    </h2>

                    <p className={styles.primaryText}>
                        Воспользуйтесь данными, полученными от
                        информационно-аналитического отдела
                    </p>

                </header>

                <section className={styles.inputs}>

                    <AppInput
                        label='Почта'
                        variant='md'
                        placeholder='nikitkadev@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)} />

                    <AppInput
                        label='Пароль'
                        variant='md'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)} />

                </section>

                <Divider />

                <section className={styles.actions}>

                    <AppButton
                        text='Войти'
                        size='md'
                        variant='primary'
                        type='submit' />

                </section>
            </form>
        </section>
    )
}