import { Button } from "@chakra-ui/react"

interface Props {
    label: string
    link: string
    textColor: string | number
    bgColor: string | number
    btnFunction: ()=> void
}

const RedirectButton = ({label, link, textColor, bgColor, btnFunction}: Props) => {
  return (
    <Button>RedirectsButton</Button>
  )
}

export default RedirectButton