import { useState } from 'react'
import { motion } from 'framer-motion'
import Skeleton from './Skeleton.jsx'
import GameCoverArt from './GameCoverArt.jsx'

export default function GameCoverImage({ game, className = '' }) {
  const [status, setStatus] = useState('loading')
  const src = `https://loremflickr.com/800/500/${game.imageTag}?lock=${game.imageLock}`

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {status !== 'loaded' && <Skeleton className="absolute inset-0" />}

      {status !== 'error' && (
        <motion.img
          src={src}
          alt={`${game.short} cover art`}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          initial={{ opacity: 0 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0 }}
          transition={{ duration: 0.45 }}
          className="h-full w-full object-cover"
        />
      )}

      {status === 'error' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
          <GameCoverArt id={game.id} />
        </motion.div>
      )}
    </div>
  )
}
