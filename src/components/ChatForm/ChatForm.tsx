import React, { useState } from 'react';
import styles from './ChatForm.module.scss'
import ChatBackground from "../../assets/jpg/ChatForm.jpg"
import { Input, Space, Button, Radio} from "antd";

interface ChatFormProps {
    minimize: boolean
}
const ChatForm = ({minimize} : ChatFormProps) => {

    const [value, setValue] = useState(1);
    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.container + ' ' + (minimize? styles.minimizeContainer : styles.maximizeContainer)}
             style={{backgroundImage: `url(${ChatBackground})`}}>
            <div className={styles.form + ' ' + (minimize? styles.minimizeForm : styles.maximizeForm)}>
                <span className={styles.title}>Оставить заявку</span>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio className={styles.radio} value={1}>Записаться на урок</Radio>
                        <Radio className={styles.radio} value={2}>Заказать Перфоманс</Radio>
                    </Space>
                </Radio.Group>
                <Input className={styles.input} size='large' type='text' placeholder='Имя'/>
                <Input className={styles.input} size='large' type='text' placeholder='Номер телефона'/>
                <Button className={styles.submitButton} size="large" type='primary'>Перезвоните мне!</Button>
            </div>
        </div>
    );
};

export default ChatForm;