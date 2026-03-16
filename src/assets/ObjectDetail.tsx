import type { GitObject, CommitObject, TreeObject, BlobObject, TagObject } from './ObjectDatabase'
import type { JSX } from 'react'
import { BlobDetail } from './ObjectDetails/BlobDetail'
import { TagDetail } from './ObjectDetails/TagDetail'
import { TreeDetail } from './ObjectDetails/TreeDetail'
import { CommitDetail } from './ObjectDetails/CommitDetail'

interface ObjectDetailProps {
  object: GitObject | CommitObject | TreeObject | BlobObject | TagObject
  allObjects: Array<GitObject | CommitObject | TreeObject | BlobObject | TagObject>
  onSelectObject: (hash: string) => void
}

export function ObjectDetail({
  object,
  allObjects,
  onSelectObject
}: ObjectDetailProps): JSX.Element {

  const getObjectByHash = (
    hash: string
  ): GitObject | CommitObject | TreeObject | BlobObject | TagObject | undefined => {
    return allObjects.find((o) => o.hash === hash)
  }

  return (
    <div className="p-6">
      {object.type === 'commit' && CommitDetail({ commit: object as CommitObject, onSelectObject, getObjectByHash })}
      {object.type === 'tree' && TreeDetail({ tree: object as TreeObject, onSelectObject, getObjectByHash })}
      {object.type === 'blob' && BlobDetail({ blob: object as BlobObject, onSelectObject, getObjectByHash })}
      {object.type === 'tag' && TagDetail({ tag: object as TagObject, onSelectObject })}
    </div>
  )
}
