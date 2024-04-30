import { Button } from "@chakra-ui/react"
import { RedirectBtnProps } from "../../Types/global-types"

const handleNavigate =(url: string)=>{
  window.open(url, "_blank")
}

const RedirectButton = ({label, link, textColor, bgColor, btnFunction}: RedirectBtnProps) => {
  return (
    <Button onClick={()=> handleNavigate(link)}>{label}</Button>
  )
}

export default RedirectButton