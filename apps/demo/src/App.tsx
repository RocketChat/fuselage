import { useState } from 'react';

// From @rocket.chat/fuselage — base components
import {
  FuselageProvider,
  Button,
  Badge,
  Tag,
  Divider,
  Callout,
  Chip,
  FramedIcon,
  Label,
  Tabs,
  Tile,
  Skeleton,
  ProgressBar,
  Accordion,
} from '@rocket.chat/fuselage';

// From @rocket.chat/fuselage-ui — higher-level components
import { MetricCard, StatusCard, InfoPanel } from '@rocket.chat/fuselage-ui';

// From @rocket.chat/fuselage-admin — admin-specific components
import { AdminPageHeader, AdminDashboard } from '@rocket.chat/fuselage-admin';

// New custom styled components using same tokens
import { styled } from 'tamagui';
import { RcxView, RcxText } from '@rocket.chat/fuselage';

// Custom component — uses the same tokens as everything else
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

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <FuselageProvider theme={theme}>
      <div style={{ minHeight: '100vh', background: theme === 'dark' ? '#1F2329' : '#F7F8FA' }}>

        {/* Admin package — AdminPageHeader */}
        <AdminPageHeader title="Fuselage + Tamagui Demo" subtitle="All packages sharing same tokens">
          <Button primary onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'}
          </Button>
        </AdminPageHeader>

        {/* Tabs */}
        <Section>
          <Tabs>
            <Tabs.Item selected={activeTab === 0} onClick={() => setActiveTab(0)}>
              Components
            </Tabs.Item>
            <Tabs.Item selected={activeTab === 1} onClick={() => setActiveTab(1)}>
              Dashboard
            </Tabs.Item>
            <Tabs.Item selected={activeTab === 2} onClick={() => setActiveTab(2)}>
              Custom
            </Tabs.Item>
          </Tabs>
        </Section>

        {activeTab === 0 && (
          <Section>
            <SectionTitle>Buttons (from @rocket.chat/fuselage)</SectionTitle>
            <Row>
              <Button>Secondary</Button>
              <Button primary>Primary</Button>
              <Button danger>Danger</Button>
              <Button warning>Warning</Button>
              <Button success>Success</Button>
              <Button secondary danger>Secondary Danger</Button>
              <Button disabled>Disabled</Button>
              <Button small>Small</Button>
              <Button large>Large</Button>
            </Row>

            <Divider />

            <SectionTitle>Badges & Tags</SectionTitle>
            <Row>
              <Badge>12</Badge>
              <Badge variant="primary">5</Badge>
              <Badge variant="danger">99+</Badge>
              <Badge variant="warning">3</Badge>
              <Tag>Default</Tag>
              <Tag variant="primary">Primary</Tag>
              <Tag variant="danger">Danger</Tag>
              <Tag variant="featured">Featured</Tag>
            </Row>

            <Divider />

            <SectionTitle>Chips</SectionTitle>
            <Row>
              <Chip onClick={() => alert('clicked')}>Removable Chip</Chip>
              <Chip>Static Chip</Chip>
            </Row>

            <Divider />

            <SectionTitle>Callouts</SectionTitle>
            <Callout type="info" title="Info callout">
              This is an informational message.
            </Callout>
            <Callout type="success" title="Success">
              Operation completed successfully.
            </Callout>
            <Callout type="warning" title="Warning">
              Please review before continuing.
            </Callout>
            <Callout type="danger" title="Error">
              Something went wrong.
            </Callout>

            <Divider />

            <SectionTitle>FramedIcon + Label</SectionTitle>
            <Row>
              <FramedIcon icon="info-circled" info />
              <FramedIcon icon="checkmark-circled" success />
              <FramedIcon icon="warning" warning />
              <FramedIcon icon="ban" danger />
              <Label>Form Label</Label>
              <Label required>Required Label</Label>
              <Label disabled>Disabled Label</Label>
            </Row>

            <Divider />

            <SectionTitle>Tile + Skeleton + ProgressBar</SectionTitle>
            <Tile elevation="1">
              <Skeleton />
              <Skeleton />
              <Skeleton variant="rect" height={80} />
            </Tile>
            <ProgressBar percentage={65} />
            <ProgressBar percentage={100} variant="success" />
            <ProgressBar percentage={30} error />

            <Divider />

            <SectionTitle>Accordion</SectionTitle>
            <Accordion>
              <Accordion.Item title="Section 1">
                Content for section 1
              </Accordion.Item>
              <Accordion.Item title="Section 2">
                Content for section 2
              </Accordion.Item>
              <Accordion.Item title="Disabled" disabled>
                This is disabled
              </Accordion.Item>
            </Accordion>
          </Section>
        )}

        {activeTab === 1 && (
          <Section>
            <SectionTitle>Dashboard (from @rocket.chat/fuselage-admin)</SectionTitle>

            {/* MetricCards from fuselage-ui, composed in AdminDashboard from fuselage-admin */}
            <AdminDashboard>
              <MetricCard label="Active Users" value="1,234" delta="+12%" trend="up" />
              <MetricCard label="Messages Today" value="45.2k" delta="+8%" trend="up" />
              <MetricCard label="Open Tickets" value="23" delta="-5%" trend="down" />
              <MetricCard label="Avg Response" value="2.4m" trend="neutral" />
            </AdminDashboard>

            <Divider />

            <SectionTitle>Status Cards (from @rocket.chat/fuselage-ui)</SectionTitle>
            <Row>
              <StatusCard
                title="Server Status"
                description="All systems operational"
                status="success"
                icon="checkmark-circled"
                count={3}
              />
              <StatusCard
                title="Database"
                description="High memory usage detected"
                status="warning"
                icon="warning"
              />
              <StatusCard
                title="Email Service"
                description="Connection failed"
                status="danger"
                icon="ban"
                count={1}
              />
            </Row>

            <Divider />

            <SectionTitle>Info Panel (from @rocket.chat/fuselage-ui)</SectionTitle>
            <InfoPanel title="Deployment Info" icon="info-circled">
              Version 7.2.0 • Last updated 2 hours ago • Node.js v20.11.0
            </InfoPanel>
          </Section>
        )}

        {activeTab === 2 && (
          <Section>
            <SectionTitle>Custom Components (inline styled)</SectionTitle>
            <RcxText
              fontFamily="$body"
              fontSize="$p1"
              fontWeight="$p1"
              lineHeight="$p1"
              color="$fontDefault"
            >
              This text uses fuselage tokens directly via Tamagui props.
              All 3 packages (fuselage, fuselage-ui, fuselage-admin) share the same
              design tokens and theme — no duplicate CSS generated.
            </RcxText>

            <Divider />

            <SectionTitle>Theme Toggle Demo</SectionTitle>
            <RcxText
              fontFamily="$body"
              fontSize="$p2"
              fontWeight="$p2"
              lineHeight="$p2"
              color="$fontSecondaryInfo"
            >
              Click the toggle button in the header to switch between light and dark themes.
              All components from all packages respond to the same FuselageProvider.
            </RcxText>
          </Section>
        )}
      </div>
    </FuselageProvider>
  );
}
