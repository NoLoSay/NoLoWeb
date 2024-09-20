import { ButtonBase } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

const styles: { [key: string]: string } = {
  container_0: 'w-full h-full',
  container_1: 'font-bold',
  container_2: 'flex place-items-end',
}

type CategoryProps = {
  text?: string
  description?: string
  altColor?: boolean
  onClick?: () => void
}

const CategoryButton = ({ text, description, altColor, onClick }: CategoryProps) => {
  return (
    <ButtonBase
      disableRipple
      className={`container_0 ${styles.container_0}`}
      onClick={onClick}
    >
      <div
        className={`flex p-3 rounded-lg shadow-lg bg-white items-center justify-between space-x-5 stroke-black w-full h-full ${
          altColor ? 'bg-yellow-100' : 'bg-white'
        }`}
      >
        <PersonIcon />
        <div>
          <p className={`container_1 ${styles.container_1}`}>{text}</p>
          <p>{description}</p>
        </div>
        <ChevronRightIcon className={`container_2 ${styles.container_2}`} />
      </div>
    </ButtonBase>
  )
}

export default CategoryButton
