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
    image: "https://dweb.mypinata.cloud/ipfs/QmNeoBsTcPtdxuoLJ97Sow48VgeUw5vjEHg7w3sCMh8vdj",
    imageAspectRatio: "1:1",
    intents: [
      <Button.Transaction target="/mint">Mint</Button.Transaction>,
    ]
  })
})
 
app.frame('/finish', (c) => {
  return c.res({
    image: "https://dweb.mypinata.cloud/ipfs/QmNeoBsTcPtdxuoLJ97Sow48VgeUw5vjEHg7w3sCMh8vdj",
    imageAspectRatio: "1:1",
  })
})
 
app.transaction('/mint', (c) => {
  return c.contract({
    abi: contractAbi,
    chainId: 'eip155:84532',
    functionName: 'mint',
    args: ['0x1a5516BeDB0CaAB297c8cecaBdFe96325469EF2d', 1, 0, `0x`],
    to: '0x378b1C76B44608EcC3fB00744A49e3B85Aee6a67',
  })
})

export const GET = handle(app)
export const POST = handle(app)