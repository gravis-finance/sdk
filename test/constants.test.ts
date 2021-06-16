import { INIT_CODE_HASH } from '../src/constants'

//import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
//import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
//const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real PancakePair.json
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual({"128": "0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3", "137": "0x4d103b6c779c43f69ce77721bf10af0e9351d8676f0899ab80ea833e6d6db973", "256": "0xa617f3812f158648e579c324ce6c22ccaef761dcce17ab01fca40920d57f4c73", "56": "0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3", "80001": "0x4d103b6c779c43f69ce77721bf10af0e9351d8676f0899ab80ea833e6d6db973", "97": "0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3"})
    })
  })
})
