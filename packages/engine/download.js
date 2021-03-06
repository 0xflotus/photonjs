const { ensureBinaries } = require('@prisma/fetch-engine')
const path = require('path')
const enginePath = path.join(require.resolve('@prisma/engine-core'), '../..')
const debug = require('debug')('download')
debug(`Downloading binaries to ${enginePath}`)
ensureBinaries(enginePath)
