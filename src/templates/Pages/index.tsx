import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PagesTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        maxime voluptatum recusandae magnam veniam nihil similique animi facere
        quod, vitae doloribus? Natus numquam ipsum odit facere eaque sunt
        blanditiis doloribus?
      </p>
    </S.Body>
  </S.Content>
)

export default PagesTemplate
