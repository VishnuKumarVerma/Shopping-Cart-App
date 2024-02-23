import styles from './EmptyMessage.module.css'

const EmptyMessage = () => {
  return <>
    <h4 className={styles.EmptyMessageClass}>The Cart is Empty! Try to add some Items into the Cart...</h4>
  </>
}

export default EmptyMessage;