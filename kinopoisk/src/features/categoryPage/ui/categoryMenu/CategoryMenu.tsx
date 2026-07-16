import { useMediaQuery } from 'react-responsive'
import { CategoryMenuDesktop } from './categoryMenuDesktop'
import { CategoryMenuMobile } from './categoryMenuMobile/CategoryMenuMobile'

type Props = {
  setCurrentPage: (arg: number) => void
}

export const CategoryMenu = ({ setCurrentPage }: Props) => {
  const isLaptop = useMediaQuery({
    query: '(max-width: 768px)',
  })

  return (
    <>
      {isLaptop ? (
        <CategoryMenuMobile setCurrentPage={setCurrentPage} />
      ) : (
        <CategoryMenuDesktop setCurrentPage={setCurrentPage} />
      )}
    </>
  )
}
