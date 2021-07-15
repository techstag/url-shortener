import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
}

export default config