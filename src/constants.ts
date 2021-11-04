import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  MATICMAINNET = 137,
  MATICTESTNET = 80001,
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

export interface FactoryProps {
  56: string;
  97: string;
  137: string;
  80001: string;
}

export const FACTORY_ADDRESS : FactoryProps = {
  [ChainId.MAINNET]: '0x4a3B76860C1b76f0403025485DE7bfa1F08C48fD',
  [ChainId.BSCTESTNET]: '0x5B7592997eF6Dc590cB104147E28B174923f72dE',
  [ChainId.MATICMAINNET]: '0x17c1D25D5a2d833c266639De5Fbe8896bDBeB234',
  [ChainId.MATICTESTNET]: '0x17c1D25D5a2d833c266639De5Fbe8896bDBeB234',
}

export const INIT_CODE_HASH : FactoryProps = {
  [ChainId.MAINNET]: '0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3',
  [ChainId.BSCTESTNET]: '0xab974afc2f3181c75852feb42f2d73635ceccfa465d3cc3dd694960004e65fb3',
  [ChainId.MATICMAINNET]: '0x4d103b6c779c43f69ce77721bf10af0e9351d8676f0899ab80ea833e6d6db973',
  [ChainId.MATICTESTNET]: '0x4d103b6c779c43f69ce77721bf10af0e9351d8676f0899ab80ea833e6d6db973',
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
