import React from 'react';
import styles from './Connector.module.scss'

interface NoteConnectorProps{
    left: string;
    top: string;
}
const NoteConnector: React.FC<NoteConnectorProps> = (props) => {
    return (
        <div style={{left: props.left, top: props.top}} className={styles.Connector}/>
    );
};

export default NoteConnector;