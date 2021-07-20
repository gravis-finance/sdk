import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'HT', 'Huobi')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

export const BASE_CURRENCIES: any = {
  [ChainId.MAINNET]: new Currency(18, 'BNB', 'Binance'),
  [ChainId.BSCTESTNET]: new Currency(18, 'BNB', 'Binance'),
  [ChainId.HECOMAINNET]: new Currency(18, 'HT', 'Huobi'),
  [ChainId.HECOTESTNET]: new Currency(18, 'HT', 'Huobi'),
  [ChainId.MATICMAINNET]: new Currency(18, 'MATIC', 'MATIC'),
  [ChainId.MATICTESTNET]: new Currency(18, 'MATIC', 'MATIC'),
  [ChainId.ETHEREUMMAINNET]: new Currency(18, 'ETH', 'Ethereum'),
  [ChainId.ETHEREUMTESTNET]: new Currency(18, 'ETH', 'Ethereum')
}

export const isEther = (currency: any) => {
  return Object.values(BASE_CURRENCIES).includes(currency)
}

const params = new URLSearchParams(window.location.search)
const networkId = params.get('network') as string
const currentChainId = localStorage.getItem('chainId')
const chainId: any = networkId || currentChainId

export const ETHER = (chainId && BASE_CURRENCIES[chainId]) || Currency.ETHER
