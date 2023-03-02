import Head from 'next/head'
import { RowCentered, TextPrimary } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>TITLE / Home</title>
    </Head>
    <RowCentered tw="w-full space-x-3">
      <TextPrimary>content</TextPrimary>
    </RowCentered>
  </>
)

export default Home