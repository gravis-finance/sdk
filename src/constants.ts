import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  HECOMAINNET = 128,
  HECOTESTNET = 256
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0x4a3B76860C1b76f0403025485DE7bfa1F08C48fD',
  [ChainId.BSCTESTNET]: '0x5B7592997eF6Dc590cB104147E28B174923f72dE',
  [ChainId.HECOMAINNET]: '0x4a3B76860C1b76f0403025485DE7bfa1F08C48fD',
  [ChainId.HECOTESTNET]: '0xD4D395376260B7f7E5143b194FAC7d2c178945a2'
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3',
  [ChainId.BSCTESTNET]: '0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3',
  [ChainId.HECOMAINNET]: '0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3',
  [ChainId.HECOTESTNET]: '0xa617f3812f158648e579c324ce6c22ccaef761dcce17ab01fca40920d57f4c73'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
