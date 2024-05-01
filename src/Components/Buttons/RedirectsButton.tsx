import { Button } from "@chakra-ui/react"
import { RedirectBtnProps } from "../../Types/global-types"

const handleNavigate =(url: string)=>{
  window.open(url, "_blank")
}

const RedirectButton = ({label, link, textColor, bgColor}: RedirectBtnProps) => {
  return (
    <Button onClick={()=> handleNavigate(link)} color={textColor} bgColor={bgColor}>{label}</Button>
  )
}

export default RedirectButton