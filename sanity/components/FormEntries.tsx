import { useClient } from 'sanity';
import { ToastProvider, useToast, Spinner, Card, Text, Container, Stack, Flex, Heading} from '@sanity/ui';

export default async function FormEntries() {

  const client = useClient({apiVersion: '2024-08-28'});

  const entries = await client.fetch(`*[_type == 'formEntry'] | order(_createdAt desc)`)

  return (
    <Container style={{ marginTop: '60px' }}>
      {/* <Flex align="center" justify="space-between">
        <Heading>{currentTab} Messages</Heading>
        <MessageTabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Flex> */}
      <Stack
        space={3}
        padding={[3]}
        style={{
          marginTop: '18px',
          border: '1px solid #2A2D3F',
          backgroundColor: '#0D0E13',
          borderRadius: '4px',
        }}
      >
        {entries?.length === 0 ? (
          <Heading style={{ padding: '20px', fontSize: '14px' }}>No entries</Heading>
        ) : (
          <>
            {entries?.map(entry => (
              <Card key={entry._id} padding={4} radius={2} shadow={1} tone="transparent" style={{ backgroundColor: '#161824' }}>
                <Flex gap={3} align="center" justify="space-between" style={{ paddingRight: '12px' }}>
                  
                </Flex>
              </Card>
            ))}
          </>
        )}
      </Stack>
    </Container>
  );
}

function LoadingView() {
  return (
    <Container style={{ marginTop: '60px' }}>
      <Card padding={4} radius={2} shadow={1} tone="positive">
        <Flex gap={4} align="center" justify="center">
          <Text align="center" size={3}>
            Loading Entries
          </Text>
          <Spinner muted />
        </Flex>
      </Card>
    </Container>
  );
}
