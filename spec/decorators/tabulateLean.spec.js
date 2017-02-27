import { tabulateLean } from '../../src/decorators'
import * as shared from './shared'

describe('tabulateLean()', () => {
  shared.decorate(tabulateLean)
  shared.behavesLikeALeanDataGrid()
})

