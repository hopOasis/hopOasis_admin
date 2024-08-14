import { Button, useRecordContext, useStore } from "react-admin"


export const SetOfferButton: React.FC = () => {
  const [, setValue] = useStore('currentOffer')
  const record = useRecordContext()
  return (
    <Button  onClick={() => setValue(record.id)} label="set Offer"/>
  )
}
