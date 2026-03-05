import styles from './TicketStub.module.css'

interface Dish {
  name: string
  description: string
  price: string
  platform: string
  service: string
}

export function TicketStub({ dish }: { dish: Dish }) {
  return (
    <div className={styles.stub}>
      <div className={styles.main}>
        <div className={styles.name}><span aria-hidden="true">◈ </span>{dish.name}</div>
        <div className={styles.desc}>{dish.description}</div>
        <div className={styles.route}>── {dish.platform} · {dish.service} ──</div>
      </div>
      <div className={styles.tear} aria-hidden="true" />
      <div className={styles.price}>
        {dish.price}
        <div className={styles.priceStamp}>✦</div>
      </div>
    </div>
  )
}
