/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'
import {contractAbi} from './contractABI'

const app = new Frog({
  basePath: '/api',
})

app.frame('/', (c) => {
  return c.res({
    action: '/finish',
    image: "https://dweb.mypinata.cloud/ipfs/QmSYN7KT847Nado3fxFafYZgG6NXTMZwbaMvU9jhu5nPmJ",
    imageAspectRatio: "1:1",
    intents: [
      <Button.Transaction target="/mint">Mint</Button.Transaction>,
    ]
  })
})
 
app.frame('/finish', (c) => {
  return c.res({
    image: "https://dweb.mypinata.cloud/ipfs/QmUx3kQH4vR2t7mTmW3jHJgJgJGxjoBsMxt6z1fkZEHyHJ",
    imageAspectRatio: "1:1",
  })
})
 
app.transaction('/mint', (c) => {
  return c.contract({
    abi: contractAbi,
    chainId: 'eip155:84532',
    functionName: 'mint',
    to: '0x378b1C76B44608EcC3fB00744A49e3B85Aee6a67',
  })
})

export const GET = handle(app)
export const POST = handle(app)
