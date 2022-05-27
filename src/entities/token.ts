import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = [ChainId.NEARMAINNET, ChainId.NEARTESTNET].includes(chainId)
      ? address
      : validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xAB70Ec86A21c2BC15a93492E59Fa7d646E581EF7',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.HECOMAINNET]: new Token(
    ChainId.HECOMAINNET,
    '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.HECOTESTNET]: new Token(
    ChainId.HECOTESTNET,
    '0x7aF326B6351C8A9b8fb8CD205CBe11d4Ac5FA836',
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.MATICMAINNET]: new Token(
    ChainId.MATICMAINNET,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'MATIC',
    'Wrapped MATIC'
  ),
  [ChainId.MATICTESTNET]: new Token(
    ChainId.MATICTESTNET,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'MATIC',
    'Wrapped MATIC'
  ),
  [ChainId.ETHEREUMMAINNET]: new Token(
    ChainId.ETHEREUMMAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.ETHEREUMTESTNET]: new Token(
    ChainId.ETHEREUMTESTNET,
    '0xdf032bc4b9dc2782bb09352007d4c57b75160b15',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.AURORAMAINNET]: new Token(
    ChainId.AURORAMAINNET,
    '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.AURORATESTNET]: new Token(
    ChainId.AURORATESTNET,
    '0x8886E7A8883e9A40b30Bd4E16e0e25C2C3f29Cd8',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.NEARMAINNET]: new Token(ChainId.NEARMAINNET, 'near', 18, 'NEAR', 'Near'),
  [ChainId.NEARTESTNET]: new Token(ChainId.NEARTESTNET, 'near', 18, 'NEAR', 'Near'),
  [ChainId.SOLANAMAINNET]: new Token(
    ChainId.SOLANAMAINNET,
    'So11111111111111111111111111111111111111112',
    9,
    'SOL',
    'Wrapped SOL'
  ),
  [ChainId.SOLANATESTNET]: new Token(
    ChainId.SOLANATESTNET,
    'So11111111111111111111111111111111111111112',
    9,
    'SOL',
    'Wrapped SOL'
  )
}
