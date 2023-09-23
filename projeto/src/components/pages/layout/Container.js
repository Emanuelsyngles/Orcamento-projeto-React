import styles from './Container.module.css'

function Container(props) {
    return (
        <div className={`${styles.container}`}>{props.children} ${styles[props.customClass]}</div> 
    )
}
export default Container