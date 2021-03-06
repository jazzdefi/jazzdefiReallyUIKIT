import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@mozartfinance/uikit'
import { CommunityTag, CoreTag, NoFeeTag } from 'components/Tags'
import { StyledIconImage, StyledImageContainer } from '../RainbowLight'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  depositFee?: number
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={80} height={80} />
      <Flex flexDirection="column" alignItems="flex-end">
        {lpLabel.split('-')[0] === 'JAZZ' ? (
          <Heading mb="4px" style={{ textShadow: '2px 2px #ffd36b' }}>
            {lpLabel.split(' ')[0]}
          </Heading>
        ) : (
          <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        )}
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
        <Flex justifyContent="center">{depositFee === 0 ? <NoFeeTag /> : null}</Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
