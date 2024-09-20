import { Paper } from '@mui/material'

const styles: { [key: string]: string } = {
  container_00: 'flex flex-col items-center p-3 space-y-5 m-5',
  container_0: 'font-sans text-2xl',
  container_1: 'flex flex-row space-x-5 items-center',
  container_2: 'w-12 h-12',
}

type CardProps = {
  title: string
  text: string
  imgPath?: string
}

function GenericCard({ title, text, imgPath }: CardProps) {
  return (
    <Paper className={`container_00 ${styles.container_00}`}>
      <h1 className={`container_0 ${styles.container_0}`}>{title}</h1>
      <div className={`container_1 ${styles.container_1}`}>
        <p>{text}</p>
        {imgPath ? (
          <img
            src={imgPath}
            className={`container_2 ${styles.container_2}`}
          />
        ) : (
          false
        )}
      </div>
    </Paper>
  )
}

export default GenericCard
