'use client'
import styles from './DepartureBoard.module.css'

interface BoardItem {
  label: string
  sublabel: string
}

export function DepartureBoard({ items }: { items: BoardItem[] }) {
  return (
    <div className={styles.board} aria-label="Departure board">
      {items.map((item, i) => (
        <div key={i} role="row" className={styles.row}>
          <div>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.sublabel}>{item.sublabel}</div>
          </div>
          <div className={styles.sublabel}>▶</div>
        </div>
      ))}
    </div>
  )
}
