import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Title,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setDescription] = useState(true)
  const description = isReadMore
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription
  const buttonText = isReadMore ? 'Read More' : 'Read Less'
  const onClickButton = () => {
    setDescription(prevState => !prevState)
  }
  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Title>Hooks are a new addition to React</Title>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
