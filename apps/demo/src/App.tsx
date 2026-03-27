import { useState } from 'react';
import { styled } from 'tamagui';

// From @rocket.chat/fuselage — base components
import {
  FuselageProvider,
  Badge,
  Tag,
  Divider,
  Callout,
  FramedIcon,
  Label,
} from '@rocket.chat/fuselage';

// From @rocket.chat/fuselage-ui
import { MetricCard, StatusCard, InfoPanel } from '@rocket.chat/fuselage-ui';

// Primitives for custom components
import { RcxView, RcxText } from '@rocket.chat/fuselage';

const Section = styled(RcxView, {
  name: 'Section',
  display: 'flex',
  flexDirection: 'column',
  gap: '$x16',
  padding: '$x24',
});

const SectionTitle = styled(RcxText, {
  name: 'SectionTitle',
  display: 'block',
  fontFamily: '$body',
  fontSize: '$h3',
  fontWeight: '$h3',
  lineHeight: '$h3',
  color: '$fontTitlesLabels',
  marginBottom: '$x8',
});

const Row = styled(RcxView, {
  name: 'Row',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$x8',
  alignItems: 'center',
});

const Header = styled(RcxView, {
  name: 'Header',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: '$x16',
  paddingInline: '$x24',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeExtraLight',
  backgroundColor: '$surfaceLight',
});

const HeaderTitle = styled(RcxText, {
  name: 'HeaderTitle',
  fontFamily: '$body',
  fontSize: '$h3',
  fontWeight: '$h3',
  lineHeight: '$h3',
  color: '$fontTitlesLabels',
});

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <FuselageProvider theme={theme}>
      <div
        style={{
          minHeight: '100vh',
          background: theme === 'dark' ? '#1F2329' : '#F7F8FA',
        }}
      >
        <Header>
          <HeaderTitle>Fuselage + Tamagui Demo</HeaderTitle>
          <button
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </Header>

        <Section>
          <SectionTitle>
            Badges &amp; Tags (from @rocket.chat/fuselage)
          </SectionTitle>
          <Row>
            <Badge>12</Badge>
            <Badge variant='primary'>5</Badge>
            <Badge variant='danger'>99+</Badge>
            <Badge variant='warning'>3</Badge>
            <Tag>Default</Tag>
            <Tag variant='primary'>Primary</Tag>
            <Tag variant='danger'>Danger</Tag>
            <Tag variant='featured'>Featured</Tag>
          </Row>
        </Section>

        <Section>
          <SectionTitle>FramedIcon + Label</SectionTitle>
          <Row>
            <FramedIcon icon='info-circled' info />
            <FramedIcon icon='checkmark-circled' success />
            <FramedIcon icon='warning' warning />
            <FramedIcon icon='ban' danger />
            <Label>Form Label</Label>
            <Label required>Required</Label>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Callouts</SectionTitle>
          <Callout type='info' title='Info callout'>
            This is an informational message.
          </Callout>
          <Callout type='success' title='Success'>
            Operation completed successfully.
          </Callout>
          <Callout type='danger' title='Error'>
            Something went wrong.
          </Callout>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>
            MetricCards (from @rocket.chat/fuselage-ui)
          </SectionTitle>
          <Row>
            <MetricCard
              label='Active Users'
              value='1,234'
              delta='+12%'
              trend='up'
            />
            <MetricCard label='Messages' value='45.2k' delta='+8%' trend='up' />
            <MetricCard label='Tickets' value='23' delta='-5%' trend='down' />
          </Row>
        </Section>

        <Section>
          <SectionTitle>
            StatusCards (from @rocket.chat/fuselage-ui)
          </SectionTitle>
          <Row>
            <StatusCard
              title='Server'
              description='All operational'
              status='success'
              icon='checkmark-circled'
              count={3}
            />
            <StatusCard
              title='Database'
              description='High memory'
              status='warning'
              icon='warning'
            />
            <StatusCard
              title='Email'
              description='Connection failed'
              status='danger'
              icon='ban'
              count={1}
            />
          </Row>
        </Section>

        <Section>
          <SectionTitle>InfoPanel (from @rocket.chat/fuselage-ui)</SectionTitle>
          <InfoPanel title='Deployment Info' icon='info-circled'>
            Version 7.2.0 - Last updated 2 hours ago
          </InfoPanel>
        </Section>

        <Section>
          <SectionTitle>Custom Styled (inline, same tokens)</SectionTitle>
          <RcxText fontFamily='$body' fontSize='$p1' color='$fontDefault'>
            This text uses fuselage tokens via Tamagui. All packages share one
            theme.
          </RcxText>
        </Section>
      </div>
    </FuselageProvider>
  );
}
