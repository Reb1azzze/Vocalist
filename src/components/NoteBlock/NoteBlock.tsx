import React from "react";
import styles from "./NoteBlock.module.scss";
import work_experience from "../../assets/work_experience.png";

interface NoteBlockProps {
    title: string;
    text: string;
    className?: string;
}

const NoteBlock: React.FC<NoteBlockProps> = (props) => {
    return (
        <div className={props.className}>
            <div className={styles.Oval}>
                <img src={work_experience} className={styles.Icon} alt={''}/>
                <br/>
                {props.text}
            </div>
        </div>
    );
};

export default NoteBlock;