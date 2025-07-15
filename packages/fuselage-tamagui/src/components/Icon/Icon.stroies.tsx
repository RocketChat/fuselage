import type { Keys } from '@rocket.chat/icons'
import nameToCharacterMapping from '@rocket.chat/icons'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Box from '../Box'
import { Divider } from '../Divider'
import InputBox from '../InputBox'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Data Display/Icon',
  component: Icon,
}
export default meta
type Story = StoryObj<typeof Icon>

const iconsList = Object.keys(nameToCharacterMapping).sort((a, b) =>
  a.localeCompare(b)
) as Keys[]

export const Default: Story = {
  render: () => (
    <Box color="default" flexWrap="wrap" display="flex" gap={24}>
      {iconsList.map((name) => (
        <Icon key={name} name={name} size={40} />
      ))}
    </Box>
  )
}

export const AvailableIcons: Story = {
  render: () => {
    const [filter, setFilter] = useState('')
    const filteredIcons = iconsList.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
      <>
        <Box display="flex" flexDirection="column" mb={4}>
          <Box maxWidth={200}>
            <InputBox
              type="text"
              value={filter}
              onChange={(e) => setFilter((e.target as HTMLInputElement).value)}
              placeholder="Search icons"
              addon={<Icon name="magnifier" size={20} />}
            />
          </Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="flex-start"
          textAlign="center"
          height="90vh"
          overflow="auto"
          gap={24}
        >
          {filteredIcons.map((name) => (
            <Box key={name} mb={32} mi={8} flexShrink={0} flexGrow={0} flexBasis={128}>
              <Box>
                <Icon name={name} size={40} color="default" />
              </Box>
              <Box color="hint" mt={2}>{name}</Box>
            </Box>
          ))}
        </Box>
      </>
    )
  }
}